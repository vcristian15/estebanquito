import {getConnection} from '../database/database.js'

const createTransaction = async(req, res) => {
    try {

        const {id_origen, cuenta_id, tipo, monto, fecha} = req.body;

        const data = {cuenta_id, tipo, monto, fecha}    

        const connection = await getConnection()

        const origen = await connection.query("SELECT saldo FROM usuarios WHERE id = ?", [id_origen])
        
        const saldoActual = origen[0].saldo

        if(saldoActual < monto){
            return res.status(400).json({ message: "Saldo insuficiente" });
        }

        const destino = await connection.query("SELECT saldo FROM usuarios WHERE id = ?", [cuenta_id])

        if (destino.length === 0) {
            return res.status(400).json({ message: "La cuenta a la que le intentas hacer una transaccion no existe" });
        }

        await connection.query("UPDATE usuarios SET saldo = saldo - ? WHERE id = ?", [monto, id_origen])

        await connection.query("UPDATE usuarios SET saldo = saldo + ? WHERE id = ?", [monto, cuenta_id])

        const result = await connection.query("INSERT INTO transacciones SET ?", [data])
        

        res.json({message: "Transaccion creada"})

    } catch (error) {
        console.log(error)
    }
}

const getTransaction = async(req, res) => {
    try {
        
        const connection = await getConnection()

        const result = await connection.query("SELECT id, cuenta_id, tipo, monto, fecha FROM transacciones")

        res.json(result[0])

    } catch (error) {
        console.log(error);
    }
}

const deleteTransaction = async(req, res) => {
    try {

        const {id} = req.params

        const connection = await getConnection()

        const result = await connection.query("DELETE FROM transacciones where id = ?", [
            id
        ])

        res.json({message : "Transaccion eliminada"})
        
    } catch (error) {
        console.log(error);
    }
}



export const methodsTransactions = {
    createTransaction,

    getTransaction,

    deleteTransaction

}