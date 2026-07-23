import mongoose, { Types } from "mongoose";


const userSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true, lowercase: true },
    password: { type: String, required: true, trim: true },
    isverify: { type: Boolean, required: true, default: false },
    isdelete: { type: Boolean, required: true, default: false },

    state: { type: mongoose.Schema.Types.ObjectId, ref: "state" },
    order: { type: mongoose.Schema.Types.ObjectId, ref: "order" },
    card: { type: mongoose.Schema.Types.ObjectId, ref: "cart" },

    addresslist: [
        {
            address: { type: String, trim: true },
            city: { type: String, trim: true },
            landmark: { type: String, trim: true },
            pincode: { type: Number, trim: true },
            state: { type: String, trim: true },
        }
    ],
    role: { type: String, required: true, enum: ['user', 'admin'], default: 'user' },
    verification: {
        user: {
            otp: { type: Number, default: null },
            otpExpiryTime: { type: Number, default: null },
            isblock: { type: Number, default: null },
            reasonBlock: { type: String, default: null, trim: true }
        },
        admin: {

        }
    }

})



export const user_model = mongoose.model('userDB', userSchema)

