import express from 'express'
import { create_user } from '../controller/user_controller.js'
const routes = express.Router()


// API Application programming  Interface

// API work on CRUD Operation
// c (post) = create
// r (get) = read
// u (update) = update
// d (delete) = delete 


routes.post('/create_user', create_user)

export default routes