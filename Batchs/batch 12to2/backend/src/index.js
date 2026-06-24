import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { routes } from './routes/routes.js'

dotenv.config()
const app = express()
const port = 8080
app.use(express.json())

mongoose.connect(process.env.MongoDBUrl)
    .then(() => console.log('Mongodb Connected ...'))
    .catch((err) => console.log(err.message))

app.use('/', routes)

app.listen(port, () => console.log(`server is running pport ${port}`))
