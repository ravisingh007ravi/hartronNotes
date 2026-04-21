import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    profileImg: { type: Object, required: false },
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true, lowercase: true },
    password: { type: String, required: true, trim: true },
    gender: { type: String, enum: ['male', 'female', 'other'], required: true, trim: true },
    verification: {
        user: {
            isVerify:{type: Boolean, default: false},
            otpExpireTime:{type: Number, default: null},
            otp:{type:Number, default: null},
            block:{type: Boolean, default: false},
            blockStatus:{type: String, default: null,enum:[]},
            isDelete:{type: Boolean, default: false},
        },
        admin: {
            otp:{type: Number, default: null},
            isVerify:{type: Boolean, default: false},           
        }
    } 
})

export default mongoose.model('User', UserSchema)
