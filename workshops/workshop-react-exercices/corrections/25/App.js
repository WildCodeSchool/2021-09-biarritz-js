import './app.css';
import Joke from './components/Joke';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  const [numberJokes, setNumberJokes] = useState(1);
  const [withDelivery, setWithDelivery] = useState(true);
  const [containsWord, setContainsWord] = useState('');
  const [jokes, setJokes] = useState([]);

  useEffect(()=>{
      let apiCall = 'https://v2.jokeapi.dev/joke/Any?type=';
      apiCall += withDelivery ? 'twopart' : 'single';
      apiCall += `&amount=${numberJokes}`;
      apiCall += containsWord ? `&contains=${containsWord}` : '' ;
      
      axios
      .get(apiCall)
      .then((response)=>{
        if (numberJokes===1){
          return [response.data];
        }
        else{
          return response.data.jokes;
        }
      })
      .then((data)=>setJokes(data))
      .catch((error)=>console.log(error));
      
  },[numberJokes, withDelivery, containsWord]);

  return (
    <>
      <div className="filtres">
          <div className="filtre__input">
            <label className="filtre__label" htmlFor="numberJokes">Nombre de blagues :</label>
            <input className="filtre__input__text--small" type="number" value={numberJokes} id="numberJokes" onChange={(e)=>setNumberJokes(e.target.value)}/>
          </div>
          <div className="filtre__input">
            <label className="filtre__label" htmlFor="withDelivery">Avec chute : </label>
            <input type="checkbox" checked={withDelivery} id="withDelivery" onChange={(e)=>setWithDelivery(e.target.checked)}/>
          </div>
          <div className="filtre__input">
            <label className="filtre__label" htmlFor="containsWord">Contient :</label>
            <input className="filtre__input__text--large" type="text" value={containsWord} id="containsWord" onChange={(e)=>setContainsWord(e.target.value)}/>
          </div>
      </div>    
      <div className="App">

        {jokes && jokes.map((joke, index)=>
          <Joke key={index} blague={withDelivery ? joke.setup : joke.joke} chute={joke.delivery}/>
        )}
        
      </div>
    </>
  );
}

export default App;
