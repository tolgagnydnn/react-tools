import styled from "styled-components";


export const ToolBox = styled.div`
    height: auto;
    max-width:150px;
    background: #27293d;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    box-shadow: 0 1px 20px 0 rgb(0 0 0 / 10%);
    position: absolute;
    right: 5%;
    top: 10%;
    padding: 15px 10px;
`

export const ToolBoxTop = styled.div`
        background:#1e213d;
        width:100%;
        position: absolute;
        top: -25px;
        left: 0;
        height:30px;
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
        cursor:move;
        display:flex;
        justify-content: center;
        align-items: center;
`

export const ToolBoxBottom = styled.div`
        background:#1e213d;
        width:100%;
        position: absolute;
        bottom: -25px;
        left: 0;
        height:30px;
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
        cursor:move;
        display:flex;
        justify-content: center;
        align-items: center;

` 
export const Dotted = styled.div `
        
    width:2px;
    height:2px;
    background: #fff;
    border-radius: 50%;
    margin: 5px;
       
`
    
export const ToolItem = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500;600&display=swap');    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 15px;
    padding: 5px;
    cursor: pointer;
    border-radius:.548rem;
    transition: all .4s ease;
    position: relative;
    background: ${props => props.active ? "255,255,255, 0.3" : "transparent"};
    svg {
        fill: #fff;
        width: 25px;
        height: 25px;
    }
    span {
        color: #fff;
        font-size:12px;
        font-weight:400;
        padding-top: 3px;
        text-align: center;
        font-family: 'Poppins', sans-serif;
    }
    &:hover {
        background: rgba(255,255,255, 0.3);
    }
`


/*ColorTool*/
export const ColorTool = styled.div `
    position: absolute;
    top:50%;
    left:-30%;
    transform:translate(-50%, -50%);
    height: auto;
    width:50px;
    background: #27293d;
    border-radius: 15px;
    padding:10px 5px 15px 5px;
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
`

export const handleColorType = color => {
    switch (color) {
      case "dark":
        return "background: #000;";
      case "danger":
        return "background: #ff0000;";
      case "warning":
        return "background: #ffff00;";
       case "success":
        return "background: #008000;";
       case "primary":
        return "background: #0000FF;";
       case "pink":
        return "background: #ffc0cb;";
      default:
        return "background: #000;";
    }
  };
  
  

export const ColorBox = styled.button `
    margin-top: 5px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    outline: none;
    border:0;
    cursor: pointer;
    transform: scale(0.85);
    transition: all .5s ease;
    ${({ color }) => handleColorType(color)};
    &:hover {
        transform:scale(1);
    }
`

/*SizeTool*/
export const SizeTool = styled(ColorTool)`
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction:column;
    max-width:50px;
`;

export const handleSizeType = size => {
    switch (size) {
      case "xsmall":
        return "width: 10px; height: 10px";
        case "small":
        return "width: 15px; height: 15px";
        case "medium":
        return "width: 20px; height: 20px";
        case "large":
        return "width: 30px; height: 30px";
        case "xlarge":
        return "width: 40px; height: 40px";
      default:
        return "width: 10px; height: 10px";
    }
  };


export const SizeLength = styled.button `
    border-radius: 50%;
    outline: none;
    border:0;
    cursor: pointer;
    transform: scale(0.85);
    transition: all .5s ease;
    background: #fff;
    margin-bottom: 5px;
    ${({ size }) => handleSizeType(size)};
    &:hover {
        transform:scale(1);
    }
`

/*Shape Tool*/
export const ShapeTool = styled(ColorTool)`
    justify-content: center;
    align-items:center;
    flex-direction:column;
    padding: 10px 8.5px;
    span {
        font-size:10px;
    }
`;

