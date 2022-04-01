const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
const indexRoutes = require("./controllers/index.controller")
const DIST_DIR = path.join(__dirname, "public");
const HTML_FILE = path.join(DIST_DIR, "index.html");
const db = require('./models');
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const http = require('http')
const socketIo = require('socket.io');
const server = http.createServer(app);
const multer = require('multer');

const {joinUser, getCurrentUser, disconnectUser} = require('./chatusers.js');

const io = socketIo(server, {
    cors: {
        origin: 'http://localhost:3000'
    }
});

//multer local storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './client/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
   
const upload = multer({ storage: storage })

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.static(path.join(__dirname, "../dist")));
app.use(bodyParser.json());
app.use(cors());

// For passport
app.use(session({secret: 'keyboard cat', resave: false, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser('keyboard cat'));

require('./routes/user.routes')(app);
require('./routes/meeting.routes')(app);
require('./routes/item.routes')(app);
require('./routes/chat.routes')(app, io);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../dist', 'index.html'), function (err) {
        if (err) {
            res.status(500).send(err);
        }
    });
});

//multer single file upload
app.post('/uploadfile', upload.single('myFile'), (req, res, next) => {
    const file = req.file
    if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next(error)
    }
      res.send(file)
    
  })

//multer multi file upload
app.post('/uploadmultiple', upload.array('myFiles', 12), (req, res, next) => {
    const files = req.files
    if (!files) {
      const error = new Error('Please choose files')
      error.httpStatusCode = 400
      return next(error)
    }
   
      res.send(files)
    
})

io.on('connection', (socket) => {
    console.log('A new client has connected.');
    socket.on('message', (msg) => {
        io.emit('message', msg);
    })
    socket.on('disconnect', (reason) => {
        console.log(reason);
    });

    socket.on('joinRoom', ({username, room}) => {
        const user = joinUser(socket.id, username, room);
        socket.join(user.room);

        socket.emit('message', {
            userId: user.id,
            username: user.username,
            text: `Welcome ${user.username}`
        });

        socket.broadcast.to(user.room).emit('message', {
            userId: user.id,
            username: user.username,
            text: `${user.username} has joined the chat.`
        });
    });

    socket.on('chat', (text) => {
        const user = getCurrentUser(socket.id);

        io.to(user.room).emit('message', {
            userId: user.id,
            username: user.username,
            text: text
        });
    });
});



db.sequelize.sync().then(() => {
    server.listen(port, () => {
        console.log(`The app server is running on port: ${port}`);
    });
});
