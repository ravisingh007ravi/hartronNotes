import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'


const app=express()
app.use(express.json())
const port=process.env.PORT || 7070

mongoose.connect()
        .then(()=>console.log("Mongodb connected"))
        .catch(()=>console.log("Mongodb not connected"))
 app.listen(port,()=>console.log(`server is running...${port}`))