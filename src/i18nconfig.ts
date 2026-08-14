import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import jaJson from "./locales/ja.json";
import { readStoredLanguage } from "./lib/language";

const ja: typeof en = jaJson;

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ja: { translation: ja },
  },
  lng: readStoredLanguage(),
  fallbackLng: "en",
  supportedLngs: ["en", "ja"],
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
