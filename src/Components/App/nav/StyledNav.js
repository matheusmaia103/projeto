import styled, { createGlobalStyle} from "styled-components";

export const navBar = styled.nav`
    color: black;
    text-align: right!important;

    background-color: darkblue;
`;

const imgSize = '50px'

export const Bar = styled.nav`

    background-color: ${props => props.theme.bgcolor};
    color: ${props => props.theme.color};
    text-align: left;

    width: 100%;
    padding: 15px 5px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 30px;

    img{
        max-width:${imgSize};
        max-height:${imgSize};
        margin-right: 10px;
        margin-left: 10px;
    }
`;

export const Flex = styled.div`    
    display: flex;
    justify-content:space-evenly;
    align-items: center;
`;