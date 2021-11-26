import React from 'react'
import GlobalStyles from './components/styles/GlobalStyled'
import { ToolBox } from './components/styles/ToolBoxStyled'
import Move from './components/tools/Move'
import Select from './components/tools/Select'
import Pencil from './components/tools/Pencil'
import Marker from './components/tools/Marker'
import Text from './components/tools/Text'
import Line from './components/tools/Line'
import Rectangle from './components/tools/Rectangle'
import Circle from './components/tools/Circle'
import Triangle from './components/tools/Triangle'
import Shapes from './components/tools/Shapes'
import Size from './components/tools/Size'
import Colors from './components/tools/Colors'
import Eraser from './components/tools/Eraser'
import Clear from './components/tools/Clear'
import ZoomIn from './components/tools/ZoomIn'
import ZoomOut from './components/tools/ZoomOut'
import Undo from './components/tools/Undo'
import Redo from './components/tools/Redo'

 

function App() { 
  return (
    <>
     <GlobalStyles/>
      <ToolBox>
        <Move></Move>
        <Select></Select>
        <Pencil></Pencil>
        <Marker></Marker>
        <Text></Text>
        <Shapes></Shapes>
        <Size></Size>
        <Colors> </Colors>
        {/* <Line></Line> 
        <Rectangle></Rectangle>
        <Circle></Circle>
        <Triangle></Triangle> */}
        <Eraser></Eraser>
        <Clear></Clear>
        <ZoomIn></ZoomIn> 
        <ZoomOut></ZoomOut>
        <Undo></Undo>
        <Redo></Redo> 
      </ToolBox>
    </>
     
    
  )
}

export default App
