import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GoT from './components/GoT';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Header/>  
          <Routes>   
            <Route path="/" element={<GoT/>}/>  
            <Route path="/house/:housename" exact element={<GoT/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
