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

        const OTP_LOCK_LADDER = [
            1000 * 60,
            1000 * 60 * 5,
            1000 * 60 * 10,
            1000 * 60 * 60,
            1000 * 60 * 60 * 24,
            1000 * 60 * 60 * 24 * 7,
            1000 * 60 * 60 * 24 * 365,
            1000 * 60 * 60 * 24 * 365 * 10,

        ]

        const formatRemaining = (ms) => {
            const s = Math.ceil(ms / 1000)
            if (s < 60) return `${s}s`
            const m = Math.ceil(s / 60)
            if (m < 60) return `${m}m`
            const h = Math.ceil(m / 60)
            if (h < 24) return `${h}h`
            const d = Math.ceil(h / 24)
            return `${d}d`
        }

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

        const checkEmail = await user_model.findById(id)
            .select({ email: 1, fname: 1, verification: 1 })
        let otp = crypto.randomInt(1000, 9999)
        const otpExpiryTime = Date.now() + 1000 * 60 * 5


        if (!checkEmail) return res.status(404).send({ status: false, message: 'User not found' })


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
                    data: { id: checkEmail._id }, lockTime: formatted, RawDate: lockUntil

                })
            }

            await user_model.findOneAndUpdate(
                { _id: id },
                {
                    $set: {
                        'verification.user.otp': otp,
                        'verification.user.otpExpiryTime': otpExpiryTime,
                    }
                }
            )
            user_otp_verification_mail(checkEmail.fname, checkEmail.email, otp)
            return res.status(400).send({
                status: false, message: 'Pls Verify Your Email',
                data: { id: checkEmail._id, email: checkEmail.email }
            })
        }
    }

    catch (err) { error_handling(err, res) }
}

export const user_login = async (req, res) => {
    try {

    }

    catch (err) { error_handling(err, res) }
}