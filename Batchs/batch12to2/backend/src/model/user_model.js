import mongoose, { Types } from 'mongoose'

const userSchema = new mongoose.Schema({
    userImg: { type: Object },
    avatar: { type: Object, default: 'https:/' },
    fname: { type: String, required: true, trim: true },
    lname: { type: String, required: true, trim: true },
    gender: { type: String, required: true, enum: ['male', 'female', 'other'], trim: true },
    mobile: { type: Number, required: true, unique: true },
    email: { type: String, required: true, trim: true, unique: true, lowercase: true },
    password: { type: String, required: true, trim: true },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    addressList: [
        {
            pincode: { type: Number, default: null },
            city: { type: String, default: null },
            State: { type: String, enum: ['kaithal'], default: 'kaithal' },
            landmark: { type: String, default: null },
        },
    ],
    isAddress: { type: Boolean, default: false },
    gender: { type: String, required: true, trim: true },
    verification: {
        user: {
            logInInfo: [{ info: Object, default: null }],
            otp: { type: String, default: null },
            otpExpiryTime: { type: Number, default: null },
            isDelete: { type: Boolean, default: false },
            isVerify: { type: Boolean, default: false },
            otpAtm: { type: Number, default: 3 },
            otpBloackTime: { type: Number, default: null },
            otpblockStatus: { type: String, enum: ['1m', '5m', '10m', '1h', '24h', '1w', '1m', '1y', '10y'] },
            blockAcc: { type: Boolean, default: false },
            blockReason: { type: String, default: null },

        },
        admin: {
            logInInfo: [{ info: Object, default: null }],

        }
    }
},
    { timestamps: true }
)

export const user_model = mongoose.model('user', userSchema)
