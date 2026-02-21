import express from 'express'
import { abc } from '../controller/user_controller.js'
const routes = express.Router()


// API Application programming  Interface

// API work on CRUD Operation
// c (post) = create
// r (get) = read
// u (update) = update
// d (delete) = delete 


routes.get('/ravi', abc)

export default routes