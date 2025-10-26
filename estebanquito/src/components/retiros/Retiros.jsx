import {useNavigate} from 'react-router'
import './Retiros.css'

function Retiros(){

    const navigate = useNavigate()
    
    return(
        <div id="container">
            <div id='box'>
                <div id="titulo">   
                    <h1>Transferencias</h1>
                </div>

                <div id="info">

                    <div id="id">
                        <input type="text" 
                            placeholder="Número de cuenta"
                            class='login-info'  
                        />

                    </div>

                    <div id="email">

                        <input type="text" 
                            placeholder="$ 0"
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

export default Retiros