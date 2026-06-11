import { user_model } from '../model/user_model.js'
import { errorhandling } from '../error/allerror.js'
import crypto from 'crypto'
import { first_user_otp, resend_otp } from '../mail/all_mail.js'
import { UploadProfileImg } from '../Img/img_url.js'


export const create_user = async (req, res) => {
    try {

        const data = req.body;
        const file = req.file



        const { fname, lname, email, gender, mobile, password } = data

        let expiryTime = Date.now() + 1000 * 60 * 5
        let randomOtp = crypto.randomInt(1000, 9999)

        if (!email) return res.status(400).send({ status: false, msg: "Email is Required..." })
        const normalizedEmail = email.replace(/\+(\d+)(?=@)/, '').replace(/\.(?=[^@]*@)/g, '');

        const existingUser = await user_model.findOne({ $or: [{ email: normalizedEmail }, { mobile: mobile }] })

        if (existingUser) {
            if (existingUser.verification.user.isVerify) {
                return res.status(400).send({ status: false, msg: 'User Already Exists Pls LogIn' })
            }

            await user_model.findOneAndUpdate({ email: normalizedEmail },
                { $set: { 'verification.user.otp': randomOtp, 'verification.user.otpExpiryTime': expiryTime } }
            )
            resend_otp(fname, lname, email, randomOtp)

            return res.status(200).send({
                status: true, msg: 'Resend Otp Send Pls Verify Yourt Account...',
                data: {userImg, id: existingUser._id, fname: existingUser.fname, lname: existingUser.lname, email: existingUser.email }
            })
        }




        const UploadData = {
            userImg:{},fname, lname, email: normalizedEmail, gender, mobile, password, role: 'user',
            verification: { user: { otp: randomOtp, otpExpiryTime: expiryTime } }
        }

        if (file) {
            const imgUrl = await UploadProfileImg(file.path)
            UploadData.userImg = imgUrl
        }


        first_user_otp(fname, lname, email, randomOtp)
        const db = await user_model.create(UploadData)
        res.send({
            status: true, msg: 'Create User Successfully', data:
                { id: db._id, fname, lname, email,userImg:db.userImg }
        })
    }
    catch (err) { errorhandling(err, res) }
}

