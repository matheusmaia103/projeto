import styled from "styled-components";

export const navBar = styled.nav`
    color: black;
    text-align: right!important;

    background-color: darkblue;
`;

const imgSize = '50px';

window.addEventListener('scroll', function(){
    const nav = document.querySelector('nav');
    nav.classList.toggle('shadow', window.scrollY > 0);
})

export const Bar = styled.nav`

    background-color: ${props => props.theme.bgcolor};
    color: ${props => props.theme.color};
    text-align: left;
    font-size: 30px;

    width: 100%;
    padding: 15px 5px;
    position: fixed;
    top: 0;
    right:0;
    left: 0;

    box-shadow: ${props => props.theme.navShadow};

    display: flex;
    justify-content: space-between;
    align-items: center;

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