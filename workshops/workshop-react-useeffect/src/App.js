import './App.css';
import React from 'react';
import Clock from './components/Clock';

function App() {
  const [showClock, setShowClock] = React.useState(false);

  return (
    <div className="App">
      <button onClick={()=>setShowClock(!showClock)}>Show Clock</button>
      {showClock && <Clock />}
    </div>
  );
}

export default App;
