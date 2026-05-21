import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    fname: { type: String, required: true, trim: true },
    lname: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique:true,lowercase:true },
    password: { type: String, required: true, trim: true },
    gender: { type: String, required: true, trim: true },
    mobile: { type: String, required: true, trim: true },
})

export const user_model = mongoose.model('user', userSchema)