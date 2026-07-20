import express from 'express'
import { create_user, otp_verification, resend_otp_user, logIn_user,getData
 } from '../controller/user_controller.js'
export const router = express.Router()


// User Api's
router.post('/api/user/signup', create_user)
router.post('/api/user/otp_verification', otp_verification)
router.post('/api/user/resend_otp_user', resend_otp_user)
router.post('/api/user/login_user', logIn_user)

router.get('/api/user/getData', getData)

// Admin Api's 