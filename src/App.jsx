import * as React from 'react'
import { Login } from './components/login'
import { Cadastro } from './components/cadastre'
import { TimeLine } from './components/timeline'
import './App.css'
import { ContainerDireito } from './components/ContainerDireito.jsx'
import { ContainerEsquerdo } from './components/ContainerEsquerdo.jsx'
import { NavTw } from './components/Navbar.jsx'

function App() {

  return (
    <>
      {/* <Login /> */}
      {/* <Cadastro /> */}
      <div className="timeline">
        <NavTw />
        <div className="content">
          <ContainerEsquerdo />
          <TimeLine />
          <ContainerDireito />
        </div>
      </div>
    </>
  )
}

export default App
