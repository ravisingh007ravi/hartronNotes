import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    profileImg: { type: Object, required: false},
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true, lowercase: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'admin', 'manager'], default: 'user' },
    gender: { type: String, enum: ['male', 'female', 'other'], required: true },
    varification: {
        user: {
            isDelete: { type: Boolean, default: false },
            isVerification: { type: Boolean, default: false },
            userOtp: { type: Number, default: null },
            userOtpExpire: { type: Number, default: null },
            blockType: { type: String, enum: ['delete', 'block','unblock'], default: 'unblock' },
            resone: { type: String }
        },
        admin: {
            adminOtp: { type: Number, default: null },
            userOtpExpire: { type: Date, default: null },
        }
    }
},
    { timestamps: true }
);


const User = mongoose.model('User', userSchema);
export default User