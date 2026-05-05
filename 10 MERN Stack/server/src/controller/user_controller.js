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
        const { id } = req.params 
        const userotp = req.body.userotp

        if (!userotp) return res.status(404).send({ status: false, msg: "pls Provide opt" })

        const checkUser = await user_model.findById(id)
        if (!checkUser) return res.status(404).send({ status: false, msg: "user not found" })

        const { otp, otpExpireTime } = checkUser.verification.user
        
        if (!(Date.now() <= otpExpireTime)) return res.status(400).send({ status: false, msg: "otp Expire" })

        if (otp != userotp) return res.status(400).send({ status: false, msg: "wrong otp" })

        await user_model.findByIdAndUpdate(id, { $set: { 'verification.user.isVerify': true } })

        res.status(200).send({ status: true, msg: 'Otp Verify Sucessfully' })
    }
    catch (e) { { error(e, res) } }
}

export const loh_in = async (req, res) => {
    try {

    }
    catch (e) { error(e, res) }
}
