import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import {router} from "./routes/routes.js"

dotenv.config()
const port = process.env.PORT || 8080
const app = express()


mongoose.connect(process.env.MongoDBUrl)
  .then(()=>console.log("MongoDB Connected..."))
  .catch((err)=>console.log(err.message))

app.use('/',router)

app.listen(port,()=>console.log(`server is running Port = ${port}`))
