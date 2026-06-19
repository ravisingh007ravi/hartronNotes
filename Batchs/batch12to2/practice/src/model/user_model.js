import mongoose from 'mongoose'
import { ValidName, ValidEmail, ValidGender, ValidMobile, ValidPassword, ValidPincode } from '../validation/allValidation.js'
import bcrypt from 'bcrypt'


const user_schema = new mongoose.Schema({
    userImg: { type: Object }, 
    avatar: { type: Object, default: 'https:/' },
    fname: { type: String, required: [true, 'First Name is Required...'], trim: true, validate: [ValidName, 'Name is not Valid...'] },
    lname: { type: String, required: [true, 'Last name is Required...'], validate: [ValidName, 'Invliad Last Name...'], trim: true },
    gender: { type: String, required: true, enum: ['male', 'female', 'other'], trim: true },
    mobile: { type: Number, required:false, validate: [ValidMobile, 'Invalid Mobile No...'] },
    email: { type: String, required: [true, 'Email is Required'], validate: [ValidEmail, 'Email is not Valid...'], trim: true, unique: true, lowercase: true },
    password: { type: String, required: [true, 'Password is Required'],validate: [ValidPassword, 'Password is not Valid...'], trim: true },
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
    verification: {
        logInInfo: [{ info: Object, default: {} }],
        user: {
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

        }
    }
},
    { timestamps: true }
)

user_schema.pre('save', async function () {
    this.password = await bcrypt.hash(this.password, 10);
});

export const user_model = mongoose.model('users', user_schema)