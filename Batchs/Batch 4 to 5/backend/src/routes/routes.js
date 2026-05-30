import express from 'express'
import { create_user} from "../controller/user_controller.js"

export const router = express.Router()


router.post('/user/create-account', create_user)
