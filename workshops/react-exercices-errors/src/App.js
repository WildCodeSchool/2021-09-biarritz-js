import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CharacterList from './components/CharacterList';
import Home from './components/Home';
import Character from './components/Character';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = 'Exercices sur les erreurs';
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/breakingbad"
            exact
            element={<CharacterList theme="breakingbad" />}
          />
          <Route
            path="/bettercallsaul"
            exact
            element={<CharacterList theme="bettercallsaul" />}
          />
          <Route path="/character/:name" exact element={<Character />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
