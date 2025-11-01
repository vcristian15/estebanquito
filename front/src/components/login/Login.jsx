import './Login.css'
import {useNavigate} from 'react-router'
import {useState} from 'react'





function Login(){

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cantidad, setCantidad] = useState("")

    const [user, setUser] = useState({})
    // const [contraseña, setContraseña] = useState({})

    const obtenerUsuario = () => {
            const urlbase = "http://localhost:3000"
            fetch(urlbase + "/usuarios")
            .then((info) => info.json())
            .then((data) =>  {
                setUser(data)
                setCantidad(data.length)
            })
            .catch((error) => console.log(error))

        }

    const validarUsuario = () =>{   

        let ingreso = false

        obtenerUsuario()

        for (let i = 0; i < cantidad; i++) {

            if(email == user[i]?.email && password == user[i]?.contrasena){
                navigate('/Main', {state:email})
                ingreso = true
                break
            }
        }

        if(ingreso == false){
            alert("Informacion incorrecta.")
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

                            <input type="email" 
                                placeholder="Email"
                                onChange={(e)=>setEmail(e.target.value)}
                                className='login-info'
                            />

                        </div>

                        <div id="contraseña">

                            <input type="password" 
                            placeholder="Contraseña"
                            onChange={(e)=>setPassword(e.target.value)}
                            className='login-info'
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