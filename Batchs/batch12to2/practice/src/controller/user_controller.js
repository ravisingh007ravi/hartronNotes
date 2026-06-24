import crypto from 'crypto'
import { error_handling } from '../error/allError.js'
import { user_model } from '../model/user_model.js'

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
            //mail
            return res.status(400).send({ status: false, message: 'Pls Verify Your Email' })
        }

        data.verification = { user: { otp, otpExpiryTime } }
        data.role = 'user'
        data.email = normalizedEmail
        if (userImg) data.userImg = userImg.path

        const DB = await user_model.create(data)

        res.status(201).send({
            status: true, message: 'User created successfully',
            data: { img: DB.userImg, id: DB._id, fname, lname, gender, email, password: DB.password }
        })
    }
    catch (err) { error_handling(err, res) }
}

