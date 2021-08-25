import styled from "styled-components";

const max = '70px';
const Img = styled.img`
    border: 2px solid transparent;
    max-width: ${max}!important;
    max-height: ${max}!important;

    border-radius: 100%;
    cursor: pointer;
`;

const Tooltip = styled.div`
background-color:white;
color: black;
border-radius: 10px;
padding: 10px;
transition: all 0s;
`;

const Button = styled.button`
    background-color: transparent;

    cursor: pointer;
    border:2px solid black;
    font-family: 'Poppins';
    font-size: 15px;

    *{
        pointer-events:none;
    }
`;

export { Img, Tooltip, Button };