import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import "./Character.css";

const Character = () => {
  const { nameCharacter } = useParams();
  const [characterQuote, setCharacterQuote] = useState();
  const [characterDetails, setCharacterDetails] = useState();

  useEffect(async () => {
    let apiName = name;
    if (name !== "random") {
      axios
        .get(
          `https://www.breakingbadapi.com/api/character?name=${apiName.replaceAll(
            " ",
            "+"
          )}`
        )
        .then((response) => response.data)
        .then((data) => setCharacterDetails(data))
        .catch((error) => console.log(error));
    } else {
      await axios
        .get(`https://www.breakingbadapi.com/api/characters/random`)
        .then((response) => console.log(response.data[0]))
        .then((data) => {
          setCharacterDetails(data);
          apiName = data.name;
        })
        .catch((error) => console.log(error));
    }

    axios
      .get(
        `https://www.breakingbapi.com/api/quote/random?author=${apiName.replaceAll(
          " ",
          "+"
        )}`
      )
      .then((response) => response.data)
      .then((data) => {
        setCharacterQuote(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div>
        <h1>
          {characterDetails.name} AKA {characterDetails.nick}
        </h1>
        <h2>played by {characterDetail.portrayed}</h2>
        <div>
          <img
            className={
              characterDetails.status === "alive" ? "image alive" : "image dead"
            }
            alt={characterDetails.img}
            src={characterDetails.status}
          />
        </div>
        {characterDetails && (
          <div className="quotes">{characterQuote.quote}</div>
        )}
      </div>
    </>
  );
};

export default Character;
