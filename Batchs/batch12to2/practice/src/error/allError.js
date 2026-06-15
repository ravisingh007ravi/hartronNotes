export const error_handling = (error,res)=>{

    res.status(500).send({status:false,message:error.message})

}