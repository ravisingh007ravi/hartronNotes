import user_model from '../model/user_model.js'
import { user_otp_verification_send } from '../mail/userMail.js'
import { error } from '../error/allErrorHandling.js'
import crypto from 'crypto'

export const register = async (req, res) => {
    try {
        const data = req.body

        const { name, email, password, gender } = data

        const randomOtp = crypto.randomInt(1000, 9999)
        const expirtTime = Date.now() + 1000 * 60 * 5

        const checkUser = await user_model.findOneAndUpdate(
            { email: email },
            { $set: { 'verification.user.otp': randomOtp, 'verification.user.otpExpireTime': expirtTime } }
        )

        if (checkUser) {
            if (checkUser.verification.user.isVerify) return res.status(400).send({ status: true, msg: 'Account Already verify pls log In' })
            ser_otp_verification_send(email, checkUser.name, randomOtp)
            return res.status(200).send({ status: true, msg: "resent Otp Send" })
        }

        const DBData = {
            name, email, gender, password, verification: { user: { otp: randomOtp, otpExpireTime: expirtTime } }
        }
        const DB = await user_model.create(DBData)
        user_otp_verification_send(email, name, randomOtp)
        res.status(200).send({ status: true, sucess: true, message: "User Created Successfully", data: DB })
    }
    catch (e) { error(e, res) }
}
 

export const verify_otp = async (req, res) => {
    try {
        const { id } = req.params;
        const { userotp } = req.body;

        if (!userotp) return res.status(400).send({ status: false, msg: "Please provide OTP" });

        const user = await user_model.findOneAndUpdate(
            {
                _id: id,
                "verification.user.otp": userotp,
                "verification.user.otpExpireTime": { $gte: Date.now() },
                "verification.user.isVerify": false
            },
            {$set: { "verification.user.isVerify": true }}
        );

        if (!user) return res.status(400).send({status: false, 
            msg: "Invalid OTP or OTP expired or already verified"});
        
        return res.status(200).send({status: true,msg: "OTP verified successfully"});
    } 
    catch (e) {error(e, res);}
};

export const loh_in = async (req, res) => {
    try {

    }
    catch (e) { error(e, res) }
}
