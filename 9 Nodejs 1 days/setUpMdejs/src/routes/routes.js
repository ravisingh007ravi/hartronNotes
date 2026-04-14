import express from'express'
const routes = express.Router()

// User API's 
import {createUser} from '../controller/user_controller.js'
routes.get('/a',createUser)


// Product API's

export default routes;