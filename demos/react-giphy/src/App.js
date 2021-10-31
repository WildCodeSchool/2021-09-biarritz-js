import './App.css';
import axios from 'axios';
import {useState} from 'react';
import SelectedGif from './components/SelectedGif';
import GifList from './components/GifList';

function App() {
  //variable d'état qui va contenir le theme saisi par l'utilisateur
  const [theme, setTheme] = useState('');
  //variable d'état qui va contenir le gif à afficher en zoom
  const [selectedGif, setSelectedGif] = useState();
  //variable d'état qui va contenir la liste des gif correspondant au theme sélectionné
  const [gifList, setGifList] = useState([]);

  const getGif = () =>{
    // api key donnée par giphy
    const apiKey = 'NUnQanKmmw6si8z2f2FSfD3hE9aBsVwa';
    // appel de l'api pour un theme donné, maximum 3 gif, en utilisant l'api key fournie
    axios
    .get(`http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${theme}`)
    .then((response)=> {
      //créer un tableau vide
      let tableauGifRandom = [];
      //aller récupérer un nombre aléatoire entre 0 et la taille de mon tableau
      //stocker dans mon tableau random le gif correspondant
      //le tout 4 fois
      for (let i=0;i<4;i++){
        const random = Math.floor(Math.random()*response.data.data.length);
        tableauGifRandom.push(response.data.data[random]);
      }     
      
      //affiche en gros la première
      setSelectedGif(tableauGifRandom[0].images.downsized_medium.url);
      tableauGifRandom.shift();
      //passe les autres à la liste de gif à afficher à droite
      setGifList(tableauGifRandom);

    })
  }

  // Va mettre dans la variable d'état Selected Gif l'url qu'on lui passe en paramètre
  const displaySelectedGif = (url) => {
    setSelectedGif(url);
  }


  return (
    <div className="App">
      <div className="inputs">
        <input type="text" placeholder="Your theme here" onChange={(e)=>setTheme(e.target.value)}/>
        <input type="button" value="Va chercher les gifs" onClick={()=>getGif()}/>
      </div>
      <div className="content">
        {/* Si un gif a été selectionné, l'affiche */}
        {selectedGif ? <SelectedGif theme={theme} url={selectedGif}/> : <div className="empty"></div>}
        {/* si un theme a été sélectionné, affiche 3 gifs */}
        <GifList gifList={gifList} theme={theme} selectGif={(url)=>displaySelectedGif(url)}/>
      </div>
    </div>
  );
}

export default App;
