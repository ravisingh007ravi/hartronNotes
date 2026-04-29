import user_model from '../model/user_model.js'
import { user_otp_verification_send } from '../mail/userMail.js'
import {error} from '../error/allErrorHandling.js'
export const register = async (req, res) => {
    try {
        const data = req.body

        const { name, email, password, gender } = data

        const checkUser = await user_model.findOne({ email: email })
        if (checkUser) return res.status(400).send({ status: false, sucess: false, message: "User Already Present" })
        user_otp_verification_send(email, name, 9999)

        const DB = await user_model.create(data)
        res.status(200).send({ status: true, sucess: true, message: "User Created Successfully", data: DB })
    }
    catch (e) { error(e, res) }
}

export const verify_otp = async (req, res) => {
    try {

    }
    catch (e) { { error(e, res) }}
}

export const loh_in = async (req, res) => {
    try {

    }
    catch (e) { error(e, res) }
}
