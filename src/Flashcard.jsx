import styled from "styled-components";
import setaPlay from './assets/seta_play.png'
import { useState } from "react";
import setaVirar from './assets/seta_virar.png'
import erro from './assets/icone_erro.png'
import quase from './assets/icone_quase.png'
import certo from './assets/icone_certo.png'

export default function Flashcard(props) {
    let {question, answer, id, done, setDone, answersIcons, setAnswersIcons, points, setPoints} = props;
    let [tela, setTela] = useState('screen1');
    let [finalColor, setFinalColor] = useState('');
    let [finalIcon, setFinalIcon] = useState('');
    let [dataTest, setDataTest] = useState('');

function response(r) {
    if(r === 'wrong') {
        setFinalColor('#FF3030');
        setTela('screen4');
        setAnswersIcons([...answersIcons, erro]);
        setFinalIcon(erro);
        setDone(done + 1);
        setDataTest('no-icon');
        
    } else if (r === 'almost') {
        setFinalColor('#FF922E');
        setDone(done + 1);
        setAnswersIcons([...answersIcons, quase])
        setTela('screen4');
        setFinalIcon(quase);
        setDataTest('partial-icon');
        setPoints(points + 1);

    } else if (r === 'right') {
        setFinalColor('#2FBE34');
        setDone(done + 1);
        setAnswersIcons([...answersIcons, certo])
        setTela('screen4');
        setFinalIcon(certo);
        setDataTest('zap-icon');
        setPoints(points + 1);
    }
}

    return (
        <>
            {tela === 'screen1' && (
                <SCli data-test="flashcard">
                    <p data-test="flashcard-text">Pergunta {id + 1}</p>
                    <img src={setaPlay} onClick={() => setTela('screen2')} data-test="play-btn"></img>
                </SCli>
            )}
            {tela === 'screen2' && (
                <SCPergunta><p data-test="flashcard-text">{question}</p>
                <img src={setaVirar} onClick={() => setTela('screen3')}></img>
                </SCPergunta>
            )}
            {tela === 'screen3' && (
                <SCResposta>
                    <p data-test="flashcard-text">{answer}</p>
                    <SCContainerButton>
                        <SCButtonRed onClick={() => response('wrong')} data-test="no-btn">Não lembrei</SCButtonRed>
                        <SCButtonYellow onClick={() => response('almost')} data-test="partial-btn">Quase não lembrei</SCButtonYellow>
                        <SCButtonGreen onClick={() => response('right')} data-test="zap-btn">Zap!</SCButtonGreen>
                    </SCContainerButton>
                </SCResposta>
            )}
            {tela === 'screen4' && (
                <SCDone finalColor={finalColor}>
                    <p data-test="flashcard-text">Pergunta {id + 1}</p>
                    <img src={finalIcon} data-test={dataTest}></img>
                </SCDone>
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
    min-height: 131px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 15px 10px 10px;
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