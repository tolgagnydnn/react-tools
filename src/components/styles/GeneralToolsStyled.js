import styled from 'styled-components'


export const GeneralToolClose = styled.div `
    cursor: pointer;
    position: absolute;
    left: 50%;
    bottom: 70%;
    background: #27293d;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    padding: 7px;
    transform: translate(-50%, 150%);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .5s ease;
    text-align: center;
    visibility: hidden;
    opacity: 0;
    svg {
        fill: #fff;
        width: 18px;
        height: 18px;
    }
`

export const GeneralToolBox = styled.div`
    height: auto;
    background: #27293d;
    min-width: 250px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 1px 20px 0 rgb(0 0 0 / 10%);
    position: absolute;
    left: 50%;
    bottom:10px;
    transform: translate(-50%, -50%);
    padding: 8px 20px;
    border-radius:3rem;
    &:hover ${GeneralToolClose} {
    visibility: visible;
    transform: translate(-50%, -50%);
    opacity:1;
    }
`

export const GeneralButton = styled.div`
    padding: 5px;
    cursor: pointer;
    border-radius:.548rem;
    transition: all .4s ease;
    position: relative;
    margin-left: 5px;
    svg {
        fill: #fff;
        width: 20px;
        height: 20px;
    }
    &:hover {
        background: rgba(255,255,255, 0.3);
    }
    
`

export const GeneralToolButtonbox = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

`


