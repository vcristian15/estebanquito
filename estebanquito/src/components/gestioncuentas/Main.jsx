import './Main.css'    

    function Main(){

    return(
        <div id="containermain">

            <div id="left-menu">
    
                    <img src="https://i.postimg.cc/Pxs5bKQy/pngwing-com.png" alt=""  id='userimg'/>

                    <h1 id='nombre'>Cristian Alejandro Vanegas Escobar </h1>
                    <p>correo@gmail.com</p>
                    <p> ID: 123456789</p>

                    <button>Reportes financieros</button>

            </div>

            <div id="right">

                <div id="gestioncuenta">
                    <div id='header'>
                        <h1 id='titulomain'>Estebanquito</h1>
                    </div>

                    <div id='box-contenido'> 

                        <div  id='box-cuenta'>
                            <h1  id='tipocuenta'>Tipo de cuenta:</h1>
                            <p  id='numerocuenta'>Nº 123456789</p>
                            <h2 id='saldo'>Saldo: $000000</h2>
                            <a href="" id='Detalles'>Detalles</a>
                        </div>

                        <div id='box-movimientos'>

                            <h2>Ultimos 5 movimientos</h2>
                            <p class='movimientos'>-10000$</p>
                            <p class='movimientos'>+10000$</p>
                            <p class='movimientos'>+10000$</p>
                            <p class='movimientos'>-10000$</p>
                            <p class='movimientos'>-10000$</p>
                        </div>
                    </div>
                </div>

                <div id="transacciones">
                    <h1 id='titulo-transacciones'>Transacciones</h1>
                    <div id='box-transacciones'>

                            <a href="" class='box1'>
                                Transferencias
                                <img src="https://i.postimg.cc/pT8ZLRBY/pngwing-com-1.png" alt="" class='img10'/>
                            </a>
                        
                        
                        
                            <a href="" class='box1'>
                                Pagos
                                <img src="https://i.postimg.cc/Hkx97Q27/pngwing-com-2.png" alt="" class='img10'/>
                            </a>
                        

                        
                            <a href="" class='box1'>
                                Retiros
                                <img src="https://i.postimg.cc/bN6Q8ZhG/pngwing-com-3.png" alt="" class='img10'/>
                            </a>
                        
                    </div>

                </div>

                <div id="solicitudprestamo">
                    <h1 id='titulo-prestamos'>Prestamos</h1>

                    <div id='box-prestamos'>

                        <a href="" class='box1'>
                            Simular prestamo
                            <img src="https://i.postimg.cc/FzP8j0Yw/pngwing-com-4.png" alt="" class='img10'/>
                            </a>

                        <a href="" class='box1'>
                            Solicita tu prestamo
                            <img src="https://i.postimg.cc/SNvHR7FM/pngwing-com-5.png" alt="" class='img10'/>
                            </a>

                        <a href="" class='box1'>
                            Paga tu prestamo
                            <img src="https://i.postimg.cc/7LvcMHL4/pngwing-com-6.png" alt="" class='img10'/>
                            </a>

                        <a href="" class='box1'>
                            Mas informacion
                            <img src="https://i.postimg.cc/76wWdK7Q/pngwing-com-7.png" alt="" class='img10'/>
                            </a>
                    </div>

                </div>

            </div>

        </div>


    )
}

export default Main