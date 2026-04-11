import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routes/routes.js'

dotenv.config()
const app = express()
const port = 8080

mongoose.connect(process.env.MongoDBUrl)
    .then(() => console.log('MomgoDB Connect'))
    .catch((err) => console.log(err.message))

app.use('/', router)

app.listen(port, () => console.log(`Server is Running port = ${port}`))