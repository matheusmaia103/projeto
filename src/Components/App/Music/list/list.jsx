import Music from '../MusicDiv/Music.jsx'
import { StyledList } from './styledList.js';

export default function List  ({ musics, setQuery }) {

    let i = 0;

    return (
        <StyledList>
            {musics.map(music => (
                <Music
                 music = {music}
                 setQuery = {setQuery}
                 key = {i++}
                />
            ))}
        </StyledList>
    )
}