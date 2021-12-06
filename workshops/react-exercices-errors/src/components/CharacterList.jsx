import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./CharacterList.module.css";

const CharacterList = (props) => {
  const [characterList, setCharacterList] = useState();

  useEffect(() => {
    let url = "https://www.breakingbadapi.com/api/characters";
    url =
      theme === "breakingbad"
        ? "?category=Breaking+Bad"
        : "?category=Better+Call+Saul";

    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => setCharacterList(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {
        characterList.map((character) => (
          <Link to={"/character/" + character.name}>
            <img
              className={styles.character_image}
              alt={character.img}
              src={character.name}
            />
          </Link>
        )}
    </div>
  );
};

export default CharacterList;
