import './Login.css'
import {useNavigate} from 'react-router'
import {useState} from 'react'





function Login(){

    const navigate = useNavigate()

    const [email, setEmail] = useState("")

    const [contraseña, setContraseña] = useState("")

    const validarUsuario = () => {
        if(email == "correo@gmail.com" && contraseña == "123"){
            navigate("/Main", {state:email})
        }
        else{
            alert("Informacion incorrecta. Intentelo nuevamente")
        }
    }

    return(
            <div id="container">
                <div  id='box'>
                    <div id="titulo">   
                        <h1> Iniciar sesión</h1>
                    </div>

                    <div id="info">

                        <div id="email">

                            <input type="text" 
                                placeholder="Email"
                                onChange={(e)=>setEmail(e.target.value)}
                                class='login-info'
                            />

                        </div>

                        <div id="contraseña">

                            <input type="password" 
                            placeholder="Contraseña"
                            onChange={(e)=>setContraseña(e.target.value)}
                            class='login-info'
                            />

                        </div>

                
                    </div>

                    <div id="botones">

                        <button id='btnIniciar' onClick={validarUsuario}>Continuar</button>

                        <button id="btnRegistro" onClick={() => navigate('/Registro')}>Registrarse</button>
                    </div>
                </div>
            </div>
    )

}

export default Login