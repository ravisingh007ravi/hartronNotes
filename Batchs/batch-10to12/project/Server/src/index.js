import express from 'express'
import mongoose from 'mongoose'
import { route } from './routes/routes.js'

const port = 8080
const MOngoDBUrl = ''


const app = express()

mongoose.connect(MOngoDBUrl)
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log(err.message))


app.use('/', route)

app.listen(port, () => console.log(`Server is Running port = ${port}`))




