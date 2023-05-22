import styled from 'styled-components'

export const SCFooter = styled.div `
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

export const SCIcons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2px;
`

export const SCFirstDiv = styled.div `
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

export const SCP = styled.p `
    width: 222px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;

    color: #333333;
`

export const SCContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding: 10px 0;
`