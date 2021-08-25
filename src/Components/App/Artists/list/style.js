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
`;

export { List };