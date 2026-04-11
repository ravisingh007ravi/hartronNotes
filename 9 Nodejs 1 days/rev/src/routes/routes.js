import express from 'express'
import {user_create} from '../controller/user_controller.js'
const router = express.Router()



router.get('/test',user_create)


export default router 