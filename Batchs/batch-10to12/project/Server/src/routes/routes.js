import express from 'express'
import { getAllUser } from '../controller/user_controller.js'
export const route = express.Router()


route.get('/api/user/getorder', getAllUser)