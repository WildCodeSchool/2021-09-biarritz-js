import './App.css';

import React, { useContext } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

import AddressList from './components/AddressList';
import Home from './components/Home';
import Login from './components/Login';
import CurrentUserContext from './contexts/CurrentUser';

function App() {
  const { id, logout, admin } = useContext(CurrentUserContext);

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <NavLink end to="/">
            Home
          </NavLink>
          <NavLink end to="/address">
            Adresses
          </NavLink>
          {admin === true && <a href="http://localhost:3001/">Admin panel</a>}
          {id === 0 ? (
            <NavLink end to="/login">
              Se connecter
            </NavLink>
          ) : (
            <button className="logout" onClick={() => logout()}>
              Se déconnecter
            </button>
          )}
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/address" element={<AddressList onlyMine={id != 0} />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
