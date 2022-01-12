import React, { useContext } from 'react';
import CurrentTestContext from '../contexts/CurrentTest';

import CurrentUserContext from '../contexts/CurrentUser';

const Home = () => {
  const { firstname } = useContext(CurrentUserContext);
  const { numberClick } = useContext(CurrentTestContext);

  return (
    <div className="home">
      {firstname && <h2>Bienvenue, {firstname}</h2>}
      {numberClick > 0 && <h3>Vous avez cliqué {numberClick} fois</h3>}
      <p>Ce projet front doit être exécuté en parallèle du projet back et admin.</p>
      Il vous permettra d&apos;avoir un modèle d&apos;exemple pour tous ces sujets :
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
