import { createGlobalStyle } from 'styled-components';

 const GlobalStyles = createGlobalStyle`

    body, 
    html{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${props => props.theme.bgcolor}
    }

    ::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent; 
  opacity:0.1;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: ${props => props.theme.artistborder}; 
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
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

    @media(max-width: 800px) {
    .music{
      width: 100%!important
    }
  }
`;

export default GlobalStyles;