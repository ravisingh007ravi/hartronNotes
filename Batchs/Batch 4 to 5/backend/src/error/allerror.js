export const errorhandling = (err, res) => {
    
    if (err.name === 'ValidationError') {
        let errors = []
        Object.keys(err.errors).forEach((key) => { errors.push(err.errors[key].message) })
        return res.status(400).send({ status: false, type: 'Validation Error', totalErrors: errors.length, errors })
    }

    if (err.code == 11000) return res.status(400).send({ status: false, msg: `${Object.keys(err.keyValue)[0]} already exists...` })

    return res.status(500).send({ status: false, msg: err.message })
}