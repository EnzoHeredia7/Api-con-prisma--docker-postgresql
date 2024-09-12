import express from "express"
import { register } from "../controllers/authControllers"

const router = express.Router()


//rutas de autenticacion 
router.post('/register', register)
router.post('/login')

export default router