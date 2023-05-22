import { useState } from 'react';
import Deck from '../Deck';
import Footer from '../Footer/Footer';
import logo from '../assets/logo.png';
import { SCApp, SCHeader } from './StylesApp';
import Welcome from '../Welcome';
import { createGlobalStyle } from 'styled-components';
import { GlobalStyle } from './StylesApp';

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
  let [answersIcons, setAnswersIcons] = useState([]);
  let [done, setDone] = useState(0);
  let [start, setStart] = useState(false);
  let [points, setPoints] = useState(0);

  return (
    <>
      <GlobalStyle/>
      {!start && (
          <Welcome start={start} setStart={setStart}/>
      )}
      {start && (
      <SCApp>
        <SCHeader>  
          <img src={logo}></img>
          <p>ZapRecall</p>
        </SCHeader>
        <Deck cards={cards} done={done} setDone={setDone} answersIcons={answersIcons} setAnswersIcons={setAnswersIcons} points={points} setPoints={setPoints}/>
        <Footer done={done} cards={cards} answersIcons={answersIcons} points={points}/>
      </SCApp>
      )}
    </>
  )
}
