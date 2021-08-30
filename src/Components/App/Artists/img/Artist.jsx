
export default function Artist({artist, setQuery}){

    const searchHandler = e =>{
        setQuery(artist.name);
    }

    return (
            <li>
                <button onClick = {e => searchHandler()}>
                    <img src={artist.picture_medium} alt="" />
                    <h4>{artist.name}</h4>
                </button>
            </li>
    )
}