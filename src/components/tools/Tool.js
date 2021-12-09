import { useState } from 'react'
import { 
     ToolBox,
     ToolItem, 
     ColorTool, 
     ShapeTool, 
     SizeTool, 
     SizeLength, 
     ColorBox, 
     Dotted, 
     ToolBoxTop, 
     ToolBoxBottom 
    } from '../styles/ToolBoxStyled'
import tool from '../../tool.json'
import CounterTime from './CounterTime'
import Icon from './Icon'
import Calculator from './Calculator'



function Tool() {

    const [showChildTools, setshowChildTools] = useState("");
    const childItem = (toolName) => {
        setshowChildTools(toolName);
        
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
                        </ToolItem>
                        
                        {showChildTools === "Boyut" && 
                        <SizeTool>
                        {tool.childsize?.map((childsize) => {
                            return (
                                <SizeLength key={childsize.id} size={childsize.size}></SizeLength>
                                );
                            })}
                        </SizeTool>                        
                        }

                        {showChildTools === "Şekiller" && 
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

                        {showChildTools === "Renkler" &&
                            <ColorTool>
                                {tool.childcolor?.map((childcolor) => {
                                return (
                                    <ColorBox key={childcolor.id} color={childcolor.color}></ColorBox>
                                    );
                                })}
                            </ColorTool>                        
                        }

                        {showChildTools === "Sayaç" &&  <CounterTime></CounterTime>}
                        {showChildTools === "Hesaplama" && <Calculator></Calculator>}
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
