import express from 'express'
import mongoose from 'mongoose'
import router from './routes/routes.js'

const app = express()
const port = process.env.PORT || 8080

mongoose.connect('')
    .then(() => console.log('Data Base Connected...'))
    .catch((err) => console.log(err.message))

app.use('/',router)


app.listen(port, () => console.log(`server is Running... ${port}`))



