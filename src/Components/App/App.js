import './App.css';
import React, { useState, useEffect } from 'react';
import List from './list.jsx';
import {Btn} from './buttons/btn.jsx';
import styled from 'styled-components'

export default function App() {

  
  const [inputText, setInputText] = useState('circles');
  const [query, setQuery] = useState('circles');
  const [musics, setMusics] = useState([]);
  const [next, setNext] = useState('');
  const [prev, setPrev] = useState('');
  const [total, setTotal] = useState(0);


  const proxy = 'https://cors-proxy.htmldriven.com/?url=https://www.htmldriven.com/'
  
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
    if(response.prev){
      setPrev(response.prev);
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

  const getMore = link =>{
    console.log(`http(s)://thingproxy.freeboard.io/fetch/${link}`);
    fetch(`https://cors-anywhere.herokuapp.com/${link}`, {
      "method": "GET",
      "headers": {
       // "Access-Control-Allow-Origin" : "*",
        "x-rapidapi-key": "1c6295e4f7msh302e5d924c95024p1ddbdbjsn561387dbd7d1",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
        }
      })
      .then(response => response.json())
      .then(response => {
      setMusics(response.data)
      console.log(response)

      if(response.next){
        setNext(response.next);
      }
    if(response.prev){
      setPrev(response.prev);
    }

      console.log(response);
      console.log(link)
    })
  }

  const App = styled.div`
    color: white;
    font-weight: bold;
    font-family: Poppins!important;
    margin-inline: auto;
  `;

  const Title = styled.h1`
    background: linear-gradient( 
      71deg
      ,#b84fdd -7%,#4965f4 49%,#2efb74 119%);
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
  `;
  return(
    <App>
     <Title>Dreezer App!!</Title>
      <form
      onSubmit = {submitHandler} >
        <input type="text" value={inputText} onChange={e => setInputText(e.target.value)}/>
        <button type='submit'>search</button>
    </form>
    <Btn
      getMore = {getMore}
      link = {next}
      text = {'More'}
    />
    <Btn
      getMore = {getMore}
      link = {prev}
      text = {'Previous page'}
    />

    <p>{`Total de ${total} resultados encontrados`}</p>

    <List
      musics = {musics}
    />


   </App>
  )
}