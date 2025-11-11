import './Transferencias.css'
import {useNavigate} from 'react-router'
import { useState } from 'react'


function Transferencias(){

    const navigate = useNavigate()

    const [idcuenta, setIdcuenta] = useState("")
    const [monto, setMonto] = useState("")

    
    const crearTransferencia = () => {
        const urlbase = "http://localhost:3000/transacciones"


        const fechaactual = new Date().toISOString().split('T')[0];

        const nuevaTransferencia = {
            idcuenta : idcuenta,
            tipotransaccion : "transferencia",
            monto : monto,
            fecha : fechaactual
        }

        fetch(urlbase + "/transacciones", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(nuevaTransferencia)
        })
        .then((info) => info.json())
        .then((data) => {
            console.log("Transferencia creada: ", data)
            alert("Transferencia hecha correctamente.")
        })
            .catch((error) => console.log(error))

    }

    return(
        <div id="container">
            <div id='box'>
                <div id="titulo">   
                    <h1>Transferencias</h1>
                </div>

                <div id="info">

                    <div id="id">
                        <input type="text" 
                            placeholder="ID cuenta a transferir"
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


                    <button id='btnCrear' onClick={crearTransferencia}>Enviar</button>
                    <button id='btnIniciar' onClick={() => navigate(-1)}>Volver</button> 

                </div>
            </div>

        </div>
    )

}

export default Transferencias