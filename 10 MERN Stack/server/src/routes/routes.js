import express from 'express';
import { create_user } from '../controller/user_controller.js';
const route = express.Router()



route.post('/create-user', create_user)

route.use((_, res) => { res.status(404).send({ status: false, msg: 'Invalid URL' }) });

export default route