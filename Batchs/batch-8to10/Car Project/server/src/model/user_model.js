import mongoose from "mongoose";
import { validName, validEmail, validPassword } from '../validation/allvalidation.js'

const userSchema = new mongoose.Schema({
    profileImg: { type: Object },
    name: { type: String, required: [true, 'name is Required'], validate: [validName, 'Name is Invalid'], trim: true },
    email: { type: String, required: [true, 'email is Required'], validate: [validEmail, 'Email is Invalid'], trim: true, unique: true, lowercase: true },
    password: { type: String, required: [true, 'password is Required'], validate: [validPassword, 'Password is Invalid'] },
    role: { type: String, enum: ['admin', 'user', 'manager'], default: 'user', required: true, lowercase: true },
    verification: {
        user: {
            otp: { type: Number, default: null },
            otpExpiryTime: { type: Number, default: null },
            isDelete: { type: Boolean, default: false },
            isVerify: { type: Boolean, default: false },
            isBlock: { type: Boolean, default: false },
            reason: { type: String, default: null },
        },
        admin: {

        }
    }
},
    { timestamps: true }
)


export const user_model = mongoose.model('user', userSchema) 