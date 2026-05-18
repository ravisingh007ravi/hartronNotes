import express, { Router } from 'express'
import { create_user } from '../controller/user_controller.js'
const routes = express.Router()




routes.get('/test', create_user)

export default routes;