import mongoose from 'mongoose'


const userSchema = new mongoose.Schema({
    name: { type: String, trim: true, required: true },
    email: { type: String, trim: true, required: true, unique: true, lowercase: true },
    password: { type: String, trim: true, required: true },
})

export const user_model = mongoose.model('user', userSchema) 