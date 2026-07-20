import crypto from 'crypto'
import { user_model } from '../model/user_model.js'
import { user_otp_verification_mail } from '../mail/all_mail_formate.js'

export const OTP_LOCK_LADDER = [
    1000 * 60,
    1000 * 60 * 5,
    1000 * 60 * 10,
    1000 * 60 * 60,
    1000 * 60 * 60 * 24,
    1000 * 60 * 60 * 24 * 7,
    1000 * 60 * 60 * 24 * 365,
    1000 * 60 * 60 * 24 * 365 * 10,
]

export const formatRemaining = (ms) => {
    const s = Math.ceil(ms / 1000)
    if (s < 60) return `${s}s`
    const m = Math.ceil(s / 60)
    if (m < 60) return `${m}m`
    const h = Math.ceil(m / 60)
    if (h < 24) return `${h}h`
    const d = Math.ceil(h / 24)
    return `${d}d`
}

export const formatLockTime = (lockUntil) => {
    const d = new Date(lockUntil);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')} ` +
        `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}:${String(d.getSeconds()).padStart(2, '0')}`
}

export const checkOtpLock = async (user) => {
    const lockUntil = user?.verification?.user?.otpLockUntil

    if (lockUntil && Date.now() < lockUntil) {
        const formatted = formatLockTime(lockUntil)
        return {
            isLocked: true,
            response: {
                status: false, message: 'Too many wrong attempts. Pls try again after some time',
                data: { id: user._id, email: user.email }, lockTime: formatted, RawDate: lockUntil
            }
        }
    }

    if (lockUntil && Date.now() >= lockUntil) {
        await user_model.findByIdAndUpdate(user._id,
            { $set: { 'verification.user.otpLockUntil': null, 'verification.user.otpAtm': 1, } }
        )
        user.verification.user.otpLockUntil = null
        user.verification.user.otpAtm = 1
    }

    return { isLocked: false }
}

export const generateAndSendOtp = async (user) => {
    let otp = crypto.randomInt(1000, 9999)
    const otpExpiryTime = Date.now() + 1000 * 60 * 5

    if (user?.verification?.user?.isVerify) {
        return { success: false, response: { status: false, message: 'Account Already Verified... Pls Login' } }
    }

    const lockCheck = await checkOtpLock(user)
    if (lockCheck.isLocked) return { success: false, response: lockCheck.response }


    await user_model.findOneAndUpdate(
        { _id: user._id },
        { $set: { 'verification.user.otp': otp, 'verification.user.otpExpiryTime': otpExpiryTime, } }
    )

    user_otp_verification_mail(user.fname, user.email, otp)
    return { success: true, response: { status: false, message: 'Pls Verify Your Email', data: { id: user._id, email: user.email } } }
}

export const checkUserLoginStatus = async (user) => {
    const { isDelete, blockAcc, isVerify } = user.verification.user

    if (isDelete) return { success: false, response: { status: false, msg: 'Account Deleted' } }
    if (blockAcc) return { success: false, response: { status: false, msg: 'Account Block' } }

    if (!isVerify) {
        const otpResult = await generateAndSendOtp(user)
        if (!otpResult.success) return { success: false, response: otpResult.response }

        return { success: false, response: otpResult.response }
    }
    return { success: true, response: null }
}