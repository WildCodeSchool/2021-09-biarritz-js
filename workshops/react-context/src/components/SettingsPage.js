import React from "react";
import { Link } from "react-router-dom";
import { getTranslatorForLanguage } from "../translations";
import LanguagesContext from "../contexts/LanguagesContext";

const SettingsPage = () => {
  // on récupère dans la boite LanguagesContext la variable currentLanguage et son setter, setCurrentLanguage
  const {currentLanguage, setCurrentLanguage} = React.useContext(LanguagesContext);
  // TODO: change that to take the current language from Context instead of hardcoding "en"
  const t = getTranslatorForLanguage(currentLanguage);

  return (
    <>
      <Link to="/">{t("go_back")}</Link>
      <h1>{t("settings")}</h1>
      <label htmlFor="language">{t("app_lang")} : </label>
      <select
        id="language"
        name="language"
        defaultValue={currentLanguage} // TODO: get the default language from context
        onChange={(event) => setCurrentLanguage(event.target.value)} // Au change, modifier la variable d'état
      >
        <option value="en">en</option>
        <option value="pt">pt</option>
      </select>
    </>
  );
};

export default SettingsPage;
