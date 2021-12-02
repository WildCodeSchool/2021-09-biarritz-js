import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

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

  // on peut afficher d'autres infos ici, je n'ai mis que le slug
  return <>{gameDetails && gameDetails.slug}</>;
};

export default GameDetails;
