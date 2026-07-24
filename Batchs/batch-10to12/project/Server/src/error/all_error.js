export const error_handling = (err, res) => {

    if (err.name == 'ValidationError') return res.status(400).send({ "message": err.message })
    if (err.name == 'CastError') return res.status(400).send({ "message": "mongoDb id Invalid" })
    return res.status(500).send({ "message": err.message })
}