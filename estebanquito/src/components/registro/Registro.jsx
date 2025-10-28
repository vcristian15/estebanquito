import './Registro.css'
import {useNavigate} from 'react-router'


function Registro(){

    const navigate = useNavigate()

    return(
        <div id="container">
            <div id='box'>
                <div id="titulo">   
                    <h1> Crear cuenta</h1>
                </div>

                <div id="info">

                    <div id="id">

                        <input type="text" 
                            placeholder="Numero de identificacion"
                            class='login-info'
                        />

                    </div>

                    <div id="email">

                        <input type="text" 
                            placeholder="Email"
                            class='login-info'
                        />

                    </div>

                    <div id="contraseña">

                        <input type="password" 
                        placeholder="Contraseña"
                        class='login-info'
                        />

                    </div>

                
                </div>

                <div id="botones">

                    <button id='btnCrear'>Crear cuenta</button>

                    <button id='btnIniciar' onClick={() => navigate('/')}>Iniciar sesion</button>

                </div>
            </div>

        </div>
    )
}

export default Registro