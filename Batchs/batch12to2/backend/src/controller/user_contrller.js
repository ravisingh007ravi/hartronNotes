import { user_model } from '../model/user_model.js'
import { errorhandling } from '../error/allerror.js'
import crypto from 'crypto'
import { first_user_otp } from '../mail/all_mail.js'

export const create_user = async (req, res) => {
    try {

        const data = req.body;
        const { fname, lname, email, gender, mobile, password } = data

        let expiryTime = Date.now() + 1000 * 60 * 5
        let date = new Date()
        let randomOtp = crypto.randomInt(1000, 9999)
        const normalizedEmail = email.replace(/\./g, '').replace(/\+.*(?=@)/, '');
        const UploadData = {
            fname, lname, email:normalizedEmail, gender, mobile, password, role: 'user',
            verification: { user: { otp: randomOtp, otpExpiryTime: expiryTime } }
        }

        first_user_otp(fname, lname, email, randomOtp)
        const db = await user_model.create(UploadData)
        res.send({
            status: true, msg: 'Create User Successfully', data:
                { id: db._id, fname, lname, email, mobile }
        })
    }
    catch (err) { errorhandling(err, res) }
}         

