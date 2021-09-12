import React, { useState, useEffect } from 'react';
import List from './Music/list/list.jsx';
import ArtistList from './Artists/list/ArtistList.jsx';
//import {Btn} from './btn.jsx';
import { AppDisplay, Header, Form} from './AppStyles.js'
import {MagnifyingGlass} from 'phosphor-react';
import { ThemeProvider } from 'styled-components';
import { dark, light } from './themes/all'
import Nav from './nav/Nav';
import GlobalStyle from './themes/GlobalStyles'


export default function App() { 
  const [inputText, setInputText] = useState('');
  const [query, setQuery] = useState('circles');
  const [musics, setMusics] = useState([]);
  const [artists, setArtists] = useState([]);
  //const [next, setNext] = useState('');
  
  //when form submits it changes the query
  const submitHandler = e => {
    e.preventDefault();
    setQuery(inputText);
  }

  //this functions searchs query at the API white useEffect
  const getLyrics = () =>{
    setMusics([]);
    setArtists([]);
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

  /*
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
  */
 const [theme, setTheme] = useState(false);

 useEffect(() =>{
   // eslint-disable-next-line
   let lastTheme = localStorage.getItem('theme');  
   if(lastTheme !== true) lastTheme = false;
   setTheme(lastTheme);
 }, [])

  const themeToggler = () =>{
    setTheme(!theme);
    localStorage.setItem('theme', !theme)
  }
 return(
   <ThemeProvider theme={theme ===  true ? dark : light}>
    <AppDisplay>
      <GlobalStyle/>

      <Nav themeToggler={themeToggler} theme={theme}/>
      <Header>
        <div>
          <h1>Seja bem vindo!</h1>
          <h3>Descubra novas músicas e cantores</h3>
        </div>

          <Form
          onSubmit = {e => submitHandler(e)} >
            <input type="text" value={inputText} onChange={e => setInputText(e.target.value)}/>
            <button type='submit'><MagnifyingGlass size={48} /></button>
        </Form>
      </Header>


    <p>Resultados para: '{query}'</p>

      <ArtistList artists = {artists} setQuery = {setQuery}/>


      <List
        musics = {musics}
        setQuery = {setQuery}
      />

  {/*
      <Btn
        getMore = {getMore}
        link = {next}
        text = {'More'}
      />
  */}
    </AppDisplay>
   </ThemeProvider>
  )
}