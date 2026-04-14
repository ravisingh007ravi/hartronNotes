import express from'express'
import cors from 'cors'
import dotenv from 'dotenv'
import route from './routes/routes.js'

dotenv.config()
const app = express()
app.use(cors())

app.use('/',route)

const port = 8080 || process.env.PORT
app.listen(port,()=>console.log(`Server is Running ${port}`)) 