import './App.css';
import Joke from './components/Joke';
import Filters from './components/Filters';
import blagues from './data';
import React, {useState} from 'react';

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

  console.log(getApiCall());
  
  return (
    <>
      <Filters containsWord={containsWord} setContainsWord={setContainsWord} 
      withDelivery={withDelivery} setWithDelivery={setWithDelivery} 
      numberJokes={numberJokes} setNumberJokes={setNumberJokes}/>
      <div className="App">


        {blagues.map((blague, index)=>
          <Joke key={index} blague={blague.setup} chute={blague.delivery}/>
        )}
        
      </div>
    </>
  );
}

export default App;
