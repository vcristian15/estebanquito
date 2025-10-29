import { Router } from "express";
import { methodsUsers } from "../controllers/usuarios.controller.js";

const router = Router()

router.post('/usuarios', methodsUsers.createUser)

router.get('/usuarios', methodsUsers.getUsuarios)

router.delete('/usuarios/:id', methodsUsers.deleteUser)

export default router