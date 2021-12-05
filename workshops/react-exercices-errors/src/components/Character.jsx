import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './character.css';

const Character = () => {
  const { name } = useParams();
  const [characterQuote, setCharacterQuote] = useState();
  const [characterDetails, setCharacterDetails] = useState();

  useEffect(async () => {
    let apiName = name;
    if (name !== 'random') {
      axios
        .get(
          `https://www.breakingbadapi.com/api/characters?name=${apiName.replaceAll(
            ' ',
            '+'
          )}`
        )
        .then((response) => response.data[0])
        .then((data) => setCharacterDetails(data))
        .catch((error) => console.log(error));
    } else {
      await axios
        .get(`https://www.breakingbadapi.com/api/character/random`)
        .then((response) => response.data[0])
        .then((data) => {
          setCharacterDetails(data);
          apiName = data.name;
        })
        .catch((error) => console.log(error));
    }

    console.log(apiName);
    axios
      .get(
        `https://www.breakingbadapi.com/api/quote/random?author=${apiName.replaceAll(
          ' ',
          '+'
        )}`
      )
      .then((response) => response.data[0])
      .then((data) => {
        setCharacterQuote(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, [name]);

  return (
    <>
      {characterDetails && (
        <div>
          <h1>
            {characterDetails.name} AKA {characterDetails.nickname}
          </h1>
          <h2>played by {characterDetails.portrayed}</h2>
          <div>
            <img
              className={
                characterDetails.status === 'Alive'
                  ? 'image alive'
                  : 'image dead'
              }
              src={characterDetails.img}
              alt={characterDetails.status}
            />
          </div>
          {characterQuote && (
            <div className="quote">{characterQuote.quote}</div>
          )}
        </div>
      )}
    </>
  );
};

export default Character;
