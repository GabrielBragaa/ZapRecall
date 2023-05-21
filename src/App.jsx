import { useState } from 'react'
import Deck from './Deck'
import Footer from './Footer'
import logo from './assets/logo.png'
import styled from 'styled-components'

const cards = [
	{ question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
	{ question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
	{ question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
	{ question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
	{ question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
	{ question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
	{ question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
	{ question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
]

export default function App() {
  return (
    <SCApp>
      <SCHeader>  
        <img src={logo}></img>
        <p>ZapRecall</p>
      </SCHeader>
      <Deck cards={cards}/>
      <Footer/>
    </SCApp>
  )
}

const SCApp = styled.div `
  display: flex;
  flex-direction: column;
  background-color: #FB6B6B;
`

const SCHeader = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 40px;
  img {
    width: 52px;
    height: 60px;
    margin-right: 20px;
  }
  p {
    width: 204px;
    height: 44px;
    font-family: 'Righteous', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.012em;
    color: #FFFFFF;
    transform: rotate(0.58deg);
  }
`


