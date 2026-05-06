import express from 'express'
import { register, verify_otp, loh_in,resend_otp } from '../controller/user_controller.js'

const route = express.Router()

// User Routes
route.post('/user/register', register)
route.post('/user/verify_otp/:id', verify_otp)
route.get('/user/resend_otp/:id', resend_otp)
route.post('/user/loh_in', loh_in)



export default route