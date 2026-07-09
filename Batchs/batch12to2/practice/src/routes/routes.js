import exress from 'express'
import multer from 'multer'
import { create_user, user_otp_verify,resend_otp } from '../controller/user_controller.js'

const upload = multer({ storage: multer.diskStorage({}) });

export const router = exress.Router()

// user API's
router.post('/user/create_user', upload.single('userImg'), create_user)
router.post('/user/user_otp_verify', user_otp_verify)
router.get('/user/resend_otp/:id', resend_otp)