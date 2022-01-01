import React, { useContext } from 'react';

import CurrentUserContext from '../contexts/CurrentUser';

const Home = () => {
  const { firstname } = useContext(CurrentUserContext);

  return (
    <div className="home">
      {firstname && <h2>Welcome, {firstname}</h2>}
      <p>Ce projet front doit être exécuté en parallèle du projet back et admin.</p>
      Il vous permettra d&apos;avoir un modèle d&apos;inspiration pour tous ces sujets :
      <ul>
        <li>React</li>
        <li>Context</li>
        <li>Cookie</li>
        <li>TypeScript</li>
        <li>Login/Logout</li>
        <li>Lien avec React Admin</li>
      </ul>
    </div>
  );
};

export default Home;
