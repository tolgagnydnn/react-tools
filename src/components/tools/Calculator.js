import React from "react";
import { CalculaterBox, CalculaterTitle } from "../styles/CalculatorStyled";
import CalculatorNumPad from "./CalculatorNumPed";
import CalculaterOutput from "./CalculatorOutput";

const calcReducer = (state, action) => {
  let copyState = state;
  switch (action.type) {
    case "NUM":
      const lastChar = copyState.charAt(copyState.length - 1);
      if (
        (copyState.length === 1 && lastChar === "0") ||
        /[+|\-|/|*]{1}0$/.test(copyState)
      ) {
        return copyState.substring(0, copyState.length - 1) + action.value;
      }
      return copyState.concat(action.value);
      case "OP":
      
      if (copyState === "") {
        if (action.value === "-") {
          return copyState.concat(action.value);
        } else {
          return copyState;
        }
      } else {
        
        if (/[+|\-|/|*]{2}$/.test(copyState)) {
          return copyState;
        } else {
          const lastChar = copyState.charAt(copyState.length - 1);
          
          if (lastChar === "+" || lastChar === "-") {
            return copyState.substring(0, copyState.length - 1) + action.value;
          }
          
          if ((lastChar === "*" || lastChar === "/") && action.value !== "-") {
            return copyState.substring(0, copyState.length - 1) + action.value;
          }
          return copyState.concat(action.value);
        }
      }

    case "EQUAL":
      return "" + eval(copyState);
    case "CLEAR":
      return (copyState = "");
    default:
      return state;
  }
};

export default function Calculator() {
  const initialOutput = "";
  const [state, dispatch] = React.useReducer(calcReducer, initialOutput);

  function handleClick(e) {
    let value = e.target.innerText;
    if (/\d{1}/.test(value)) {
      dispatch({ type: "NUM", value });
    } else if (["/", "*", "+", "-"].includes(value)) {
      dispatch({ type: "OP", value });
    } else if (value === "c") {
      dispatch({ type: "CLEAR", value });
    } else if (value === "=") {
      dispatch({ type: "EQUAL", value });
    }
  }

  return (
    <CalculaterBox>
      <CalculaterTitle> Hesap Makinesi </CalculaterTitle>
      <CalculaterOutput output={state} />
      <CalculatorNumPad handleClick={handleClick}/>
    </CalculaterBox>
  );
}
