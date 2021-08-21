import './App.css';
import React, { useState, useEffect } from 'react';
import List from './list.jsx';
import ArtistList from './ArtistList.jsx';
import {Btn} from './btn.jsx';
import styled from 'styled-components';
import {MagnifyingGlass} from 'phosphor-react';



const AppDisplay = styled.div`
color: white;
background: linear-gradient(
    90deg,
    rgba(48, 16, 255, 1) 0%,
    rgba(100, 115, 255, 1) 100%
  );
font-weight: bold;
font-family: Poppins!important;
margin-inline: auto;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const Header = styled.header`
background: linear-gradient( 
  71deg
  ,#b84fdd -7%,#4965f4 49%,#2efb74 119%);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  width: 100%;
  height: 40vw;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  input{
  font-size: 4vh;
  font-family: 'Poppins';
  font-weight: light;

  border-radius: 10px;
  border: 1px solid black;

  padding: 6px;
  padding-left: 8px;

  width: 50vw;
  max-width: 450px
  }

  button{
    color: white;    
    background-color: rgba(0, 0, 0, 0.4);

    border: none;
    border-radius: 40px;

    width: 100px;
    height: 60px;

    cursor: pointer;
    transition: 0.3s ease-in;
    
    :active{
      transform: scale(0.8)
    }
  }
`;


export default function App() {

  
  const [inputText, setInputText] = useState('circles');
  const [query, setQuery] = useState('circles');
  const [musics, setMusics] = useState([]);
  const [artists, setArtists] = useState([]);
  const [next, setNext] = useState('');
  const [total, setTotal] = useState(0);
  
  //when form submits it changes the query
  const submitHandler = e => {
    e.preventDefault();
    setQuery(inputText);
  }

  //this functions searchs query at the API white useEffect
  const getLyrics = () =>{
    fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${query}`, {
  "method": "GET",
  "headers": {
    "x-rapidapi-key": "1c6295e4f7msh302e5d924c95024p1ddbdbjsn561387dbd7d1",
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
  }
  })
  .then(response => response.json())
  .then(response => {
    setMusics(response.data)
    setTotal(response.total)
    console.log(response)

    if(response.next){
      setNext(response.next);
    }
  })
  .catch(err => {
    console.error(err);

  });
  }

  //get API data every time query changes
  useEffect(() => {
    getLyrics()
    // eslint-disable-next-line
  }, [query])

  useEffect(() => {
    if(musics){
      const artists = 
      musics.map(music => (
        music.artist
      ));

      setArtists(artists)

      console.log(artists);
    }
  }, [musics])

  const getMore = link =>{
    const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
    const thingProxy = 'http(s)://thingproxy.freeboard.io/fetch/';
    const freeProxy = ' https://www.free-proxy-list.com';
    const scrapeStack = 'http://api.scrapestack.com/scrape?access_key=853d1e693f881daefeb7879f946efff3&url='

    fetch(scrapeStack+link, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "1c6295e4f7msh302e5d924c95024p1ddbdbjsn561387dbd7d1",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
        }
      })
      .then(response => response.json())
      .then(response => {
        console.log(musics);
      setMusics([...musics, ...response.data])
      console.log(response.data);
      console.log(scrapeStack+link);

      if(response.next){
        setNext(response.next);
      }
    })
  }

  return(
    <AppDisplay>
     <Header>
       <h1>Dreezer App!!</h1>

        <Form
        onSubmit = {e => submitHandler(e)} >
          <input type="text" value={inputText} onChange={e => setInputText(e.target.value)}/>
          <button type='submit'><MagnifyingGlass size={48} /></button>
      </Form>
    </Header>

    <ArtistList artists = {artists} setQuery = {setQuery}/>

    <p>{`${total} músicas encontradas`}</p>

    <List
      musics = {musics}
    />

    <Btn
      getMore = {getMore}
      link = {next}
      text = {'More'}
    />

   </AppDisplay>
  )
}