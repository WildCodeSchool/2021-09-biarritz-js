import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';

function App() {
  const [quantity, setQuantity]= React.useState(1);
  const [total, setTotal] = React.useState(2);

  useEffect(()=>{
    setTotal(quantity*2);
  },[quantity]);

  return (
    <div className="App">
      <div className="container">
        Pomme
        <input type="number" value={quantity} onChange={(e)=>setQuantity(e.target.value)}/>
        2€/kg
      </div>
      <div className="total">Votre total est de {total}€</div>
    </div>
  );
}

export default App;
