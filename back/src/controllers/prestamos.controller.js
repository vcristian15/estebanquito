import { getConnection } from "../database/database.js";

const createPrestamo = async (req, res) => {
    try {

        const {usuario_id, monto, plazo, estado, fecha_solicitud} = req.body;

        const data = {usuario_id, monto, plazo, estado, fecha_solicitud}

        const result = await connecion.query('INSERT INTO prestamos SET ?', [data])

        res.json({message: "Prestamo creado"})
        
    } catch (error) {
        console.log(error);
    }
}

const getPrestamo = async (req, res) => {
    try {

        const connection = await getConnection()

        const result = await connection.query("SELECT id, usuario_id, monto, plazo, estado, fecha_solicitud FROM prestamos")
        
        res.json(result[0])

    } catch (error) {
        console.log(error); 
    }
}

const deletePrestamo = async (req, res) => {
    try {

        const {id} = req.params

        const connection = await getConnection()

        const result = await connection.query("DELETE FROM prestamos where id = ?", [
            id
        ])

        res.json({message: "Prestamo eliminado"})
        
    } catch (error) {
        console.log(error);
    }
}


export const methodsPrestamos = {
    createPrestamo,

    getPrestamo,

    deletePrestamo
}