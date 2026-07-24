import { user_model } from '../model/user_model.js'
import { newOtpSend, resend_Otp_Send } from '../mail/all_mail_formate.js'
import { error_handling } from '../error/all_error.js'


export const user_signup = async (req, res) => {
    try {

        const data = req.body
        const { name, email, password } = data

        const otpExpiryTime = Date.now() + 1000 * 60 * 5
        const otp = Math.floor(1000 + Math.random() * 9000)

        const CheckEmail = await user_model.findOne({ email: email })
        if (CheckEmail) {
            if (CheckEmail.isverify) {
                return res.status(200).send({ status: true, message: 'Account Already Verify Pls LogIn' })

            }
            else {
                await user_model.findOneAndUpdate({ email: email },
                    { 'verification.user.otp': otp, 'verification.user.otpExpiryTime': otpExpiryTime, })
                newOtpSend(email, CheckEmail.name, otp)
                const DataBase = {
                    profileImg: CheckEmail.profileImg,
                    name: CheckEmail.name,
                    email: CheckEmail.email,
                    id: CheckEmail._id
                }
                return res.status(200).send({ status: true, message: 'Otp Resend Pls Verify Otp', data: DataBase })
            }
        }



        const uploadData = {
            name, email, password,
            role: 'user',
            verification: { user: { otp, otpExpiryTime } }
        }
        const db = await user_model.create(uploadData)
        newOtpSend(email, name, otp)
        const DataBase = {
            profileImg: db.profileImg,
            name: db.name,
            email: db.email,
            id: db._id
        }
        res.status(200).send({ status: true, message: 'Create Data Successfully', data: DataBase })
    }
    catch (err) { error_handling(err, res) }
}

export const verify_otp = async (req, res) => {
    try {

        const { user_id } = req.query
        const { otp } = req.body

        if (!otp) return res.status(400).send({ status: false, message: 'otp is Required' })
        if (!user_id) return res.status(400).send({ status: false, message: 'id is Required' })

        const check_user = await user_model.findById(user_id)

        if (check_user.isverify) return res.status(200).send({ status: true, message: "Account ALready Verify pls Loig In" })


        const expirytime = check_user.verification?.user?.otpExpiryTime
        const dbOtp = check_user.verification?.user?.otp

        if (!expirytime >= Date.now()) return res.status(400).send({ status: false, message: 'Otp Expire' })
        if (!(otp == dbOtp)) return res.status(400).send({ status: false, message: "Wrong Otp" })

        await user_model.findByIdAndUpdate({ _id: user_id },
            { isverify: true, 'verification.user.otp': null, 'verification.user.otpExpiryTime': null })
            
        res.status(200).send({ status: true, message: "otp verify successfully" })
    }
    catch (err) { error_handling(err, res) }

}


export const resend_otp = async (req, res) => {
    try {
        const { user_id } = req.query

        const otpExpiryTime = Date.now() + 1000 * 60 * 5
        const otp = Math.floor(1000 + Math.random() * 9000)


        const db = await user_model.findByIdAndUpdate({ _id: user_id },
            { 'verification.user.otp': otp, 'verification.user.otpExpiryTime': otpExpiryTime },
        
{new:true}        )
            console.log(db)
        if (!db) return res.status(404).send({ status: false, message: "user not found" })
        resend_Otp_Send(db.email, db.name, otp)

        res.send('send')

    }
    catch (err) { error_handling(err, res) }

}