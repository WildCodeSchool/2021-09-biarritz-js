import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  // variable d'état qui va contenir l'input utilisateur sur le filtre
  const [containsWord, setContainsWord] = useState('');
  // variable d'état qui va contenir les données
  const [users, setUsers]= useState([]);

  useEffect(()=>{
    // par défaut, demande tous les utilisateurs
    setUsers([]); // Pour indiquer qu'on est en chargement
    let axiosQuery = 'http://localhost:8000/api/users';
    // si le filtre n'est pas vide, rajoute le paramètre name
    if (containsWord !== ''){
      axiosQuery += `?name=${containsWord}`;
    }
    axios
    // envoie une requête de type GET via Axios
    .get(axiosQuery)
    // récupére le résultat et extrait la propriété data
    .then((result)=>result.data)
    // stocke le tableau de résultats dans la variable d'état users
    .then((data)=>setUsers(data))
    // en bas d'erreur, affiche dans la console
    .catch((error)=>console.log(error));
  },[containsWord]); // A chaque fois que containsWord est modifié, exécute le useEffect

  return (
    <div className="App">
      <input type="text" value={containsWord} placeholder="Entrez un prénom" onChange={(e) => setContainsWord(e.target.value)}/>
      {users.length === 0 ? 
      <div className="chargement">Chargement...</div> 
      : users.map((user)=> <div key={user.id}>{user.firstname}</div>)}
    </div>
  );
}

export default App;
