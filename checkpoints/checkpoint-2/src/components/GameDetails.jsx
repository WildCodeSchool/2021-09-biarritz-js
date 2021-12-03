import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./gameDetails.css";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

const GameDetails = () => {
  // récupère l'id depuis les paramètres des routes
  const { id } = useParams();
  const [gameDetails, setGameDetails] = useState();

  useEffect(() => {
    axios
      .get(`https://apis.wilders.dev/wild-games/games/${id}`)
      .then((response) => response.data)
      .then((data) => setGameDetails(data))
      .catch((err) => console.log(err));
  }, [id]);

  // affiche le détail du jeu une fois que ça a été récupéré
  return (
    <div
      className="game-details-div"
      style={
        gameDetails && {
          background: `linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.2)), url("${gameDetails.background_image}")`,
        }
      }
    >
      <Link className="links" to="/">
        <div className="return">Return</div>
      </Link>
      {gameDetails && (
        <div className="game-details">
          <h1>{gameDetails.name}</h1>
          <ReactPlayer
            className="video"
            url={gameDetails.clip.clip}
            volume={1}
            muted
            playing
            loop
          />
          <ul className="screenshots">
            {gameDetails &&
              gameDetails.short_screenshots.map((screenshot, index) => (
                <li key={index}>
                  <img
                    src={screenshot.image}
                    alt={`Screenshot of ${gameDetails.name}`}
                  />
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GameDetails;
