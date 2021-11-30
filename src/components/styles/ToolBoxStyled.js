import styled from "styled-components";


export const ToolBox = styled.div`
    height: auto;
    max-width:150px;
    background: #27293d;
    border-radius: 1rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    box-shadow: 0 1px 20px 0 rgb(0 0 0 / 10%);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 15px 10px;
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
    right: -90px;
    height: auto;
    max-width:150px;
    background: #27293d;
    border-radius: 15px;
    box-shadow: 0 1px 20px 0 rgb(0 0 0 / 20%);
    padding: 15px 10px;
    display: none;
    grid-template-columns: 2fr auto;
    grid-gap: 6px;
    ${ToolItem}:hover & {
        display: grid;
    }
    &:before {
        content:'';
        height:100%;
        width: 50px;
        position: absolute;
        left: -15px;
        background: transparent;
    }
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
    display: none;
    justify-content: center;
    align-items:center;
    flex-direction:column;
    left: -84px;
    max-width:50px;
    ${ToolItem}:hover & {
        display: flex;
    }
    &:before {
        content:'';
        height:100%;
        width: 50px;
        position: absolute;
        left: 40px;
        background: transparent;
    }
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
    display: none;
    justify-content: center;
    align-items:center;
    flex-direction:column;
    right: -102px;
    max-width:75px;
    ${ToolItem}:hover & {
        display: flex;
    }

    &:before {
        content:'';
        height:100%;
        width: 50px;
        position: absolute;
        left: -30px;
        background: transparent;
    }
`;

