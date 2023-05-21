import styled from 'styled-components'
import play from './assets/seta_play.png'
import { useState } from 'react';
import Flashcard from './Flashcard';

export default function Deck(props) {
    const {cards, points, setPoints} = props;
    let [done, setDone] = useState([]);
    return (
       cards.map((card, index) =>
        <SCul key={index + 1}>
            <Flashcard key={card.question} question={card.question} answer={card.answer} id={index} points={points} setPoints={setPoints}/>
        </SCul>)
    )
}

const SCul = styled.ul `
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
`