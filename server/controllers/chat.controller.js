exports.chat = (req, res) => {
    if (!req.body.message) {
        res.status(400).send({
            message: 'A chat message must be included in the request.'
        });
        return;
    }

    if (!req.body.isGeneral && req.body.meetingId == null) {
        res.status(400).send({
            message: 'You must be part of a meeting in order to send a message.'
        });
        return;
    }

    if (req.body.isGeneral) {
        const io = res.locals.io;
        io.emit('message', req.body.message);
        res.status(200).send('The chat message was sent successfully.')
    } else {
        const io = res.locals.io;
        io.emit(req.body.meetingId, req.body.message);
        res.status(200).send('The chat message was sent successfully.')
    }
};
