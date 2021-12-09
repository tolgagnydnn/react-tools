import styled from "styled-components";


export const CounterTimeBox = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500;600&display=swap');
    font-family: 'Poppins', sans-serif;
    position: absolute;
    left: -385px;
    top: 0;
    border-radius: 1rem;
    background: #27293d;
    width: 375px;
    height: 200px;
   
`

export const CloseCounterTimeBox = styled.button`
    width: 20px;
    height: 20px;
    position: absolute;
    font-size: 13px;
    font-weight: 600;
    right:10px;
    top: 10px;
    background: #fff;
    border:0;
    outline:0;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
`

export const CounterTitle = styled.p`
    font-size: 12px;
    color: white;
    padding-bottom:10px;
    text-align: center;
    border-bottom: solid 1px #56586f;
`
 

export const CounterTimeBoxBody = styled.div`
    display: grid;
    grid-template-columns: 175px auto;
    align-items: center;

`

export const CounterSelectTime = styled.div`
    padding:5px 25px;
    position: relative;
    
    &:before {
        content: '';
        width:1px;
        height:65px;
        position:absolute;
        right:-5px;
        top:50%;
        transform: translate(-50%, -50%);
        background:#56586f;
    }
`

export const TimeSelectBox = styled.div`
    display: flex;
    justify-content: space-arround;
    align-items: center;
    margin-bottom: 20px;
    &:last-child {
        margin-bottom:0;
    }
`

export const TimeSelectTitle = styled.p`
    font-size: 12px;
    font-weight:400;
    color:#fff;
    width: 100px;
    margin:0!important;
`

export const SelectTime = styled.div`
  width: 100%;
  background: #27293d;
  border: none;
  text-align: center;
  position: relative;
  cursor: pointer;
  button {
        font-size:12px;
        font-weight: 600;
        color: #fff;
        background: none;
        border:0;
        cursor: pointer;
        &:hover {
            background: rgba(255,255,255,0.3);
        }
    }
   
`

export const DropdownSelect = styled.select`
    background: none;
    border: 0;
    outline: none;
    width: 100%;
    text-align: center;
    color: white;
    border-radius: 10px;
    border: solid 1px #56586f;
    max-height: 50px;
    overflow-x: hidden;
    overflow-y: scroll;
    option {
        font-size:12px;
        font-weight: 600;
        color: #333;
        background: none;
        border:0;
        cursor: pointer;
        &:hover {
            background: rgba(255,255,255,0.3);
        }
    }
`


export const CounterMainTime = styled.div`
    text-align: center;
    p {
        color:#fff;
        font-size: 12px;
        font-weight: 400;
        margin-bottom:5px!important;
    }
`
export const TimeNumberBox = styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
    height: 50px;
    p {
        font-size: 30px;
        color:#fff;
        font-weight: 600;
        padding-left: 5px;
        margin:0!important;
    }
    span {
        font-size: 20px;
        color:#fff;
        padding-left: 5px;
    }
`

export const TimerİconsBox = styled.div`
    text-align: center;
`

export const StartTimeButton = styled.button`
        background: none;
        border:none;
        cursor: pointer;
        text-align: center;
        svg {
            border-radius: 10px;
            width: 30px;
            height: 30px;
            fill:#fff;
            margin-right: 10px;
            margin-left: 10px;
        }
        p {
            border:solid 1px #56586f;
            padding:5px 10px;
            border-radius: 1rem;
        }
`