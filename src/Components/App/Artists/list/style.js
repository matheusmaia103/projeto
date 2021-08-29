import styled from "styled-components";

const List = styled.ul`
    border: 4px solid black;

    max-width: 600px;
    padding:10px;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items:center;
    flex-wrap: wrap;

    list-style: none;
    button{
        background: transparent;
        color: ${props => props.theme.color};
        border: 1px solid black;
        font-family: 'Poppins';
        cursor: pointer;
    }
    *{
        transition: 0s;
    }
`;

export { List };