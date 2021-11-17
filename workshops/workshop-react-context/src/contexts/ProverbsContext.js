// TODO: create the Context here
import {createContext, useState} from 'react';

// on crée la boite ProverbsContext
const ProverbsContext = createContext();

export default ProverbsContext;

export const ProverbsContextProvider = ({children}) => {
    // On met ici les objets qu'on va déposer dans la boite ProverbsContext
    const [proverbs, setProverbs] = useState([]);
    const fetchProverbs = (language) => {
        console.log(`fetching "${language}" proverbs`);
        fetch(`/pretend-api/results-${language}.json`)
        .then((res) => res.json())
        .then((data) => setProverbs(data.results));
    };


    return(
        // Fournit à ma boite ProverbsContext la variable proverbs et la fonction fetchProverbs
        <ProverbsContext.Provider value={{proverbs, fetchProverbs}}> 
            {children} 
            {/* et à tous les enfants de mon composant */}
        </ProverbsContext.Provider>
    )
}