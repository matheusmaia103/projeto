import styled from 'styled-components';
import Artist from './Artist';
import Postel from 'postel';

const List = styled.ul`
    border: 4px solid black;

    max-width: 600px;
    padding:10px;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items:center;
    flex-wrap: wrap;
`;

export default function ArtistList ({artists, setQuery}){
    let i = 1;

    const uniqueArtistsIds = [];
    const uniqueArtists = [];

    artists.forEach(artist => {
        if(!uniqueArtistsIds.includes(artist.id)){
            uniqueArtistsIds.push(artist.id);
            uniqueArtists.push(artist);
        }
    });

    const Header = () => {
        if(uniqueArtists.length > 1){
            return (
                <p>{uniqueArtists.length} artistas diferentes encontrados:</p>
            )
        } else {
            return(
                <p>{uniqueArtists.length} artista encontrado:</p>
            )
        }
    }

    return(
        <>
            <Header/>
                <List>
                {uniqueArtists.map(artist => (
                    <Artist artist = {artist} key = {i++} setQuery = {setQuery}/>
                ))}
                </List>
        </>
    )
}