
import { Outlet } from 'react-router-dom'


import './App.css'
import Cabecalho from './Routers/Cabecalho'

function App() {
  return (
    <div className="App">
      <Cabecalho />

      <div className="container">
        
        <Outlet />
      </div>
    </div>
  )
}

export default App
