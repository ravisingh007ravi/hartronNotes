import user_model from '../model/user_model.js'
import { user_otp_verification_send, user_resend_otp } from '../mail/userMail.js'
import { error } from '../error/allErrorHandling.js'
import crypto from 'crypto'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

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
            user_otp_verification_send(email, checkUser.name, randomOtp)
            const db = { id: checkUser._id, name: checkUser.name, email: checkUser.email, img: checkUser.profileImg }
            return res.status(200).send({ status: true, msg: "resent Otp Send", db })
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
    catch (e) { error(e, res); }
};

export const resend_otp = async (req, res) => {
    try {
        const { id } = req.params

        const expirtTime = Date.now() + 1000 * 60 * 5
        const randomOtp = crypto.randomInt(1000, 9999)

        const updatedOtp = await user_model.findOneAndUpdate({ _id: id, 'verification.user.isVerify': false },
            { $set: { 'verification.user.otp': randomOtp, 'verification.user.otpExpireTime': expirtTime } }
        )
        if (!updatedOtp) return res.status(404).send({ status: false, msg: 'user not found' })
        user_resend_otp(updatedOtp.email, updatedOtp.name, randomOtp)
        res.status(200).send({ status: true, msg: 'resend otp send' })
    }
    catch (e) { error(e, res) }
}


export const loh_in = async (req, res) => {
    try {
        const { email, password } = req.body

        const checkUser = await user_model.findOne({ email: email })
        if (!checkUser) return res.status(404).send({ status: false, msg: 'user not found' })

        if (checkUser) {
            const { isVerify, isDelete, block } = checkUser.verification.user
            if (!isVerify) return res.status(404).send({ status: false, msg: 'pls verify otp' })
            if (isDelete) return res.status(404).send({ status: false, msg: 'Account is Delete' })
            if (block) return res.status(404).send({ status: false, msg: 'Your Account is block by Admin' })
        }

        const checkPass = await bcrypt.compare(password, checkUser.password)
        if (!checkPass) return res.status(404).send({ status: false, msg: 'wrong password' })

        const token = jwt.sign({id:checkUser._id},process.env.UserTokenKey,{expiresIn:'1d'})

        res.status(200).send({status:true,msg:'logIn Succ',token,id:checkUser._id})  
    }
    catch (e) { error(e, res) }
}
