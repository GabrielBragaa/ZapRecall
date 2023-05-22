import { SCli, SCButtonGreen, SCButtonRed, SCButtonYellow, SCContainerButton, SCDone, SCPergunta, SCResposta } from './StyleFlashcard';
import setaPlay from '../assets/seta_play.png'
import { useState } from "react";
import setaVirar from '../assets/seta_virar.png'
import erro from '../assets/icone_erro.png'
import quase from '../assets/icone_quase.png'
import certo from '../assets/icone_certo.png'

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