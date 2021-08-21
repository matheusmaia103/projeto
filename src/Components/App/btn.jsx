import styled from 'styled-components';



    //styling
    const StyledButton = styled.button`
    font-family: 'Poppins';
    font-size: 4vw;
    padding: 10px;
    
    border-radius: 0px;
    border: darkblue solid 1px;
    background-color: #1e42a518;
    
    width: 100%;
    max-width: 500px;
    height: 100px;
    margin-bottom:15px;
    
    cursor: pointer;
    transition: 0.3s ease;

    &:hover{
        
    }
    `;

export const Btn = ({ text, link, getMore }) =>{

    return(
        <StyledButton
         key={2333} 
         onClick={e => getMore(link)}
         >
             {text}
             
        </StyledButton>

    )
}