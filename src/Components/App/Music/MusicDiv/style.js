import styled from "styled-components";


const maximageSize = '12vw';
const minimageSize = '130px';

const StyledMusic = styled.li`
    background-color: ${props => props.theme.bgmusic};
    color: ${props => props.theme.musicColor};
    font-weight: lighter;
    transition: 0.3s ease;

    width: 60vw!important;
    max-width: 800px;
    margin-top: 15px;
    overflow: auto!important;


    border-radius: 10px;
    box-shadow: ${props => props.theme.musicShadow};

    display:flex;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;

    position: relative!important;
    z-index: 1!important;

    box-sizing: border-box;

    @media(max-width: 800px){
        width: 95%!important;
        max-width: 100%!important;

    }

    .error{
        cursor: not-allowed;
        color: #f74a4a;
    }

    img{
        box-sizing: border-box;

        max-width: ${maximageSize};
        max-height: ${maximageSize};

        min-width: ${minimageSize};
        min-height: ${minimageSize};

        width: 100%;
    }

    svg{
        cursor: pointer;
        background-color: transparent;
        border-radius: 100%;
        padding: 10px;
        margin-right: 30px;

        font-size: 60px;
        width: 10%auto;

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
        max-height: ${maximageSize};
        min-height: ${minimageSize};


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
            width: 100%;
            margin: 0;
            overflow-wrap: anywhere;
        }
    }

    :hover{
        transform: scale(1.05)
    }

    
    `;

    export { StyledMusic };