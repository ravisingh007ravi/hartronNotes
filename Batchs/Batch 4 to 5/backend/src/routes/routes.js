
import express from 'express'
import {create_user} from "../controller/user_controller.js"

export const router = express.Router()


router.get('/test',create_user)
