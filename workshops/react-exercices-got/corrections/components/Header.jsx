import axios from "axios";
import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    const [housesList, setHousesList] = useState();

    useEffect(()=>{
        axios
        .get('https://game-of-thrones-quotes.herokuapp.com/v1/houses')
        .then((response)=>response.data)
        .then((data)=>setHousesList(data));
    },[]);

    return(
        <ul className="houses">
            <Link to="/house/all">
                <li className="house__link">All houses</li>
            </Link>
            {housesList && housesList.map((house, index)=>
                <Link key={index} to={'/house/' + house.slug}>
                    <li className="house__link">{house.name}</li>
                </Link>
            )}
        </ul>
    )
}

export default Header;