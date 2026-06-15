import mongoose, { Types } from 'mongoose'

const user_schema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true,unique:true,lowercase:true },
    password: { type: String, required: true, trim: true },
})

export const user_model = mongoose.model('users', user_schema)