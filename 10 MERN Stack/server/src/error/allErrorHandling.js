export const error =(err,res)=>{
    if(err.name === 'ValidationError') return res.status(400).send({ status: false, sucess: false, message: err.message })
    if(err.name === 'CastError') return res.status(400).send({ status: false, sucess: false, message: 'MongoDB id Invalid' })
    
    return res.status(500).send({ status: false, sucess: false, message: err.message })
}