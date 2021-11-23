import { useState, useEffect } from "react";
import axios from "axios";
import House from "./House";
import { useParams } from "react-router-dom";

const GoT = () => {
    const [charactersList, setCharactersList] = useState();
     const { housename } = useParams();
     

    useEffect(()=>{
      if (housename !== ''&& housename !=='all'){
        axios
        .get(`https://game-of-thrones-quotes.herokuapp.com/v1/house/${housename}`)
        .then((response)=>response.data[0].members)
        .then((data)=>setCharactersList(data))
      }
      else {
        axios.get('https://game-of-thrones-quotes.herokuapp.com/v1/characters')
        .then((response)=>response.data)
        .then((data)=>setCharactersList(data));
      }
    },[housename]);

    // console.log(charactersList[0]);
    return (
      <>
        {charactersList && 
          <House charactersList={charactersList} character={charactersList[0] ? charactersList[0].slug : ''}/>
        }
      </>
    )
}

export default GoT;