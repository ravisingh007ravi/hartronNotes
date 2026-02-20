import express from 'express';
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT

mongoose.connect(process.env.MonGoDBUrl)
    .then(() => console.log("Database Connected"))
    .catch((e) => console.log(e.message))

const abc = (req,res) => {
    res.send({ name:'sdasa',age:"dfds"})
}

app.get('/ravi', abc)

app.listen(port, () => console.log("Server is Running Port ", port))

// API Application programming  Interface

// API work on CRUD Operation
// c (post) = create
// r (get) = read
// u (update) = update
// d (delete) = delete