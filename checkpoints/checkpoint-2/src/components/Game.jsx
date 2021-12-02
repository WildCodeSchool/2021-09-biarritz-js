import "./game.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Game = ({ id, name, rating, background_image, released, removeGame }) => {
  //méthode d'eric pour rendre invisible les jeux
  const [visible, setVisible] = useState(true);

  return (
    <li>
      {/* méthode 1 */}
      {visible && (
        <div className="game">
          {/* méthode 1 */}
          <button onClick={() => setVisible(!visible)}>Cache-moi</button>
          <button onClick={() => removeGame(id)}>Supprime-moi</button>
          <h1>{name}</h1>
          <h2>{released}</h2>
          <Link to={"/games/" + id}>
            <img src={background_image} alt={name} />
          </Link>
          <h2>{rating}</h2>
        </div>
      )}
    </li>
  );
};

export default Game;
