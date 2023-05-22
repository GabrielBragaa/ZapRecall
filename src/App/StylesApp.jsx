import styled from 'styled-components'

export const SCApp = styled.div `
  display: flex;
  flex-direction: column;
  background-color: #FB6B6B;
  margin-bottom: 70px;
`

export const SCHeader = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 40px;
  img {
    width: 52px;
    height: 60px;
    margin-right: 20px;
  }
  p {
    width: 204px;
    height: 44px;
    font-family: 'Righteous', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.012em;
    color: #FFFFFF;
    transform: rotate(0.58deg);
  }
`