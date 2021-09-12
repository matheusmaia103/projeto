import styled from "styled-components";

const max = '70px';

const List = styled.ul`
    border: 2px solid ${props => props.theme.artistborder};
    border-radius: 20px;

    max-width: 900px;
    padding:10px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items:center;
    flex-wrap: wrap;

    list-style: none;
    button{
        background: ${props => props.theme.bgmusic};
        color: ${props => props.theme.color};
        font-family: 'Poppins';
        cursor: pointer;
        
        border: 1px solid transparent;
        border-radius: 50px;
        padding-left: 0;
        padding-right: 8px;
        margin: 2px;

        box-shadow: ${props => props.theme.musicShadow};
        
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items:center;
        flex-wrap: wrap;


        transition: 0.3s ease;
        :hover{
            transform: scale(1.03)
        }

        img{
            margin-right: 10px;
            border: 2px solid transparent;
            max-width: ${max}!important;
            max-height: ${max}!important;

            border-radius: ${max};
            cursor: pointer;
        }
    }
    *{
        transition: 0s;
    }
`;

export { List };