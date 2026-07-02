export const error_handling = (error, res) => {
  
  if (error.code == 11000) {
    return res.status(400).send({ status: false, type: 'Duplicate Entry', message: `already exists ${error.keyValue.email || error.keyValue.mobile}` })
  }
  
  if (error.name === 'ValidationError') {
    
    let errors = []
    
    Object.keys(error.errors).forEach((key, index) => { errors.push(error.errors[key].message) })
    
    return res.status(400).send({ status: false, type: 'Validation Error', totalErrors: errors.length, errors })
  }
  
  if(error.name=='CastError') return res.status(400).send({ status: false, message: 'MongoDB Id Invalid' })
  return res.status(500).send({ status: false, message: error.message })

}