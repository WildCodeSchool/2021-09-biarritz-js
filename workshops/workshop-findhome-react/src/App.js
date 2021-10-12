import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Card from './components/Card';
import './App.css';

const maisons = [
  {
    image:
      'https://st.hzcdn.com/simgs/pictures/piscines/superbe-villa-traditionnelle-et-contemporaine-benjamin-maxant-img~9db193e3046f0f67_4-9137-1-0858a59.jpg',
    title: 'Superbe villa',
    price: '2.000.000 rp',
  },
  {
    image:
      'https://www.maisonsclairlogis.fr/wp-content/uploads/maison-en-l-lachat_enduit-g50.jpg',
    title: 'Jolie maison',
    price: '600.000 rp',
  },
  {
    image:
      'https://manager.groupe-bdl.com/web-content/img/modeles/2021/04/modele-de-maison-plain-pied-94-facade-avant-fa82eb3-1200x820.jpg',
    title: 'Modeste demeure',
    price: '400.000 rp',
  },
  {
    image:
      'https://media.sport-decouverte.com/weekend-insolite/produit/27433/maxi/nuit-en-cabane-perchee-prestige-pres-de-bordeaux.jpg',
    title: 'Cabane dans les bois',
    price: '100.000 rp',
  },
  {
    image:
      'https://www.construction-chalets-bois.com/photos/photo-hd-prod-roulotte-bois-aquitaine.jpg',
    title: 'Roulotte',
    price: '20.000 rp',
  },
];

const App = () => {
  return (
    <div class="app">
      <NavBar />
      <div className="container">
        {maisons.map((maison) => (
          <Card {...maison} />
        ))}
      </div>
    </div>
  );
};
export default App;
