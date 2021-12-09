import { useState } from 'react'
import { ToolBox, ToolItem, ColorTool, ShapeTool, SizeTool, SizeLength, ColorBox, Dotted, ToolBoxTop, ToolBoxBottom } from '../styles/ToolBoxStyled'
import tool from '../../tool.json'
import CounterTime from './CounterTime'
import Icon from './Icon'
import Calculator from './Calculator'



function Tool() {

    const [showCalculator, setshowCalculator] = useState(false);
    const [showTime, setshowTime] = useState(false)

    const childItem = (toolName) => {
        if (toolName === "Sayaç") {
            setshowTime(!showTime);
            setshowCalculator(false);
         
        } else if (toolName === "Hesaplama") {
            setshowCalculator(!showCalculator);
            setshowTime(false);
        } else {
            setshowTime(false);
            setshowCalculator(false);
        }
      };

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
                <ToolItem key={tool.id} onClick={() => childItem(tool.name)}>
                    <Icon iconName={`${tool.icon}`}/> 
                    <span> {tool.name} </span>
                    {tool.childshapes &&
                        <ShapeTool>
                            {tool.childshapes?.map((childshapes) => {
                            return (
                                <ToolItem key={childshapes.id}> 
                                    <Icon iconName={`${childshapes.icon}`}/> 
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
                    {
                }
                </ToolItem>
                 <>
                    {showTime && <CounterTime></CounterTime>}
                    {showCalculator && <Calculator></Calculator>}
                  </>
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
