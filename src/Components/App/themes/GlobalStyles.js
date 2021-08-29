import { createGlobalStyle } from 'styled-components';

 const GlobalStyles = createGlobalStyle`

    body, 
    html{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    .error{
        cursor: not-allowed!important;
    }


    *{
        box-sizing: border-box;
        outline: none;
        transition: 0.3s ease-in-out;
    }

    svg{
        box-sizing: content-box;
    }
`;

export default GlobalStyles;