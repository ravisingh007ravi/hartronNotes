import express from 'express'
import {create_user} from '../controller/user_controller.js'
const router = express.Router()

router.post('/create_user', create_user)

export default router