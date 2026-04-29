import mongoose from "mongoose";
import { validName, validEmail, validPassword, validgender } from '../validation/allValidation.js'

const UserSchema = new mongoose.Schema({
    profileImg: { type: Object, required: false },
    name: { type: String, required: [true, 'Name is required'], 
        validate: [validName, 'Invalid name'], trim: true },
    email: { type: String, required: [true, 'Email is required'], 
        validate: [validEmail, 'Invalid Email'], trim: true, unique: true, lowercase: true },
    password: { type: String, required: [true, 'Password is required'], 
        validate: [validPassword, 'Invalid password'], trim: true },
    gender: { type: String, enum: ['male', 'female', 'other'], required: [true, 'Gender is required'], 
        validate: [validgender, 'Invalid Gender'], trim: true },
    verification: {
        user: {
            isVerify: { type: Boolean, default: false },
            otpExpireTime: { type: Number, default: null },
            otp: { type: Number, default: null },
            block: { type: Boolean, default: false },
            blockStatus: { type: String, default: null, enum: [] },
            isDelete: { type: Boolean, default: false },
        },
        admin: {
            otp: { type: Number, default: null },
            isVerify: { type: Boolean, default: false },
        }
    }
})

export default mongoose.model('User', UserSchema)
