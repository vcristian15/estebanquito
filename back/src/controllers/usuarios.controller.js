import {getConnection} from '../database/database.js'

const createUser = async(req, res) => {
    try{
        const {nombre, email, contrasena, numero_cuenta, tipo, saldo} = req.body;

        const data = {nombre, email, contrasena, numero_cuenta, tipo, saldo}

        const connection = await getConnection()

        const result = await connection.query('INSERT INTO usuarios SET ?', [data])

        res.json({message: "Usuario creado"})

    }
    catch(err){
        console.log(err)
    }
}

const getUsuarios = async(req, res) =>{
    try{
        const connection = await getConnection()

        const result = await connection.query('SELECT id, nombre, email, contrasena, numero_cuenta, tipo, saldo FROM usuarios')

        res.json(result[0])
    }
    catch(err){
        console.log(err)
    }
}

const deleteUser = async(req, res) =>{
    try {

        const {id} = req.params

        const connection = await getConnection()

        const result = await connection.query('DELETE FROM usuarios WHERE id = ?', [
            id
        ])

        res.json({message: "Usuario eliminado"})

    } catch (error) {
        console.log(error)
    }
}

export const methodsUsers = {
    createUser,

    getUsuarios,

    deleteUser
}