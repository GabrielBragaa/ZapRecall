import styled from 'styled-components'
import erro from './assets/icone_erro.png'
import quase from './assets/icone_quase.png'
import certo from './assets/icone_certo.png'

export default function Footer(props) {
   const {cards, done, answersIcons} = props;
    return (
        <SCFooter data-test="footer">
            <p>{done}/{cards.length} CONCLUÍDOS</p>
            <SCIcons>
                {cards.map((card, i) => <img src={answersIcons[i]} key={i}></img>)}
            </SCIcons>
        </SCFooter>
    )
}

const SCFooter = styled.div `
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70px;
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