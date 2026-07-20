import exress from 'express'
import multer from 'multer'
import {
    create_user, user_otp_verify, resend_otp, user_login, user_change_img, user_add_address, user_update_address,
    user_delete_address, user_update_profile, user_delete_account
} from '../controller/user_controller.js'

const upload = multer({ storage: multer.diskStorage({}) });

export const router = exress.Router()
 
// user API's
router.post('/user/create_user', upload.single('userImg'), create_user)
router.post('/user/user_otp_verify', user_otp_verify)
router.get('/user/resend_otp/:id', resend_otp)
router.post('/user/user_login',user_login)
router.put('/user/user_change_img', upload.single('userImg'), user_change_img)
router.post('/user/user_add_address', user_add_address)
router.put('/user/user_update_address', user_update_address)
router.delete('/user/user_delete_address', user_delete_address)
router.put('/user/user_update_profile', user_update_profile)
router.delete('/user/user_delete_account', user_delete_account)


