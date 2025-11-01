import {getConnection} from '../database/database.js'

const createTransaction = async(req, res) => {
    try {

        const {cuenta_id, tipo, monto, fecha} = req.body;

        const data = {cuenta_id, tipo, monto, fecha}

        const connection = await getConnection()

        const result = await connection.query('INSERT INTO transacciones SET ?', [data])

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