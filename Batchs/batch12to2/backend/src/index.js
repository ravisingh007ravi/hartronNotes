import express from 'express'
import router from './routes/routes.js'

const app = express()
const port = 8080 

app.use('/',router)

app.listen(port,()=>console.log(`Server is runnig http://localhost:${port}/`))