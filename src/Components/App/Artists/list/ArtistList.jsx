import { List } from './style.js';
import Artist from '../img/Artist.jsx';



export default function ArtistList  ({artists, setQuery}){
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
        } 
        if (uniqueArtists.length === 1) {
            return(
                <p>{uniqueArtists.length} artista encontrado:</p>
            )
        }
        if (uniqueArtists.lenth === 0) {
            return('')
        }
    }

    

    return(
        <>
            <Header/>
                <List>
                {uniqueArtists.map(artist => (
                    <Artist artist = {artist} key = {i++} setQuery = {setQuery} />
                ))}
                </List>
        </>
    )
}