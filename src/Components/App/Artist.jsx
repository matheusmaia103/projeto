import styled from "styled-components";
import Postel from "postel";
import {MagnifyingGlass} from 'phosphor-react';


const max = '70px';
const Img = styled.img`
    border: 2px solid transparent;
    max-width: ${max}!important;
    max-height: ${max}!important;

    border-radius: 100%;
`;

const Tooltip = styled.div`
background-color:white;
color: black;
border-radius: 10px;
padding: 10px;
transition: all 0s;
`;

const Button = styled.button`
    background-color: transparent;

    cursor: pointer;
    border:2px solid black;
    font-family: 'Poppins';
    font-size: 15px;

    *{
        pointer-events:none;
    }
`;
export default function Artist({artist, setQuery}){

    const searchHandler = e =>{
        setQuery(artist.name);
    }


    return (
            <Postel
            title="Toggle menu"
            content={
                <Tooltip className="tooltip">
                    <Button onClick = {e => searchHandler(e)}>
                        {artist.name} <MagnifyingGlass/>
                    </Button>
                </Tooltip>
            }
            caret={
                <div className="caret" />
            }
            trigger = 'hover'
            transitionOutMs = {0}
            triggerDelay = {0}
            hideTrigger = 'mouseleave'
            hideDelay = {0}
            >
                <Img src={artist.picture_medium}  alt="" />
            </Postel>
    )
}