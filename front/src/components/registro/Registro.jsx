import './Registro.css'
import {useNavigate} from 'react-router'
import { useState } from 'react'


function Registro(){

    const navigate = useNavigate()

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [tipocuenta, setTipocuenta] = useState("")



    const registrarUsuario = () => {
            const urlbase = "http://localhost:3000"

            const numeroCuenta = Math.floor(10000000 + Math.random() * 90000000).toString();

            const nuevoUsuario = {
                nombre: nombre,
                email: email,
                contrasena: password,
                numero_cuenta: numeroCuenta,
                tipo: tipocuenta,
                saldo: 0
            }

            
            fetch(urlbase + "/usuarios", {
                method: "POST",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(nuevoUsuario)
            })
            .then((info) => info.json())
            .then((data) =>  {
                console.log("Usuario registrado: ", data)
                alert("Registrado exitosamente")
                navigate("/")
            })
                .catch((error) => console.log(error))
    }

    return(
        <div id="container">
            <div id='box'>
                <div id="titulo">   
                    <h1> Crear cuenta</h1>
                </div>

                <div id="info">

                    <div id="id">

                        <input type="text" 
                            placeholder="Nombre"
                            onChange={(e)=> setNombre(e.target.value)}
                            class='login-info'
                        />

                    </div>

                    <div id="email">

                        <input type="text" 
                            placeholder="Email"
                            onChange={(e)=> setEmail(e.target.value)}
                            class='login-info'
                        />

                    </div>

                    <div id="contraseña">

                        <input type="password" 
                        placeholder="Contraseña"
                        onChange={(e)=> setPassword(e.target.value)}
                        class='login-info'
                        />

                    </div>

                    <div id='cuenta'>
                        <input list='tipo_cuenta' 
                            id='tipodecuenta'
                            name='tipodecuenta'
                            placeholder='¿Tipo de cuenta?'
                            onChange={(e)=> setTipocuenta(e.target.value)}
                            class = 'login-info'
                        />

                        <datalist id='tipo_cuenta'>
                            <option value="ahorros"></option>
                            <option value="corriente"></option>
                        </datalist>
                    </div>

                
                </div>

                <div id="botones">

                    <button id='btnCrear' onClick={registrarUsuario}>Crear cuenta</button>

                    <button id='btnIniciar' onClick={() => navigate('/')}>Iniciar sesion</button>

                </div>
            </div>

        </div>
    )
}

export default Registro