import styled from "styled-components";

export const SCli = styled.li `
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
export const SCPergunta = styled.li `
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
export const SCResposta = styled.li `
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
export const SCContainerButton = styled.div `
    display: flex;
    gap: 5px;
`
export const SCButtonRed = styled.button `
        width: 85px;
        min-height: 37px;
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
export const SCButtonYellow = styled.button `
        width: 85px;
        min-height: 37px;
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
export const SCButtonGreen = styled.button `
        width: 85px;
        min-height: 37px;
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
export const SCDone = styled.li `
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