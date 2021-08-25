import styled from "styled-components";



const AppDisplay = styled.div`
width: 100%!important;
height: 100%!important;
color: white;
background: linear-gradient(
    90deg,
    rgba(48, 16, 255, 1) 0%,
    rgba(100, 115, 255, 1) 100%
  );
font-weight: bold;
font-family: Poppins!important;
margin-inline: auto;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const Header = styled.header`
background: linear-gradient( 
  71deg
  ,#b84fdd -7%,#4965f4 49%,#2efb74 119%);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  width: 100%;
  height: 40vw;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  input{
  font-size: 4vh;
  font-family: 'Poppins';
  font-weight: light;

  background-color: rgba(0,0,0,0.4);
  color: white;
  border: none;

  border-radius: 10px;
  border: 1px solid black;

  padding: 6px;
  padding-left: 8px;

  width: 50vw;
  max-width: 450px
  }

  button{
    color: white;    
    background-color: rgba(0, 0, 0, 0.4);

    border: none;
    border-radius: 40px;

    width: 80px;
    height: 60px;

    cursor: pointer;
    transition: 0.3s ease-in;
    
    :active{
      transform: scale(0.8)
    }
  }
`;

export { AppDisplay, Header, Form };