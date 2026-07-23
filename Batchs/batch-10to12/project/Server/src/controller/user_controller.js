import { user_model } from '../model/user_model.js'
import { newOtpSend } from '../mail/all_mail_formate.js'
import { error_handling } from '../error/all_error.js'


export const user_signup = async (req, res) => {
    try {

        const data = req.body
        const { name, email, password } = data

        const CheckEmail = await user_model.findOne({ email: email })
        if (CheckEmail) return res.status(400).send({ status: false, message: "Email Already Present" })

        const otpExpiryTime = Date.now() + 1000 + 60 + 5
        const otp = Math.floor(1000 + Math.random() * 9000)

        const uploadData = {
            name, email, password,
            role: 'user',
            verification: { user: { otp, otpExpiryTime } }
        }
        const db = await user_model.create(uploadData)
        newOtpSend(email, name, otp)

        res.status(200).send({ message: db })
    }
    catch (err) { error_handling(err, res) }
}

// status code 
// 100 to 500
// 201 new data create 
// 200 ok 
// 400 user site error 
// 404 not found 
// 500 server 


export const verify_otp = (req, res) => {
    try {

    }
    catch (err) { error_handling(err, res) }

}


export const resend_otp = (req, res) => {
    try {

    }
    catch (err) { error_handling(err, res) }

}