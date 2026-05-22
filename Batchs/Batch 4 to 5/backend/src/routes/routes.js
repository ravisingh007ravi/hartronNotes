import express from 'express'
import { create_user, get_all_user } from "../controller/user_controller.js"

export const router = express.Router()


router.post('/user/create_user', create_user)
router.get('/user/get_all_user', get_all_user)
