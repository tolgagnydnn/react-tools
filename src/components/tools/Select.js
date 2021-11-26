import React from 'react'
import { ToolItem } from '../styles/ToolBoxStyled'


function Select() {
    return (
        <ToolItem> 
            <svg xmlns="http://www.w3.org/2000/svg"  width="36px" height="36px" viewBox="0 0 36 36" version="1.1" preserveAspectRatio="xMidYMid meet">
                <path class="clr-i-outline clr-i-outline-path-1" d="M14.58,32.31a1,1,0,0,1-.94-.65L4,5.65A1,1,0,0,1,5.25,4.37l26,9.68a1,1,0,0,1-.05,1.89l-8.36,2.57,8.3,8.3a1,1,0,0,1,0,1.41l-3.26,3.26a1,1,0,0,1-.71.29h0a1,1,0,0,1-.71-.29l-8.33-8.33-2.6,8.45a1,1,0,0,1-.93.71Zm3.09-12a1,1,0,0,1,.71.29l8.79,8.79L29,27.51l-8.76-8.76a1,1,0,0,1,.41-1.66l7.13-2.2L6.6,7l7.89,21.2L16.71,21a1,1,0,0,1,.71-.68Z"/>
                <rect x="0" y="0" width="36" height="36" fill-opacity="0"/>
            </svg>
           <span> Seç </span>
        </ToolItem>
        
    )
}

export default Select
