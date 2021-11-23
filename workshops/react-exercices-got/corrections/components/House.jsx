import QuoteList from "./QuoteList";
import { useEffect, useState } from "react";
import axios from "axios";

const House = ({charactersList, character}) => {
    const [characterName, setCharacterName] = useState();
    const [characterInfo, setCharacterInfo] = useState();
    
    useEffect(()=>{
        setCharacterName(character);
    },[character]);

    useEffect(()=>{
        // quand character name est modifié
        if (characterName !== ''){
          axios.get(`https://game-of-thrones-quotes.herokuapp.com/v1/character/${characterName}`)
          .then((response)=> response.data[0])
          .then((data)=> setCharacterInfo(data));
        }
      },[characterName]);

    return (
        <>
            <select onChange={(e)=>setCharacterName(e.target.value)}>
                {charactersList.map((character, index)=>
                    <option value={character.slug} key={index}>{character.name}</option>)
                }
            </select>
            {characterInfo && <QuoteList name={characterInfo.name} quoteList={characterInfo.quotes}/>}
        </>
    )
}

export default House;