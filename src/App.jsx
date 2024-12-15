import * as React from 'react'
import { Login } from './components/login'
import { Cadastro } from './components/cadastre'
import { TimeLine } from './components/timeline'
import './App.css'
import { ContainerDireito } from './components/ContainerDireito.jsx'
import { ContainerEsquerdo } from './components/ContainerEsquerdo.jsx'
import { NavTw } from './components/Navbar.jsx'
import { InsertTweet } from './components/insertTweet.jsx'

function App() {

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

  ]

  return (
    <>
      {/* <Login /> */}
      {/* <Cadastro /> */}
      <div className="timeline">
        <NavTw />
        <div className="content">
          <ContainerEsquerdo />
          <InsertTweet />
          {
            tweets.map(tweet =>
              <TimeLine
                tweet={tweet}
                key={tweet.id}
              />
            )
          }
          <ContainerDireito />
        </div>
      </div>
    </>
  )
}

export default App
