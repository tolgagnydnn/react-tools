import React from 'react'
import { DisplayScreen } from '../styles/CalculatorStyled';


function CalculaterOutput({ output }) {
    return (
      <DisplayScreen>
        {output}
      </DisplayScreen>
    );
  }


export default CalculaterOutput