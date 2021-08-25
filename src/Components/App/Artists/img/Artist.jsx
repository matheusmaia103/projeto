import  { Img, Tooltip, Button } from './styledImg'
import Postel from "postel";
import {MagnifyingGlass} from 'phosphor-react';



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
            trigger = 'click'
            transitionOutMs = {0}
            triggerDelay = {0}
            hideTrigger = 'mouseleave'
            hideDelay = {0}
            >
                <Img src={artist.picture_medium}  alt="" />
            </Postel>
    )
}