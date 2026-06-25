import express from 'express'
import mongoose from 'mongoose'
import routes from './routes/routes.js'

const app = express()
const port = process.env.PORT || 8888

mongoose.connect('')
    .then(() => console.log('Server is Running'))
    .catch((e) => console.log(e.message))

app.use('/',routes)


app.listen(port,()=>console.log(`server is Running ${port}`))