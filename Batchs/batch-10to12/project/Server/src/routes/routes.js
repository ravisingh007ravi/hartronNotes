import express from 'express'
import { user_signup, getAllUser } from '../controller/user_controller.js'

export const route = express.Router()

route.post('/api/user/signup',user_signup)


// API's work CRUD Operation
// C create source (post)
// R Read source (get)
// U Update source (put)
// D Delete source (delete)