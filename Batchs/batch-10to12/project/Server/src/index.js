import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { route } from './routes/routes.js'

const port = 8080 
dotenv.config({quiet:true})


const app = express()
app.use(express.json())

mongoose.connect(process.env.MOngoDBUrl)
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log(err.message))


app.use('/', route) 

app.listen(port, () => console.log(`Server is Running port = ${port}`))




