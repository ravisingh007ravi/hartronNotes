import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'
import { router } from './routes/routes.js'   
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

const port = process.env.PORT || 8888

if (!process.env.MongoDBURL) console.log('MongoDB Url not Present')

mongoose.connect(process.env.MongoDBURL)
    .then(() => console.log('MongoDB Connected...'))
    .catch((err) => console.log(err.message))

app.use('/', router)

app.listen(port, () => console.log(`Server is Running Port = ${port}`))


