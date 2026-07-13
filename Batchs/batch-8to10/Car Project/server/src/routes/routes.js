import express from 'express'
import {abc} from '../controller/user_controller.js'
export const router = express.Router()



router.get('/a', abc)

