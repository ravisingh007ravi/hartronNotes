export const error =(err,res)=>{
    if(err.name === 'ValidationError') return res.status(400).send({ status: false, sucess: false, message: err.message })
    
    return res.status(500).send({ status: false, sucess: false, message: err.message })
}