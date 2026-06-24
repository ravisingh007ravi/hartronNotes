import express from 'express'
import {create_user} from '../controller/user_controller.js'

export const routes = express.Router()

routes.get('/test',create_user)


// Status code 
// 100 200 300 400 500
// 200 ok
// 201 create new data in DB
// 400 user site mistake
// 404 not found data 
// 500 server error 

