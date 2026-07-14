export const create_user = (req, res) => {
    try{
        res.status(500).snd("ok")
    }
    catch(err){return res.status(500).send({status:false,message:err.message})}
}

export const otp_verification = (req, res) => {
    try{

    }
       catch(err){return res.status(500).send({status:false,message:err.message})}

}

export const resend_otp_user = (req, res) => {
    try{

    }
       catch(err){return res.status(500).send({status:false,message:err.message})}

}

export const logIn_user = (req, res) => {
    try{

    }
       catch(err){return res.status(500).send({status:false,message:err.message})}

}

// Status Code 
// 100 200 300 400 500
// 200 => ok
// 201 => new resourse create in DB
// 400 => user site error mean enter wrong data in field email == pass false email == email
// 404 => not found from DB
// 500 => server error it's mean your backend code problem