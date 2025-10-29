import express from 'express'
import router from './routes/usuarios.routes.js'

const app = express()

app.set('port', 3000)

app.use(express.json())

app.use(router)


export default app