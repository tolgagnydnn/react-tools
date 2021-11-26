import React from 'react'
import { ShapeTool, ToolItem } from '../styles/ToolBoxStyled'


function Select() {
    return (
        <ToolItem> 
            <svg xmlns="http://www.w3.org/2000/svg" width="512px" height="512px" viewBox="0 0 512 512"><path d="M128,256A128,128,0,1,0,256,384,128,128,0,0,0,128,256Zm379-54.86L400.07,18.29a37.26,37.26,0,0,0-64.14,0L229,201.14C214.76,225.52,232.58,256,261.09,256H474.91C503.42,256,521.24,225.52,507,201.14ZM480,288H320a32,32,0,0,0-32,32V480a32,32,0,0,0,32,32H480a32,32,0,0,0,32-32V320A32,32,0,0,0,480,288Z"/></svg>
             <span> Şekiller </span>
             <ShapeTool>
                <ToolItem> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="1024px" height="1024px" viewBox="0 0 1024 1024" class="icon">
                        <path d="M904 476H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"/>
                    </svg>
                    <span> Çizgi </span>
                </ToolItem>
                <ToolItem> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                        <path d="M18,20 L6,20 C6,20.5522847 5.55228475,21 5,21 L4,21 C3.44771525,21 3,20.5522847 3,20 L3,19 C3,18.4477153 3.44771525,18 4,18 L4,6 C3.44771525,6 3,5.55228475 3,5 L3,4 C3,3.44771525 3.44771525,3 4,3 L5,3 C5.55228475,3 6,3.44771525 6,4 L18,4 C18,3.44771525 18.4477153,3 19,3 L20,3 C20.5522847,3 21,3.44771525 21,4 L21,5 C21,5.55228475 20.5522847,6 20,6 L20,18 C20.5522847,18 21,18.4477153 21,19 L21,20 C21,20.5522847 20.5522847,21 20,21 L19,21 C18.4477153,21 18,20.5522847 18,20 L18,20 Z M18,19 C18,18.4477153 18.4477153,18 19,18 L19,6 C18.4477153,6 18,5.55228475 18,5 L6,5 C6,5.55228475 5.55228475,6 5,6 L5,18 C5.55228475,18 6,18.4477153 6,19 L18,19 L18,19 Z M4,4 L4,5 L5,5 L5,4 L4,4 Z M4,19 L4,20 L5,20 L5,19 L4,19 Z M19,4 L19,5 L20,5 L20,4 L19,4 Z M19,19 L19,20 L20,20 L20,19 L19,19 Z"/>
                    </svg>
                    <span> Dikdörtgen </span>
                </ToolItem>
                <ToolItem> 
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" width="31.424px" height="31.425px" viewBox="0 0 31.424 31.425">
                        <g>
                            <path d="M15.712,3.132c6.937,0,12.581,5.644,12.581,12.58c0,6.938-5.645,12.581-12.581,12.581c-6.937,0-12.58-5.645-12.58-12.581   C3.132,8.775,8.775,3.132,15.712,3.132 M15.712,0C7.035,0,0,7.034,0,15.712c0,8.679,7.035,15.713,15.712,15.713   c8.677,0,15.712-7.034,15.712-15.713C31.425,7.034,24.389,0,15.712,0L15.712,0z"/>
                        </g>
                    </svg>
                    <span> Çember </span>
                </ToolItem>
                <ToolItem> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-triangle">
                            <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
                    </svg>
                    <span> Üçgen </span>
                </ToolItem>
             </ShapeTool>
        </ToolItem>
        
    )
}

export default Select
