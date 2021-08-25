import Music from '../MusicDiv/Music.jsx'
import { StyledList } from './styledList.js';

export default function List  ({ musics }) {

    let i = 0;

    return (
        <StyledList>
            {musics.map(music => (
                <Music
                 music = {music}
                 key = {i++}
                />
            ))}
        </StyledList>
    )
}