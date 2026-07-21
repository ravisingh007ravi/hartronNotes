import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    profileImg: { type: Object },
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'user', 'manager'], default: 'user',required:true,lowercase: true },
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