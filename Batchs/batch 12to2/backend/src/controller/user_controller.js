export const create_user = (req,res)=>{
  try{
	res.status(200).send({status:true,msg:"ok"})

  }
  catch(err){return res.status(500).send({status:false,msg:err.message})}
}
