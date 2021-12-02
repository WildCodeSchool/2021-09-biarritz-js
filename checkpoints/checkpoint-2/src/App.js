import "./App.css";
import Header from "./components/Header";
import GameList from "./components/GameList";
import GameDetails from "./components/GameDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header name="react-games" />
      {/* Déclare à l'application qu'on va mettre en place des routes */}
      <BrowserRouter>
        <Routes>
          {/* Si on arrive à la racine de l'application, affiche le composant GameList */}
          <Route path="/" element={<GameList />} />
          {/* Si on arrive sur /games/id, afficher le composant GameDetails */}
          <Route path="/games/:id" element={<GameDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
