import React, {useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import { getTranslatorForLanguage } from "../translations";
import LanguagesContext from "../contexts/LanguagesContext";
import ProverbsContext from "../contexts/ProverbsContext";

const ProverbsPage = () => {
  // Va chercher dans le contexte "LanguagesContext" la variable d'état currentLanguage
  const {currentLanguage} = useContext(LanguagesContext);
  // Va chercher dans le contexte "ProverbsContext" la variable d'état proverbs et la fonction fetchProverbs
  const {proverbs, fetchProverbs} = useContext(ProverbsContext); 

  // When the component is mounted => useEffect
  useEffect(()=>{
    // On appelle la fonction fetchProverbs et on lui passe en paramètre la variable currentLanguage 
    // qu'on récupère du context
    fetchProverbs(currentLanguage);
  },[currentLanguage]); // Les consignes nous disent : and when currentLanguage changes

  // TODO: change that to take the current language from Context instead of hardcoding "en"
  const t = getTranslatorForLanguage(currentLanguage);

  return (
    <>
      <Link to="/settings">{t("settings")}</Link>
      <h1>{t("proverbs")}</h1>
      <ul>
        {proverbs.map((res) => (
          <li key={res}>{res}</li>
        ))}
      </ul>
    </>
  );
};

export default ProverbsPage;
