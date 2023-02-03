import express from "express"
import { 
   authController,
} from "../controller/index.js"

 const router = express.Router()

 router.post('/login', authController.login)

 router.post('/signin', authController.signin)

 router.post('/logout', authController.logout)

 router.put('/change-password', authController.changePassword)

 export default router