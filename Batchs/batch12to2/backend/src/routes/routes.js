import express from 'express'
import multer from 'multer'
import {create_user} from '../controller/user_contrller.js'

export const router = express.Router()

const upload = multer({ storage: multer.diskStorage({}) });

 
router.post('/user/create-account', upload.single('userImg'),create_user)


