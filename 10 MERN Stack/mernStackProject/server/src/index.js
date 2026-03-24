import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import router from './routes/routes.js'

// config file from dotenv
dotenv.config();
  
// initialize express app variable  
const app = express();
app.use(express.json());
const Port = process.env.PORT || 5000;

// connect MongodoDB database
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("Database Connected"))
    .catch((error) => console.log(error));

app.use('/',router)

// check port in our pc is present ot not
app.listen(Port, () => console.log(`server is running Port = > ${Port}`))
