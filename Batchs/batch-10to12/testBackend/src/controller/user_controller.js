export const create_user = (req,res)=>{
    try{
        res.send({status:true,msg:"ok"})
    }   
    catch(e){
        res.send({status:false,msg:e.message})
    }
}