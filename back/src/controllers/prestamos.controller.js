import { getConnection } from "../database/database.js";

const createPrestamo = async (req, res) => {
    try {

        const {usuario_id, monto, plazo, estado, fecha_solicitud} = req.body;

        const data = {usuario_id, monto, plazo, estado, fecha_solicitud}

        const connection = await getConnection()

        await connection.query("UPDATE usuarios SET saldo = saldo + ? WHERE id = ?", [monto, usuario_id])

        const result = await connection.query('INSERT INTO prestamos SET ?', [data])

        res.json({message: "Prestamo creado"})
        
    } catch (error) {
        console.log(error);
    }
}

const createPago = async(req , res) => {

    try{
    
    const {usuario_id, monto, plazo, estado, fecha_solicitud} = req.body;

    const data = {usuario_id, monto, plazo, estado, fecha_solicitud}

    const connection = await getConnection()

    await connection.query("INSERT INTO transacciones SET ?", [{
        cuenta_id : usuario_id,
        tipo : "pago",
        monto : monto,
        fecha : fecha_solicitud
    }])

    await connection.query("UPDATE prestamos SET estado = 'pagado' WHERE usuario_id = ?", [usuario_id])

    await connection.query("UPDATE usuarios SET saldo = saldo - ? WHERE id =?", [monto, usuario_id])

    await connection.query("UPDATE prestamos SET monto = monto - ? WHERE id =?", [monto, usuario_id])

    res.json({message: "Pago creado"})

    } catch(error){
        console.log(error)
        return res.status(500).json({error: error.message})
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

    createPago,

    getPrestamo,

    deletePrestamo
}