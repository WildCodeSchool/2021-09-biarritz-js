import './app.css';
import Joke from './components/Joke';
import blagues from './data';
import React, {useEffect, useState} from 'react';

function App() {
  const [numberJokes, setNumberJokes] = useState(1);
  const [withDelivery, setWithDelivery] = useState(true);
  const [containsWord, setContainsWord] = useState('');

  const getApiCall = () => {
    let apiCall = 'https://v2.jokeapi.dev/joke/Any?type=';
    apiCall += withDelivery ? 'twopart' : 'single';
    apiCall += `&amount=${numberJokes}`;
    apiCall += containsWord ? `&contains=${containsWord}` : '' ;
    return apiCall;
  }

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

        {blagues.map((blague, index)=>
          <Joke key={index} blague={blague.setup} chute={blague.delivery}/>
        )}
        
      </div>
    </>
  );
}

export default App;
