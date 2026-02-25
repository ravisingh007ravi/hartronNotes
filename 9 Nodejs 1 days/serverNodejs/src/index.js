import express from 'express';
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import routes  from './routes/routes.js'
dotenv.config()

const app = express()
app.use(express.json())

const port = process.env.Port


mongoose.connect(process.env.MongoDBUrl)
    .then(() => console.log("Database Connected"))
    .catch((e) => console.log(e.message))

app.use('/',routes)

app.listen(port, () => console.log("Server is Running Port ", port))
