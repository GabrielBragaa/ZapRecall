import styled from "styled-components";
import setaPlay from './assets/seta_play.png'
import { useState } from "react";
import setaVirar from './assets/seta_virar.png'
import erro from './assets/icone_erro.png'
import quase from './assets/icone_quase.png'
import certo from './assets/icone_certo.png'

export default function Flashcard(props) {
    let {question, answer, id, points, setPoints, done, setDone} = props;
    let [tela, setTela] = useState('screen1');
    let [finalColor, setFinalColor] = useState('');
    let [finalIcon, setFinalIcon] = useState('');

function response(r) {
    if(r === 'wrong') {
        setFinalColor('#FF3030');
        setTela('screen4');
        setFinalIcon(erro);

    } else if (r === 'almost') {
        setFinalColor('#FF922E');
        setPoints(points + 1);
        setTela('screen4');
        setFinalIcon(quase)

    } else if (r === 'right') {
        setFinalColor('#2FBE34');
        setPoints(points + 1);
        setTela('screen4');
        setFinalIcon(certo)
    }
}

    return (
        <>
            {tela === 'screen1' && (
                <SCli onClick={() => setTela('screen2')}><p>Pergunta {id + 1}</p><img src={setaPlay}></img></SCli>
            )}
            {tela === 'screen2' && (
                <SCPergunta onClick={() => setTela('screen3')}>{question} <img src={setaVirar}></img></SCPergunta>
            )}
            {tela === 'screen3' && (
                <SCResposta>
                    {answer}
                    <SCContainerButton>
                        <SCButtonRed onClick={() => response('wrong')}>Não lembrei</SCButtonRed>
                        <SCButtonYellow onClick={() => response('almost')}>Quase não lembrei</SCButtonYellow>
                        <SCButtonGreen onClick={() => response('right')}>Zap!</SCButtonGreen>
                    </SCContainerButton>
                </SCResposta>
            )}
            {tela === 'screen4' && (
                <SCDone finalColor={finalColor}>Pergunta {id + 1}<img src={finalIcon}></img></SCDone>
            )}
        </>
    )
}

const SCli = styled.li `
    width: 300px;
    height: 65px;
    background: #ffffff;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    font-family: 'Recursive', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
    img {
        width: 20px;
        height: 23px;
    }
`
const SCPergunta = styled.li `
    width: 300px;
    height: 131px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    padding: 20px 20px;
    box-sizing: border-box;
    font-family: 'Recursive', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    img {
        width: 30px;
        height: 20px;
        display: flex;
        position: relative;
        top: 85px;
        right: -5px;
    }
`
const SCResposta = styled.li `
    width: 300px;
    height: 131px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px 15px 10px 15px;
    box-sizing: border-box;
    font-family: 'Recursive', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
`
const SCContainerButton = styled.div `
    display: flex;
    gap: 5px;
`
const SCButtonRed = styled.button `
        width: 85px;
        height: 37px;
        border-radius: 5px;
        border: none;
        background-color: #FF3030;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 14px;
        text-align: center;
        color: #FFFFFF;
`
const SCButtonYellow = styled.button `
        width: 85px;
        height: 37px;
        border-radius: 5px;
        border: none;
        background-color: #FF922E;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 14px;
        text-align: center;
        color: #FFFFFF;
`
const SCButtonGreen = styled.button `
        width: 85px;
        height: 37px;
        border-radius: 5px;
        border: none;
        background-color: #2FBE34;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 14px;
        text-align: center;
        color: #FFFFFF;
`
const SCDone = styled.li `
    width: 300px;
    height: 65px;
    background: #ffffff;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    font-family: 'Recursive', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-decoration-line: line-through;
    color: ${(props) => props.finalColor};
    img {
        width: 23px;
        height: 23px;
    }  
`