import styled from 'styled-components';
import Music from './Music'

    const StyledList = styled.ul`
    padding: 0;

    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;

    `;
export default function List  ({ musics }) {

    let i = 0;

    return (
        <StyledList>{musics.map(music => (
                <Music
                 music = {music}
                 key = {i++}
                />
        ))}
        </StyledList>
    )
}