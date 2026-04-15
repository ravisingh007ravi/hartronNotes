import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import route from './routes/routes.js';

dotenv.config();

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

app.use('/', route);

app.listen(port, () => { console.log(`Server is running on port: ${port}`)});