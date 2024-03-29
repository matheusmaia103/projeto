import styled from "styled-components";



const AppDisplay = styled.div`
width: 100%!important;
height: 100%!important;
color: ${props => props.theme.color};
background: ${props => props.theme.bgcolor};
font-weight: bold;
font-family: 'Poppins'!important;
margin-inline: auto;
overflow:auto!important;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const Header = styled.header`
padding-top:40px;
background: linear-gradient( 
  ${props => props.theme.bgdeg}deg
  ,#b84fdd -7%,#4965f4 49%,#2efb74 119%);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;

  width: 100%;
  height: 35vw;

  min-height:450px;

  color: white;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 3px solid white;
  border-radius: 40px;
  overflow: hidden;

  background: #1313139c;

  input{
  font-size: 4vh;
  font-family: 'Poppins';
  font-weight: light;

  background-color: transparent;
  color: white;
  
  border-radius: 10px;
  border: none;
  
  padding: 6px;
  padding-left: 15px;

  width: 50vw;
  max-width: 450px;
  }

  button{
    color: white;    
    background-color: transparent;

    border: none;
    border-radius: 20px;

    width: 80px;
    height: 55px;

    cursor: pointer;
    transition: 0.3s ease-in;
    
    :active{
      transform: scale(0.8)
    }
  }
`;

export { AppDisplay, Header, Form };