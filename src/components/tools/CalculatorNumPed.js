import React from 'react'
import { CalculatorButton, Numpad} from "../styles/CalculatorStyled";

function CalculatorNumPad({ handleClick }) {
    return (
      <Numpad onClick={handleClick}>
        <CalculatorButton className="clear">
          c
        </CalculatorButton>
        <CalculatorButton className="op-div" >
          /
        </CalculatorButton>
        <CalculatorButton className="digit-7">
          7
        </CalculatorButton>
        <CalculatorButton className="digit-8">
          8
        </CalculatorButton>
        <CalculatorButton className="digit-9">
          9
        </CalculatorButton>
        <CalculatorButton className="op-mul">
          *
        </CalculatorButton>
        <CalculatorButton className="digit-4">
          4
        </CalculatorButton>
        <CalculatorButton className="digit-5">
          5
        </CalculatorButton>
        <CalculatorButton className="digit-6">
          6
        </CalculatorButton>
        <CalculatorButton className="op-sub">
          -
        </CalculatorButton>
        <CalculatorButton className="digit-1">
          1
        </CalculatorButton>
        <CalculatorButton className="digit-2">
          2
        </CalculatorButton>
        <CalculatorButton className="digit-3">
          3
        </CalculatorButton>
        <CalculatorButton className="op-add">
          +
        </CalculatorButton>
        <CalculatorButton className="digit-0">
          0
        </CalculatorButton>
        <CalculatorButton className="eq">
          =
        </CalculatorButton>
      </Numpad>
    );
  }

  
  export default CalculatorNumPad