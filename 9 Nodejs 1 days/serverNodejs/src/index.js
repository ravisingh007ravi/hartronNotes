import express from 'express';
import mongoose from 'mongoose'


const app = express()
const port = 8080

mongoose.connect("")
    .then(() => console.log("Database Connected"))
    .catch((e) => console.log(e.message))


app.listen(port, () => console.log("Server is Running Port ", port))