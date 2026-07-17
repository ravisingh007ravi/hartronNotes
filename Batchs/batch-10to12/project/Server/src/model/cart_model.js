import mongoose, { Mongoose, Types } from "mongoose";


const Schema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true, },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "product", required: true, },

})


export const cart_model = mongoose.model('cart', Schema)

