import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@500;600&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&display=swap');

   *, html {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
    overflow-x: hidden;
    font-family: 'Rubik', sans-serif;
    a {
        text-decoration: none;
        &:hover {
        text-decoration: none;
        }
    }
    .form-control {
        &:focus {
        outline: none;
        box-shadow: none!important;
        }
    }

    button {
        &:focus {
        outline: none;
        box-shadow: none;
        }
    }

    p {
        margin-bottom: 0 !important;
    }
  }
`


export default GlobalStyles

