export const errorhandling = (err, res) => {

    if (err.name === 'ValidationError') {

        let errors = []

        Object.keys(err.errors).forEach((key, index) => {errors.push(err.errors[key].message)})

        return res.status(400).send({ status: false, type: 'Validation Error', totalErrors: errors.length, errors })
    }

   return res.status(500).send({status: false,type: 'Server Error',msg: err.message || 'Internal Server Error...' })
}