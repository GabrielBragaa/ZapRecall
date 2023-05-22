import party from '../assets/party.png'
import sad from '../assets/sad.png'
import { SCFooter, SCIcons, SCContainer, SCFirstDiv, SCP } from './StylesFooter';

export default function Footer(props) {
   const {cards, done, answersIcons, points} = props;
    return (
        <SCFooter data-test="footer">
            {done !== cards.length && (
                <>
                    <p>{done}/{cards.length} CONCLUÍDOS</p>
                    <SCIcons>
                            {cards.map((card, i) => <img src={answersIcons[i]} key={i}></img>)}
                    </SCIcons>
                </>
            )}
            {points === cards.length && (
                <SCContainer data-test="finish-text">
                    <SCFirstDiv>
                        <img src={party}></img>
                        <p>Parabéns!</p>
                    </SCFirstDiv>
                    <SCP>Você não esqueceu de nenhum flashcard!</SCP>
                    <p>{done}/{cards.length} CONCLUÍDOS</p>
                    <SCIcons>
                        {cards.map((card, i) => <img src={answersIcons[i]} key={i}></img>)}
                    </SCIcons>
                </SCContainer>
            )}
            {done === cards.length && points !== cards.length && (
                <SCContainer data-test="finish-text">
                    <SCFirstDiv>
                        <img src={sad}></img>
                        <p>Putz...</p>
                    </SCFirstDiv>
                    <SCP>Ainda faltam alguns... mas não desanime!</SCP>
                    <p>{done}/{cards.length} CONCLUÍDOS</p>
                    <SCIcons>
                        {cards.map((card, i) => <img src={answersIcons[i]} key={i}></img>)}
                    </SCIcons>
            </SCContainer>
            )}
            
        </SCFooter>
    )
}