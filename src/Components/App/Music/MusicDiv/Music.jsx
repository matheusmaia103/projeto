import { StyledMusic } from './style';
import {Play, Pause} from 'phosphor-react';
import {useState} from 'react';



    


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
            
            <audio id = {music.id} src={music.preview} onPlay = { e => setPlaying(true)} onPause = {e => setPlaying(false)} onEnded = {e => setPlaying(false)}/>
            <Button/>
        </StyledMusic>
    )
}