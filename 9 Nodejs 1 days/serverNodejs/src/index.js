import express from 'express';
import mongoose from 'mongoose'


const app = express()
const port = 8080

mongoose.connect("mongodb+srv://ravi6680singh:rm1ah4tPSRyenb0X@cluster0.viocq1u.mongodb.net/")
    .then(() => console.log("Database Connected"))
    .catch((e) => console.log(e.message))


app.listen(port, () => console.log("Server is Running Port ", port))