import styled from "styled-components";


const imageSize = '20vh';

const StyledMusic = styled.li`
    background-color: ${props => props.theme.bgmusic};
    color: ${props => props.theme.musicColor};
    font-weight: lighter;
    transition: 0.3s ease;

    width: 90%!important;
    max-width: 800px;
    margin-top: 15px;
    overflow: hidden;


    border-radius: 10px;
    box-shadow: ${props => props.theme.musicShadow};

    display:flex;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;

    box-sizing: border-box;

    .error{
        cursor: not-allowed;
        color: #f74a4a;
    }

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


        cite{
            cursor: pointer;

            :hover{
                text-decoration: underline 
            }
        }
        
        h2{
            width: 100%!important;
            margin: 0;
        }
    }

    :hover{
        transform: scale(1.05)
    }
    `;

    export { StyledMusic };