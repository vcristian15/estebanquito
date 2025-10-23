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
                    <h1 id='titulomain'>Estebanquito</h1>
                    <h1  id='tipocuenta'>Tipo de cuenta:</h1>
                    <p  id='numerocuenta'>Nº 123456789</p>
                    <h2 id='saldo'>Saldo: $000000</h2>
                    <a href="" id='Detalles'>Detalles</a>
                </div>

                <div id="transacciones">
                    <h1 id='titulo-transacciones'>Transacciones</h1>
                    <div id='box-transacciones'>
                        <a href="">Enviar dinero</a>
                        <img src="https://i.postimg.cc/pT8ZLRBY/pngwing-com-1.png" alt="" class='img10'/>
                        <a href="">Pagos</a>
                        <img src="https://i.postimg.cc/Hkx97Q27/pngwing-com-2.png" alt="" class='img10'/>
                        <a href="">Retiros</a>
                        <img src="https://i.postimg.cc/bN6Q8ZhG/pngwing-com-3.png" alt="" class='img10'/>
                    </div>

                </div>

                <div id="solicitudprestamo">
                    <h1 id='titulo-prestamos'>Prestamos</h1>
                    <a href="">Simular prestamo</a>
                    <a href="">Solicita tu prestamo</a>
                    <a href="">Paga tu prestamo</a>

                    <a href="">Mas informacion</a>
                </div>

            </div>

        </div>


    )
}

export default Main