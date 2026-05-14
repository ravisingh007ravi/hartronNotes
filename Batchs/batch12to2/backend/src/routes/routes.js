import express from 'express'
import {create_user} from '../controller/user_contrller.js'
const router = express.Router()



router.get('/user', create_user)


export default router 