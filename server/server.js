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
const {joinUser, getCurrentUser, disconnectUser} = require('./chatusers.js');

const io = socketIo(server, {
    cors: {
        origin: 'http://localhost:3000'
    }
});

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
