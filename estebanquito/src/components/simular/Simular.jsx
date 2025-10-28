import {useNavigate} from 'react-router'
import './Simular.css'

function Simular(){

    const navigate = useNavigate()

    return(
        <div id="container">
            <div id='box'>
                <div id="titulo">   
                    <h1>Simula tu credito</h1>
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

                    <div id='tiempo'>

                        <input list='meses' 
                            id='tiempoasimular'
                            name='tiempoasimular'
                            placeholder='¿A cuantos meses?'
                            class = 'login-info'
                        />

                        <datalist id='meses'>
                            <option value="6 meses"></option>
                            <option value="12 meses"></option>
                            <option value="18 meses"></option>
                            <option value="24 meses"></option>
                        </datalist>

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

export default Simular