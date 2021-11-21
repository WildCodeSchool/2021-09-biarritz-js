// TODO: create the Context here
import {createContext, useState} from 'react';

// on crée la boite LanguagesContext
const LanguagesContext = createContext();

export default LanguagesContext;

export const LanguagesContextProvider = ({children}) => {
  // On met ici les objets qu'on va déposer dans la boite LanguagesContexts
  const [currentLanguage, setCurrentLanguage] = useState("en");

    return(
        // Fournit à ma boite LanguagesContext la variable currentLanguage et la fonction 
        // setCurrentLanguage pour en modifier la valeur
        <LanguagesContext.Provider value={{currentLanguage, setCurrentLanguage}}>
            {children}
            {/* et à tous les enfants de mon composant */}
        </LanguagesContext.Provider>

    )
}