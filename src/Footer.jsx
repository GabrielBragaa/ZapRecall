import styled from 'styled-components'

export default function Footer(props) {
   const {cards, done} = props;
    return (
        <SCFooter>
            <p>{done}/{cards.length} CONCLUÍDOS</p>
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
    justify-content: center;
    align-items: center;
    p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
    }
`