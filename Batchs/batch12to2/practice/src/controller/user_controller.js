import crypto from 'crypto'
import { error_handling } from '../error/allError.js'
import { user_model } from '../model/user_model.js'
import { user_otp_verification_mail } from '../mail/all_mail_formate.js'
import { OTP_LOCK_LADDER, formatRemaining,  formatLockTime, checkOtpLock, generateAndSendOtp, checkUserLoginStatus } from '../utils/otpUtils.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config({quiet:true})

export const create_user = async (req, res) => {
    try {

        const data = req.body;
        const userImg = req.file
        const { fname, lname, gender, email } = data

        const normalizedEmail = email.replace(/\+(\d+)(?=@)/, '').replace(/\.(?=[^@]*@)/g, '');

        const checkEmail = await user_model.findOne({ email })
            .select({ email: 1, fname: 1, verification: 1 })

        let otp = crypto.randomInt(1000, 9999)
        const otpExpiryTime = Date.now() + 1000 * 60 * 5

        if (checkEmail) {
            if (checkEmail?.verification?.user?.isVerify) {
                return res.status(400).send({ status: false, message: 'Account Already Exists... Pls Login' })
            }

            const lockUntil = checkEmail?.verification?.user?.otpLockUntil
            if (lockUntil && Date.now() < lockUntil) {

                const d = new Date(lockUntil);

                const formatted =
                    `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')} ` +
                    `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}:${String(d.getSeconds()).padStart(2, '0')}`;

                return res.status(429).send({
                    status: false,
                    message: 'Too many wrong attempts. Pls try again after some time',
                    data: { id: checkEmail._id, email }, lockTime: formatted, RawDate: lockUntil

                })
            }

            await user_model.findOneAndUpdate(
                { email },
                {
                    $set: {
                        'verification.user.otp': otp,
                        'verification.user.otpExpiryTime': otpExpiryTime,
                    }
                }
            )
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
        const id = req.query?.id
        const otp = req.body?.otp

        if (!id) return res.status(400).send({ status: false, message: 'Id is Required' })
        if (!otp) return res.status(400).send({ status: false, message: 'Otp is Required' })

        const data = await user_model.findOne({ _id: id })
        if (!data) return res.status(404).send({ status: false, message: 'User not Found...' })

        const v = data.verification.user
        const now = Date.now()

        if (v.isVerify) {
            return res.status(400).send({ status: false, message: 'Otp Already Verify Pls LogIn...' })
        }

        if (v.otpLockUntil && now < v.otpLockUntil) {
            return res.status(429).send({
                status: false,
                message: `Too many wrong attempts. Try again after ${formatRemaining(v.otpLockUntil - now)}`,
                lockUntil: v.otpLockUntil
            })
        }

        if (v.otpLockUntil && now >= v.otpLockUntil) {
            await user_model.findByIdAndUpdate(id, {
                $set: {
                    'verification.user.otpLockUntil': null,
                    'verification.user.otpAtm': 1,
                }
            })
            v.otpLockUntil = null
            v.otpAtm = 1
        }

        if (!v.otpExpiryTime || v.otpExpiryTime <= now) {
            return res.status(400).send({ status: false, message: 'Otp Time Expire...' })
        }

        if (v.otp == otp) {
            await user_model.findByIdAndUpdate(id, {
                $set: {
                    'verification.user.isVerify': true,
                    'verification.user.otp': null,
                    'verification.user.otpExpiryTime': null,
                    'verification.user.otpAtm': null,
                    'verification.user.otpLockUntil': null,
                    'verification.user.otpLockStage': -1,
                }
            })
            return res.status(200).send({ status: true, message: "otp Verify Sucessfully..." })
        }

        const remainingAtm = v.otpAtm - 1

        if (remainingAtm <= 0) {
            const nextStage = Math.min(v.otpLockStage + 1, OTP_LOCK_LADDER.length - 1)
            const lockUntil = now + OTP_LOCK_LADDER[nextStage]

            await user_model.findByIdAndUpdate(id, {
                $set: {
                    'verification.user.otpAtm': 1,
                    'verification.user.otpLockUntil': lockUntil,
                    'verification.user.otpLockStage': nextStage,
                }
            })

            return res.status(429).send({
                status: false,
                message: `Too many wrong attempts. Locked for ${formatRemaining(OTP_LOCK_LADDER[nextStage])}`,
                lockUntil
            })
        }

        await user_model.findByIdAndUpdate(id, {
            $set: { 'verification.user.otpAtm': remainingAtm }
        })

        return res.status(400).send({ status: false, message: `Wrong Otp, remaining attempts ${remainingAtm}` })

    }
    catch (err) {
        error_handling(err, res)
    }
}

export const resend_otp = async (req, res) => {
    try {
        const { id } = req.params

        if (!id) return res.status(400).send({ status: false, message: 'Id is Required' })

        const user = await user_model.findById(id)
            .select({ email: 1, fname: 1, verification: 1 })
        
        if (!user) return res.status(404).send({ status: false, message: 'User not found' })

        const result = await generateAndSendOtp(user)
        
        if (!result.success) {
            return res.status(400).send(result.response)
        }

        return res.status(400).send(result.response)
    }
    catch (err) { 
        error_handling(err, res) 
    }
}

export const user_login = async (req, res) => {
    try {
        const data = req.body
        const { email, password } = data

        if (!email) return res.status(400).send({ status: false, msg: 'Email id is Required' })
        if (!password) return res.status(400).send({ status: false, msg: 'Password id is Required' })

        const user = await user_model.findOne({ email: email })
        if (!user) return res.status(400).send({ status: false, msg: 'User Not Found' })

        const loginCheck = await checkUserLoginStatus(user)
        
        if (!loginCheck.success) {
            return res.status(400).send(loginCheck.response)
        }

        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) {
            return res.status(400).send({ status: false, msg: 'Invalid Password' })
        }

        const token = jwt.sign({ userId: user._id, role: user.role }, process.env.user_secret_key, { expiresIn: '7d' })

        return res.status(200).send({
            status: true,
            msg: 'Login Successful',
            data: {
                id: user._id,
                email: user.email,
                fname: user.fname,
                role: user.role,
                token: token
            }
        })
    }
    catch (err) { 
        error_handling(err, res) 
    }
}







export const user_change_img = async (req, res) => {
    try {

    }

    catch (err) { error_handling(err, res) }
}

export const user_add_address = async (req, res) => {
    try {

    }

    catch (err) { error_handling(err, res) }
}

export const user_update_address = async (req, res) => {
    try {

    }

    catch (err) { error_handling(err, res) }
}

export const user_delete_address = async (req, res) => {
    try {

    }

    catch (err) { error_handling(err, res) }
}

export const user_update_profile = async (req, res) => {
    try {

    }

    catch (err) { error_handling(err, res) }
}

export const user_delete_account = async (req, res) => {
    try {

    }

    catch (err) { error_handling(err, res) }
}