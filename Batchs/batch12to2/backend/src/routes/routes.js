import express from 'express';
import { aa } from '../controller/user_controller.js'
const router = express.Router()


router.get('/api', aa)


export default router;

// api use CRUD operations
// C - create (Post)
// R - read (Get)
// U - update (Put)
// D - delete (Delete)