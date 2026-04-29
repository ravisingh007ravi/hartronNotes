import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import routes from './routes/routes.js';
const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MongoDBUrl)
    .then(() => console.log('MongoDB Connected...❤️'))
    .catch((err) => console.log("MongoDB Not Connected...😒", err.message));

app.use('/', routes);
 
app.listen(PORT, () => console.log(`👌Server is running on http://localhost:${PORT}`)); 