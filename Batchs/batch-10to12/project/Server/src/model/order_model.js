import mongoose, { Mongoose, Types } from "mongoose";


const Schema = new mongoose.Schema({
     userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true, },
   
})


export const order_model = mongoose.model('order', Schema)

