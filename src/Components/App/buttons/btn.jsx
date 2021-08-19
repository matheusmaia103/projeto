import styled from 'styled-components';


export const Btn = ({ text, link, getMore }) =>{

    //styling
    const Button = styled.button`
    padding: 10px;
    border-radius: 40px;
    border: transparent solid 1px;
    background-color: #1e42a518;
    backdrop-filter: blur(5px);
    cursor: pointer;
    transition: 0.3s ease;

    &:hover{
        transform: scale(1.2)
    }
    `;

    const handleClick = () => {
        getMore(link)
    }

    return(
        <Button
         key={2333} 
         onClick={handleClick}
         >
             {text}
             
        </Button>

    )
}