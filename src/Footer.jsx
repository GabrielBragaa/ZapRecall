import styled from 'styled-components'
import party from './assets/party.png'
import sad from './assets/sad.png'

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

const SCFooter = styled.div `
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    min-height: 70px;
    background: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: content-box;
    p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
        margin-bottom: 5px;
        margin-top: 10px;
    }
`

const SCIcons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2px;
`

const SCFirstDiv = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    img {
        width: 23px;
        height: 23px;
    }
    p {
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    }
`

const SCP = styled.p `
    width: 222px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;

    color: #333333;
`

const SCContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding: 10px 0;
`