export const error_handling = (err, res) => {
    if (err.name == 'ValidationError') return res.status(400).send({ "message": err.message })
    return res.status(500).send({ "message": err.message })
}