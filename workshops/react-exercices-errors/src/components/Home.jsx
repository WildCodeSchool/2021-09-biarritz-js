import Theme from './Theme';
import { Link } from 'react-router-dom';
import bcs from '../images/better-call-saul.jpeg';
import bb from '../images/breaking-bad.jpg';
import random from '../images/random.jpg';

const Home = () => {
  return (
    <>
      <Link to="/breakingbad">
        <Theme image={bb} name="Breaking Bad" />
      </Link>
      <Link to="/bettercallsaul">
        <Theme image={bcs} name="Better Call Saul" />
      </Link>
      <Link to="/character/random">
        <Theme image={random} name="Random" />
      </Link>
    </>
  );
};

export default Home;
