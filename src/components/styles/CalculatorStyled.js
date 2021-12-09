import styled from "styled-components";


export const CalculaterBox = styled.div`
    position: absolute;
    left: -350px;
    top: 0;
    background: #27293d;
    width: 300px;
    height: auto;
    padding-bottom: 3px;
    text-align: center;
    color: white;
    padding:1rem;
    border-radius: 1rem;
`

export const CalculaterTitle = styled.div `
    background: #27293d;
    font-size: 14px;
    padding:10px;
    border-bottom:solid 1px #56586f;
`


export const DisplayScreen = styled.div `
    background-color: #ffffff;
    border-right: solid 5px #56586f;
    border-left: solid 5px #56586f;
    min-height: 50px;
    color: #000;
    text-align: right;
    font-size: 2.3em;
    font-weight: 400;
    padding: 3px;
    overflow: hidden;
`

export const Numpad = styled.div `
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      border-radius: 0 0 5px 5px;
      overflow: hidden;
`


export const CalculatorButton = styled.button `
    background-color: #27293d;
    padding: 15px;
    font-size: 1em;
    border: none;
    border:solid 1px #56586f;
    color:#fff;
    cursor:pointer;
    &:hover {
        background-color: rgba(255,255,255,0.3);
    } 
    &.clear, &.digit-0 {
      grid-column: 1/4;
    }
    &.eq, &[class^='op-'] {
      grid-column: 4 / 5;
      color: #fff;
    }
`