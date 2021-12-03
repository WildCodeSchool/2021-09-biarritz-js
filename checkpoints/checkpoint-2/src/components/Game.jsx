import "./game.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Game = ({ id, name, rating, background_image, released, removeGame }) => {
  //méthode d'eric pour rendre invisible les jeux
  const [visible, setVisible] = useState(true);

  return (
    <>
      {/* méthode 1 */}
      {visible && (
        <div className="game">
          <div className="buttons">
            <button
              className="superButton"
              onClick={() => setVisible(!visible)}
            >
              Cache-moi
            </button>
            <button className="superButton" onClick={() => removeGame(id)}>
              Supprime-moi
            </button>
          </div>
          <Link to={"/games/" + id}>
            <img src={background_image} alt={name} />

            <h1>{name}</h1>
            <h3>{rating}</h3>
          </Link>
        </div>
      )}
    </>
  );
};

export default Game;
