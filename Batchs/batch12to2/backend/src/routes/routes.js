import express from 'express'
import {create_user} from '../controller/user_contrller.js'

export const router = express.Router()


 
router.post('/user', create_user)


