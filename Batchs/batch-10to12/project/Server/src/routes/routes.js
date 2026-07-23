import express from 'express'
import { user_signup, resend_otp, verify_otp } from '../controller/user_controller.js'

export const route = express.Router()

route.post('/api/user/signup', user_signup)


