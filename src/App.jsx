import * as React from 'react'
import { Login } from './components/login'
import { Cadastro } from './components/cadastre'
import { TimeLine } from './components/timeline'
import './App.css'
import { ContainerDireito } from './components/ContainerDireito.jsx'
import { ContainerEsquerdo } from './components/ContainerEsquerdo.jsx'
import { NavTw } from './components/Navbar.jsx'
import { useState } from 'react'

function App() {


  const [tw, setTw] = useState(0)

  const tweets = [
    {

      id: 1,
      nome: "Eliseu",
      publi: "Testando 1"
    },
    {

      id: 2,
      nome: "Braya",
      publi: "Testando 2"
    },
    {

      id: 3,
      nome: "Teste",
      publi: "Testando 3"
    }
    ,
    {

      id: 4,
      nome: "Teste 2",
      publi: "Testando 4"
    }
  ]

  return (
    <>
      {/* <Login /> */}
      {/* <Cadastro /> */}
      <div className="timeline">
        <NavTw />
        <div className="content">
          <ContainerEsquerdo tweets={tweets} />
          <TimeLine
            tweets={tweets}
          />
          <ContainerDireito />
        </div>
      </div>
    </>
  )
}

export default App
