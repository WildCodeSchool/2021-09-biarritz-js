import './App.css';
import Joke from './components/Joke';
import blagues from './data';

function App() {
  return (
    <div className="App">
      {blagues.map((blague, index)=>
        <Joke key={index} blague={blague.setup} chute={blague.delivery}/>
      )}
        
    </div>
  );
}

export default App;
