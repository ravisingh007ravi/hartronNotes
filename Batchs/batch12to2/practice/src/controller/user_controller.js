import crypto from 'crypto'
import { error_handling } from '../error/allError.js'
import { user_model } from '../model/user_model.js'
import { user_otp_verification_mail } from '../mail/all_mail_formate.js'
export const create_user = async (req, res) => {
    try {

        const data = req.body;
        const userImg = req.file
        const { fname, lname, gender, email } = data

        const normalizedEmail = email.replace(/\+(\d+)(?=@)/, '').replace(/\.(?=[^@]*@)/g, '');

        const checkEmail = await user_model.findOne({ email })
            .select({ email: 1, 'verification.user.isVerify': 1 })

        let otp = crypto.randomInt(1000, 9999)
        const otpExpiryTime = Date.now() + 1000 * 60 * 5

        if (checkEmail) {
            if (checkEmail?.verification?.user?.isVerify) {
                return res.status(400).send({ status: false, message: 'Account Already Exists... Pls Login' })
            }
            await user_model.findOneAndUpdate({ email }, { $set: { verification: { user: { otp, otpExpiryTime } } } })
            user_otp_verification_mail(checkEmail.fname, email, otp)
            return res.status(400).send({
                status: false, message: 'Pls Verify Your Email',
                data: { id: checkEmail._id, email }
            })
        }

        data.verification = { user: { otp, otpExpiryTime } }
        data.role = 'user'
        data.email = normalizedEmail
        if (userImg) data.userImg = userImg.path
        user_otp_verification_mail(fname, email, otp)
        const DB = await user_model.create(data)

        res.status(201).send({
            status: true, message: 'User created successfully',
            data: { id: DB._id, email }
        })
    }
    catch (err) { error_handling(err, res) }
}

export const user_otp_verify = async (req, res) => {
    try {
        const id = req.params?.id || req.query?.id
        const otp = req.body?.otp

        if (!id) return res.status(400).send({ status: false, message: 'Id is Required' })
        if (!otp) return res.status(400).send({ status: false, message: 'Otp is Required' })


        const data = await user_model.findOne({ _id: id })
        if (!data) return res.status(404).send({ status: false, message: 'User not Found...' })

        const presentTime = Date.now()
        const futureTime = data.verification?.user?.otpExpiryTime


        if (data.verification.user.isVerify) return res.status(400).send({ status: false, message: 'Otp Already Verify Pls LogIn...' })
        if (futureTime <= presentTime) return res.status(400).send({ status: false, message: 'Otp Time Expire...' })

        if ((data.verification.user.otp) == otp) {
            await user_model.findOneAndUpdate(
                { _id: id },
                { $set: { 'verification.user.isVerify': true, 'verification.user.otp': null, 'verification.user.otpExpiryTime': null } })
            return res.status(200).send({ status: true, message: "otp Verify Sucessfully..." })
        }
        return res.status(400).send({ status: false, message: "Wrong Otp" })
    }
    catch (err) { error_handling(err, res) }
}