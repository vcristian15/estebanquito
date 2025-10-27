import { BrowserRouter, Form, Route, Routes } from 'react-router'
import './App.css'
import Login from './components/login/Login'
import Registro from './components/registro/Registro'
import Main from './components/gestioncuentas/Main'
import Transferencias from './components/transferencias/Transferencias'
import Pagos from './components/pagos/Pagos'
import Retiros from './components/retiros/Retiros'

function App() {

  return (
    <BrowserRouter>
    

      <Routes>


      <Route path='/' element={<Login />} />

      <Route path='/main' element={<Main />} />

      <Route path='/registro' element={<Registro />} />

      <Route path='/transferencias' element={<Transferencias />} />

      <Route path='/pagos' element={<Pagos />} />

      <Route path='/retiros' element={<Retiros />}> </Route>


      </Routes>  


    </BrowserRouter>
  )
}

export default App
