import express from 'express'
import mongoose from 'mongoose'
import { router } from './routes/routes.js'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
app.use(express.json())
const port = process.env.PORT || 8080

mongoose.connect(process.env.MongoDBUrl)
    .then(() => console.log('Data Base Connected...'))
    .catch((err) => console.log(err.message))

app.use('/', router)


app.listen(port, () => console.log(`server is Running... ${port}`))



