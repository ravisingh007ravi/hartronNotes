import exress from 'express'
import {create_user} from '../controller/user_controller.js'

export const router = exress.Router()

router.post('/test',create_user)