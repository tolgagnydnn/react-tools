import { useState } from 'react'
import { ToolBox, ToolItem, ColorTool, ShapeTool, SizeTool, SizeLength, ColorBox, Dotted, ToolBoxTop, ToolBoxBottom } from '../styles/ToolBoxStyled'
import tool from '../../tool.json'
import CounterTime from './CounterTime'
import Icon from './Icon'
import Calculator from './Calculator'



function Tool() {

    // const [calculaterShow, setCalculaterShow] = useState(false)
    // const [counterTimeShow, setCounterTimeShow] = useState(false)

    // const handleClick = () => {
    //     for (const tools of tool) {
    //         if (tools.isClickCalculator === false) {
    //             tools.isClickCalculator = !tools.isClickCalculator
    //         }
    //     }
    // }

    

    return (
        <>
        <ToolBox>
             <ToolBoxTop>
                 <Dotted></Dotted>
                 <Dotted></Dotted>
                 <Dotted></Dotted>
                 <Dotted></Dotted>
                 <Dotted></Dotted>
                 <Dotted></Dotted>
             </ToolBoxTop>
           {
            tool?.map((tool) => (
                <>
                <ToolItem key={tool.id}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox={tool.viewbox} version="1.1" preserveAspectRatio="xMidYMid meet">
                        <path d={tool.icon}/>
                    </svg> 
                    <span> {tool.name} </span>
                    {tool.childshapes &&
                        <ShapeTool>
                            {tool.childshapes?.map((childshapes) => {
                            return (
                                <ToolItem key={childshapes.id}> 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox={childshapes.viewbox}>
                                        <path d={childshapes.icon}/>
                                    </svg>
                                    <span> {childshapes.name} </span>
                                </ToolItem>
                            );
                        })}
                        </ShapeTool>
                    } 
                    { tool.childsize && 
                    <SizeTool>
                    {tool.childsize?.map((childsize) => {
                    return (
                            <SizeLength key={childsize.id} size={childsize.size}></SizeLength>
                            );
                        })}
                    </SizeTool>                        
                    }
                    { tool.childcolor && 
                    <ColorTool>
                    {tool.childcolor?.map((childcolor) => {
                    return (
                            <ColorBox key={childcolor.id} color={childcolor.color}></ColorBox>
                            );
                        })}
                    </ColorTool>                        
                    }
                </ToolItem>
                {
                  <>
                    {
                     <CounterTime></CounterTime> 
                    }
                    {/* {
                      <Calculator></Calculator>
                    } */}
                    
                  </>
              
                }
                </>
            ))
           }
           <ToolBoxBottom> 
                <Dotted></Dotted>
                 <Dotted></Dotted>
                 <Dotted></Dotted>
                 <Dotted></Dotted>
                 <Dotted></Dotted>
                 <Dotted></Dotted>
           </ToolBoxBottom>
          
         
        </ToolBox>

        </>
    )
}

export default Tool
