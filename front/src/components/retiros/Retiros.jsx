import {useNavigate} from 'react-router'
import { useState } from 'react'
import { useLocation } from 'react-router'
import './Retiros.css'

function Retiros(){

    const navigate = useNavigate()
    const location = useLocation()
    
    const {saldo} = location.state

    const [idcuenta, setIdcuenta] = useState("")
    const [monto, setMonto] = useState("")

    const crearRetiro = () => {
        const urlbase = "http://localhost:3000"

        const fechaactual = new Date().toISOString().split('T')[0]

        const nuevoRetiro = {
            cuenta_id : idcuenta,
            tipo : "retiro",
            monto : monto,
            fecha : fechaactual
        }

        fetch(urlbase + "/transaccionespago", {
            method : "POST",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(nuevoRetiro)
        })
        .then((info) => info.json())
        .then((data) => {
            console.log("Retiro creado: ", data)
            alert("Retiro hecho exitosamente")
        })
            .catch((error) => console.log(error))


    }


    
    return(
        <div id="container">
            <div id='box'>
                <div id="titulo">   
                    <h1>Retiros</h1>
                </div>

                <div id="info">

                    <h1 id='saldo-disp'>Saldo disponible: $ {saldo}</h1>

                    <div id="id">
                        <input type="text" 
                            placeholder="ID de cuenta"
                            onChange={(e) => setIdcuenta(e.target.value)}
                            class='login-info'  
                        />

                    </div>

                    <div id="email">

                        <input type="text" 
                            placeholder="$ 0"
                            onChange={(e) => setMonto(e.target.value)}
                            class='login-info'
                        />

                    </div>

                
                </div>

                <div id="botones">

                    <button id='btnCrear' onClick={crearRetiro}>Enviar</button>
                    <button id='btnIniciar' onClick={() => navigate(-1)}>Volver</button> 

                </div>
            </div>

        </div>
    )

}

export default Retiros