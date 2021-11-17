const translations = {
    en: {
      proverbs: "Proverbs",
      settings: "Settings",
      app_lang: "Language of the app",
      go_back: "Go back"
    },
    pt: {
      proverbs: "Provérbios",
      settings: "Configurações do aplicativo",
      app_lang: "Idioma do aplicativo",
      go_back: "Volte"
    }
  };
  
  export const getTranslatorForLanguage = lang => {
    return key => translations[lang][key];
  };
  
  export default translations;
  