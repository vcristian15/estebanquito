import {useNavigate} from 'react-router'
import { useLocation } from 'react-router'
import './Pagos.css'

function Pagos(){

    const navigate = useNavigate()
    const location = useLocation()

    const{deuda} = location.state
    
    return(
        <div id="container">
            <div id='box'>
                <div id="titulo">   
                    <h1>Pagos</h1>
                </div>

                <div id="info">

                        <h1 id='deuda'>Deuda: $ {deuda}</h1>

                    <div id="id">
                        <input type="text" 
                            placeholder="Número de identificacion"
                            class='login-info'  
                        />

                    </div>

                    <div id="email">

                        <input type="text" 
                            placeholder="Monto a pagar"
                            class='login-info'
                        />

                    </div>

                
                </div>

                <div id="botones">

                    <button id='btnCrear'>Enviar</button>
                    <button id='btnIniciar' onClick={() => navigate(-1)}>Volver</button> 

                </div>
            </div>

        </div>
    )

}

export default Pagos