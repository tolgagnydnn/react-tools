import styled from "styled-components";


export const ToolBox = styled.div`
    height: auto;
    max-width:150px;
    background: #27293d;
    border-radius: 1rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    box-shadow: 0 1px 20px 0 rgb(0 0 0 / 10%);
    margin-top: 50px;
    margin-left: 50px;
    padding: 15px 10px;
`

export const ToolItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 15px;
    padding: 5px;
    cursor: pointer;
    border-radius:.548rem;
    transition: all .4s ease;
    svg {
        fill: #fff;
        width: 25px;
        height: 25px;
    }
    span {
        color: #fff;
        font-size:12px;
        font-weight:400;
        padding-top: 3px;
        text-align: center;
    }
    &:hover {
        background: rgba(255,255,255, 0.3);
    }
`