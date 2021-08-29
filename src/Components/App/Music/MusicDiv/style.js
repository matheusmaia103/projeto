import styled from "styled-components";


const imageSize = '20vh';

const StyledMusic = styled.li`
    background-color: ${props => props.theme.bgmusic};
    color: ${props => props.theme.musicColor};
    font-weight: lighter;
    transition: 0.3s ease;

    width: 100%!important;
    max-width: 800px;
    margin-top: 15px;

    box-shadow: ${props => props.theme.musicShadow};

    border-radius: 10px;
    overflow:hidden;

    display:flex;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;

    box-sizing: border-box;

    img{
        box-sizing: border-box;

        max-width: ${imageSize};
        max-height: ${imageSize};
    }

    svg{
        cursor: pointer;
        background-color: transparent;
        border-radius: 100%;
        padding: 10px;
        margin-right: 30px;

        font-size: 60px;

        *{
            pointer-events: none;
        }
    }


    .infos{
        box-sizing: border-box;
        margin-right: 10px;

        display:flex;
        flex-direction:row;
        justify-content: space-between;
        align-items: center;
    }

    .credits{        
        box-sizing: border-box;
        max-height: ${imageSize};

        margin-left: 10px;

        display:flex;
        flex-direction:column;
        justify-content: space-evenly;
        align-items: left;
        
        h2{
            width: 100%!important;
            margin: 0;
        }
    }

    `;

    export { StyledMusic };