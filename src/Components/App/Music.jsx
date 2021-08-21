import styled from 'styled-components';
import {Play, Pause} from 'phosphor-react';
import {useState} from 'react';


    const imageSize = '20vh';

    const StyledMusic = styled.li`
    background-color: #1f1e1eda;
    color: white;
    font-weight: lighter;
    transition: 0.3s ease;

    width: 100%!important;
    max-width: 800px;
    margin-top: 15px;


    border-radius: 10px;
    overflow:hidden;

    display:flex;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;

    box-sizing: border-box;

    img{
        box-sizing: border-box;

        max-width: ${imageSize};
        max-height: ${imageSize};
    }

    svg{
        cursor: pointer;
        background-color: transparent;
        border-radius: 100%;
        padding: 10px;
        margin-right: 30px;

        font-size: 60px;

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
        max-height: ${imageSize};

        margin-left: 10px;

        display:flex;
        flex-direction:column;
        justify-content: space-evenly;
        align-items: left;
        
        h2{
            width: 100%!important;
            margin: 0;
        }
    }

    `;


export default function Music({music}){
    const [playing, setPlaying] = useState(false);

    const handlePlay = e =>{
        const Button = e.target;
        const Music = Button.parentElement;
        const audio = Music.querySelector('audio');

        console.log(Button);
        
        if(playing === false){
            audio.play();
            setPlaying(!playing)
            return;
        } 
        if(playing === true) {
            audio.pause();
            setPlaying(!playing);
            return;
        }
    }
    const Button = () =>{
        if(playing === false){
            return(
                <Play size={20} onClick={e => handlePlay(e)}/>
            )
        } 
        if(playing === true) {
            return (
                <Pause size={20} onClick={e => handlePlay(e)}/>
            )
        }

    }
    return (
        <StyledMusic>
            <div className="infos">
                <img src={music.album.cover_medium} alt="img"/>
                <div className="credits">
                    <h2>{music.title}</h2>
                    <cite>{music.artist.name}</cite>
                </div>
            </div>
            
            <audio id = {music.id} src={music.preview}/>
            <Button/>
        </StyledMusic>
    )
}