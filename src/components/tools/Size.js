import React from 'react'
import { ToolItem } from '../styles/ToolBoxStyled'


function Select() {
    return (
        <ToolItem> 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6V4H20V20H12V18H8V16H4V8H8V6H12ZM14 6H18V18H14V6ZM12 8H10V16H12V8ZM8 10V14H6V10H8Z"/>
            </svg>
           <span> Boyut </span>
        </ToolItem>
        
    )
}

export default Select
