import './Solicitar.css'
import {useNavigate} from 'react-router'
import {useState} from 'react'

function Solicitar(){

    const [masinfo, setMasinfo] = useState(false)

    const navigate = useNavigate()

    return(
        <div id="container">

                            {
                    masinfo &&
                <div id='masinfo'>
                    <div id='masinfo-up'>
                        <h3>Información para solicitar un préstamo bancario</h3>
                        <button id='btnCerrar' onClick={() => setMasinfo(false)}>
                            <img src="https://i.postimg.cc/x1dWCn4J/pngwing-com.png" alt="" id='imgCerrar'/>
                        </button>
                    </div>
                    <p>Antes de solicitar un préstamo, tenga en cuenta que las entidades bancarias evalúan factores como su historial crediticio, ingresos, estabilidad laboral y capacidad de pago. <br></br>
                Asegúrese de conocer la tasa de interés, los plazos y las condiciones del préstamo antes de firmar el contrato. Un buen manejo financiero y un historial positivo aumentan las posibilidades de aprobación.</p>
                </div>

                }
                
            <div id='box'>
                <div id="titulo">   
                    <h1>Solicita tu credito</h1>
                    <button id='btnMasinfo' onClick={() => setMasinfo(true)}>
                        <img src="https://i.postimg.cc/76wWdK7Q/pngwing-com-7.png" alt="" id='imgMasinfo'/>
                    </button>

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

export default Solicitar