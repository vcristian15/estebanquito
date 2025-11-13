import {useNavigate} from 'react-router'
import { useLocation } from 'react-router'
import { useState } from 'react'
import './Pagos.css'

function Pagos(){

    const navigate = useNavigate()
    const location = useLocation()

    const{deuda} = location.state

    const [idcuenta, setIdcuenta] = useState("")
    const [monto, setMonto] = useState("")

    const crearPago = () => {
        const urlbase = "http://localhost:3000"

        const fechaactual = new Date().toISOString().split('T')[0]

        const nuevoPago = {
            usuario_id : idcuenta,
            monto : monto,
            plazo : deuda[0]?.plazo,
            estado : "pagado",
            fecha_solicitud : fechaactual
        }

        fetch(urlbase + "/prestamospago", {
            method : "POST",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(nuevoPago)
        })
        .then((info) => info.json())
        .then((data) => {
            console.log("Pago creado: ", data)
            alert("Pago hecho exitosamente")
        })
            .catch((error) => console.log(error))

    }
    
    return(
        <div id="container">
            <div id='box'>
                <div id="titulo">   
                    <h1>Pagos</h1>
                </div>

                <div id="info">

                        <h1 id='deuda'>Deuda: $ {deuda[0]?.monto}</h1>

                    <div id="id">
                        <input type="text" 
                            placeholder="ID cuenta"
                            onChange={(e) => setIdcuenta(e.target.value)}
                            class='login-info'  
                        />

                    </div>

                    <div id="email">

                        <input type="text" 
                            placeholder="Monto a pagar"
                            onChange={(e) => setMonto(e.target.value)}
                            class='login-info'
                        />

                    </div>

                
                </div>

                <div id="botones">

                    <button id='btnCrear' onClick={crearPago}>Enviar</button>
                    <button id='btnIniciar' onClick={() => navigate(-1)}>Volver</button> 

                </div>
            </div>

        </div>
    )

}

export default Pagos