import { createGlobalStyle } from 'styled-components';

 const GlobalStyles = createGlobalStyle`
 .hovered{
    transform: scale(1.5)
    }

    body, 
    html{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow: hidden;
    }


    *{
        box-sizing: border-box;
        outline: none;
    }

    svg{
        box-sizing: content-box;
    }

    form{
        input{
            background-color: white!important;
        }

        button{
            border: 5px solid yellow;
            color: blue;
        }
    }

    form{
        background-color: black!important
    }

`;

export default GlobalStyles;