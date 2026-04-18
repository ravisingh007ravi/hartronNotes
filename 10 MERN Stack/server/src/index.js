import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import route from './routes/routes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;
  
mongoose.connect(process.env.MONGODBURL)
    .then(() => console.log('MongoDb Connected...'))
    .catch((err) => console.log(err.message))

app.use('/', route);

app.listen(port, () => { console.log(`Server is running on port: ${port}`) });