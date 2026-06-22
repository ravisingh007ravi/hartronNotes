import exress from 'express'
import multer from 'multer'
import { create_user } from '../controller/user_controller.js'

const upload = multer({ storage: multer.diskStorage({}) });

export const router = exress.Router()

router.post('/user/create_user', upload.single('userImg'), create_user)