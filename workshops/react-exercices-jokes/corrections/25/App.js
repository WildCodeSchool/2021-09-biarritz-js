import './App.css';
import Joke from './components/Joke';
import Filters from "./components/Filters";
import {useEffect, useState} from 'react';
import axios from "axios";

function App() {
  const [withDelivery, setWithDelivery] = useState(true);
  const [numberJokes, setNumberJokes] = useState(1);
  const [containsWord, setContainsWord] = useState("");
  const [jokes, setJokes] = useState();
  const [notFound, setNotFound] = useState(false);

  useEffect(()=>{
    let jokeApi = 'https://v2.jokeapi.dev/joke/Any?type=';
    if (withDelivery){
      jokeApi+='twopart';
    }
    else {
      jokeApi+='single';
    }
    jokeApi+=`&amount=${numberJokes}`;
    jokeApi+=(containsWord===""?'':`&contains=${containsWord}`);

    axios
    .get(jokeApi)
    .then((res)=>{
      return res.data;
    })
    .then((data)=>{
      if (data.message){
        setNotFound(true);
        setJokes();
      }
      else{
        if (parseInt(numberJokes)===1){
          setJokes([data]);
        }
        else{
          setJokes(data.jokes);
        }
        setNotFound(false);
      }
    })
    .catch((error)=>console.log(error));

  },[withDelivery, numberJokes, contains]);


  return (
    <div className="App">
      <Filters contains={containsWord} setContainsWord={setContainsWord} 
      withDelivery={withDelivery} setWithDelivery={setWithDelivery} 
      numberJokes={numberJokes} setNumberJokes={setNumberJokes}/>
      {notFound && <div>Pas de blague trouvée</div>}
      {jokes && jokes.map((joke, numero)=>
        <Joke blague={withDelivery ? joke.setup : joke.joke} chute={joke.delivery} key={numero}/>
      )}
    </div>
  );
}

export default App;