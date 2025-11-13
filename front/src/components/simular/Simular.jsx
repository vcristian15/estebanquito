import {useNavigate} from 'react-router'
import { useState } from 'react'
import './Simular.css'

function Simular(){

    const navigate = useNavigate()

    const [monto, setMonto] = useState("")
    const [tiempo, setTiempo] = useState("")

    const[resultado, setResultado] = useState("")

    const  simulacionCredito = () => {
        const interes = 0.03

        const montoasimular = parseFloat(monto)
        const mesesasimular = parseInt(tiempo)

        const cuota = (montoasimular * interes) / (1 - Math.pow(1 + interes, - mesesasimular))

        const totalcredito = cuota * mesesasimular

        setResultado({
            cuota : cuota.toFixed(2),
            totalcredito : totalcredito.toFixed(2),
            tiempo : mesesasimular
        })
    }

    return(
        <div id="container">
            <div id='box'>
                <div id="titulo">   
                    <h1>Simula tu credito</h1>
                </div>

                <div id="info">

                    <div id="email">

                        <input type="text" 
                            placeholder="$ 0"
                            onChange={(e) => setMonto(e.target.value)}
                            class='login-info'
                        />

                    </div>

                    <div id='tiempo'>

                        <input list='meses' 
                            id='tiempoasimular'
                            name='tiempoasimular'
                            placeholder='¿A cuantos meses?'
                            onChange={(e) => setTiempo(e.target.value)}
                            class = 'login-info'
                        />

                        <datalist id='meses'>
                            <option value="6"></option>
                            <option value="12"></option>
                            <option value="18"></option>
                            <option value="24"></option>
                        </datalist>

                    </div>

                
                </div>

                <div id="botones">

                    <button id='btnCrear' onClick={simulacionCredito}>Enviar</button>
                    <button id='btnIniciar' onClick={() => navigate(-1)}>Volver</button> 
                </div>

                <div id = "resultado">
            {resultado && (
                <div id="resultado">
                    <h2>Simluacion credito: </h2>
                    <p>Cuota mensual: ${resultado.cuota}</p>
                    <p>Total a pagar: ${resultado.totalcredito}</p>
                    <p>Plazo: {resultado.tiempo} meses</p>
                </div>
            )}
                </div>
            </div>

        </div>
    )

}

export default Simular