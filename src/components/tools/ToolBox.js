import  React from 'react'
import { ToolBox, ToolItem, ColorTool, ShapeTool, SizeTool, SizeLength, ColorBox } from '../styles/ToolBoxStyled'
import tool from '../../tool.json'

function Tool() {
    return (
        <ToolBox>
           {
            tool?.map((tool) => (
                <ToolItem key="tool.id">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox={tool.viewbox} version="1.1" preserveAspectRatio="xMidYMid meet">
                        <path d={tool.icon}/>
                    </svg>
                    <span> {tool.name} </span>
                    {tool.childshapes &&
                        <ShapeTool>
                            {tool.childshapes?.map((childshapes) => {
                            return (
                                <ToolItem key="childshapes.id"> 
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
            ))
           }
        </ToolBox>
    )
}

export default Tool
