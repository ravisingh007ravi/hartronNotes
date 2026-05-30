export const admin_user = (req, res) => {
    try {
    res.send({ status: true, message: 'usercreate successfully' })
}
catch(err){
    res.send ({status:false,msg:err.message}) 
}
}