import "./App.css";
import { HashRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import CharacterList from "./components/CharacterList";
import Home from "./components/Home";
import Character from "./components/Character";

function App() {
  useEffect(() => {
    document.title = "Exercices sur les erreurs";
  }, []);

  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/breakingbad"
            exact
            element={<CharacterList theme="breakingba" />}
          />
          <Route
            path="/bettercallsaul"
            exact
            element={<CharacterList theme="bettercallsaul" />}
          />
          <Route path="/character/:id" exact element={<CharacterList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
