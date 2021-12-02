import { useState, useEffect } from "react";
import axios from "axios";
import Game from "./Game";
import "./gameList.css";

const GameList = () => {
  // Contiendra la liste des jeux => remplie par API
  const [gameList, setGameList] = useState();
  // Contient la valeur du bouton permet de filtrer par rapport au rating
  const [filtered, setFiltered] = useState(false);

  useEffect(() => {
    // appel API et affectation de la liste des jeux à la variable d'état
    axios
      .get("https://apis.wilders.dev/wild-games/games/")
      .then((response) => response.data)
      .then((data) => setGameList(data))
      .catch((err) => console.log(err));
  }, []);

  // fonction removeGame qui prend un id de game et la supprime de la variable d'état gameList
  const removeGame = (id) => {
    setGameList(gameList.filter((game) => game.id !== id));
  };

  return (
    <ul>
      {/* au clic sur le bouton, inverse la valeur de filtered */}
      <button onClick={() => setFiltered(!filtered)}>
        {!filtered
          ? "Cliquez pour avoir les bons jeux"
          : "Cliquez pour avoir tous les jeux"}
      </button>
      {gameList &&
        gameList
          .filter((game) => game.rating > 4.5 || !filtered)
          .map((game) => (
            //   Passe l'intégralité de l'objet game et passe aussi la fonction permettant de supprimer
            <Game key={game.id} {...game} removeGame={(id) => removeGame(id)} />
          ))}
    </ul>
  );
};

export default GameList;
