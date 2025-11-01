import { Router } from "express";
import { methodsUsers } from "../controllers/usuarios.controller.js";
import { methodsTransactions } from "../controllers/transacciones.controller.js";
import { methodsPrestamos } from "../controllers/prestamos.controller.js";

const router = Router()

router.post('/usuarios', methodsUsers.createUser)

router.get('/usuarios', methodsUsers.getUsuarios)

router.delete('/usuarios/:id', methodsUsers.deleteUser)

router.post('/transacciones', methodsTransactions.createTransaction)

router.get('/transacciones', methodsTransactions.getTransaction)

router.delete('/transacciones/:id', methodsTransactions.deleteTransaction)

router.post('/prestamos', methodsPrestamos.createPrestamo)

router.get('/prestamos', methodsPrestamos.getPrestamo)

router.delete('/prestamos/:id', methodsPrestamos.deletePrestamo)



export default router