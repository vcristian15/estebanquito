import './Login.css'
import {useNavigate} from 'react-router'
import {useState} from 'react'





function Login(){

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // const [cantidad, setCantidad] = useState("")

    // const [user, setUser] = useState({})

    const validarUsuario = () => {
            const urlbase = "http://localhost:3000"
            fetch(urlbase + "/usuarios")
            .then((info) => info.json())
            .then((data) =>  {

                let ingreso = false

                for (let i = 0; i < data.length; i++) {

                if(email == data[i]?.email && password == data[i]?.contrasena){

                    const idUsuario = data[i].id

                    fetch(urlbase + "/prestamos")
                    .then(res => res.json())
                    .then(lista => lista.filter(p => p.usuario_id === idUsuario))
                    .then(prestamosusuario => {

                        navigate('/Main', {state: {
                            idlogin: data[i]?.id,
                            nombre : data[i]?.nombre,   
                            email : data[i]?.email,
                            numero_cuenta : data[i]?.numero_cuenta,
                            tipo_cuenta : data[i]?.tipo,
                            saldo: data[i]?.saldo,
                            prestamos : prestamosusuario
                    }}) 
                    })



                    ingreso = true
                    break
                }
            }

            if(ingreso == false){
                alert("Informacion incorrecta.")
            }
                })
                .catch((error) => console.log(error))

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