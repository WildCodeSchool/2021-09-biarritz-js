import Theme from './Theme';
import { Link } from "react-router-dom";

const Home = () => {

    return(
        <>
            <Link to="/breakingbad">
                <Theme image='./breaking-bad.jpg' name="Breaking Bad"/>  
            </Link>
            <Link to="/bettercallsaul">
                <Theme image='./better-call-saul.jpeg' name="Better Call Saul"/>  
            </Link>
            <Link to="/character/random">
                <Theme image='./random.jpg' name="Random"/>   
            </Link>
        </>
    )
}

export default Home;