import styled from 'styled-components'
import play from './assets/seta_play.png'

export default function Deck(props) {
    const cards = props.cards;
    
    return (
       cards.map((card, index) =>
        <SCul key={index + 1}>
            <SCli>Pergunta {index + 1}<img src={play}></img></SCli>
        </SCul>)
    )
}

const SCul = styled.ul `
    list-style-type: none;
    display: flex;
`

const SCli = styled.li `
    width: 300px;
    height: 65px;
    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    img {
        width: 20px;
        height: 23px;
    }
`