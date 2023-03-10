
import { Outlet } from 'react-router-dom'


import './App.css'
import Cabecalho from './Routers/Cabecalho'

function App() {
  return (
    <div className="App">
      <Cabecalho />

      <div className="container">
        <div class="col-12">
          <div class="p p-5"></div>
        </div>
        <div class="col-12">
          <div class="p p-4"></div>
        </div>
        <Outlet />
      </div>
    </div>
  )
}

export default App
