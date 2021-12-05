import {useState, useEffect} from 'react';
import axios from 'axios';
import styles from './CharacterList.module.css';
import { Link } from "react-router-dom";

const CharacterList = ({theme}) => {

    const [characterList, setCharacterList] = useState();

    useEffect(()=>{
        let url = 'https://www.breakingbadapi.com/api/characters';
        url+= (theme === 'breakingbad' ? '?category=Breaking+Bad' : '?category=Better+Call+Saul');
        
        axios
        .get(url)
        .then((response)=>response.data)
        .then((data)=>setCharacterList(data))
        .catch((error)=>console.log(error));
    },[]);

    return (
        <div>
            {characterList && characterList.map((character)=> 
                <Link to={"/character/"+character.name} key={character.char_id} >
                    <img className={styles.character_img} src={character.img} alt={character.name}/>
                </Link>
            )}
        </div>
    )
}

export default CharacterList;