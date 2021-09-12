import { StyledMusic } from './style';
import {Play, Pause, WarningCircle} from 'phosphor-react';
import {useState, useRef, useEffect} from 'react';   


export default function Music({music, setQuery}){
    const [playing, setPlaying] = useState(false);
    const audioTag = useRef();
    
    const handlePlay = e =>{   
        const otherAudios = document.querySelectorAll('audio');
        otherAudios.forEach(audio => {
            audio.pause();
        });
             
        const audio = audioTag.current;
        console.log(audioTag);

        try{
            if(playing === 'error'){
                return;
            }
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
        } catch(error){
            alert(error)
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
        } if(playing === 'error'){
            return(
                <WarningCircle size={20} className='error'/> 
            )
        }

    }

    return (
        <StyledMusic>
            <div className="infos">
                <img src={music.album.cover_big} alt="img"/>
                <div className="credits">
                    <h2>{music.title}</h2>
                    <cite onClick={e => setQuery(music.artist.name)}>{music.artist.name}</cite>
                </div>
            </div>
            
            <audio ref={audioTag} id = {music.id} src={music.preview} onError = {e => setPlaying('error')} onPlay = { e => setPlaying(true)} onPause = {e => setPlaying(false)} onEnded = {e => setPlaying(false)}/>
            
            <Button/>
        </StyledMusic>
    )
}