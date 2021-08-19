export default function List  ({ musics }) {

    return (
        <ul>{musics.map(music => (
            <li key = {music.id}>
                <img src={music.album.cover_medium} alt="img"/>
                <h1>{music.title}</h1>
                <audio src={music.preview} controls></audio>
            </li>
        ))}</ul>
    )
}