import logo from './assets/logo.png'
import styled from 'styled-components'

export default function Welcome(props) {
    const {start, setStart} = props;
    return (
        <SCContainer>
            <img src={logo}></img>
            <p>ZapRecall</p>
            <button onClick={() => setStart(true)} data-test="start-btn">Iniciar Recall</button>
        </SCContainer>
    )
}

const SCContainer = styled.div `
    background-color: #FB6B6B;
    width: 100%;
    height: 100vh;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
        width: 136px;
        height: 161px;
    }
    p { 
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: -0.012em;
        color: #FFFFFF;

    }
    button {
        width: 246px;
        height: 54px;
        background: #FFFFFF;
        border: 1px solid #D70900;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        color: #D70900;
    }
`