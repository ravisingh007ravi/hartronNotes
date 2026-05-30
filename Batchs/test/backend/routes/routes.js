import express from express
import {admin_user} from '../Controller/Controller.js'
const routes=express.Router()



routes.get('/admin_user',admin_user)
export default routes 
