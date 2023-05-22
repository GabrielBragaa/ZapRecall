import styled from 'styled-components';
import Flashcard from './Flashcard/Flashcard';

export default function Deck(props) {
    let {cards, done, setDone, answersIcons, setAnswersIcons, points, setPoints} = props;
    return (
       cards.map((card, index) =>
        <SCul key={index + 1}>
            <Flashcard key={card.question} question={card.question} answer={card.answer} 
            id={index} done={done} setDone={setDone} answersIcons={answersIcons} 
            setAnswersIcons={setAnswersIcons} points={points} setPoints={setPoints}/>
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