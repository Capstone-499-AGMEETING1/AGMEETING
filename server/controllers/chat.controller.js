exports.chat = (req, res) => {
    if (!req.body.message) {
        res.status(400).send({
            message: 'A chat message must be included in the request.'
        });
        return;
    }

    console.log(req.body.message);
    const io = res.locals.io;
    io.emit('message', req.body.message);
    res.status(200).send('The chat message was sent successfully.')
};
