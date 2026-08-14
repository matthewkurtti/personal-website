import { useEffect, useState } from "react";
import i18n from "../i18nconfig";
import { LANGUAGE_STORAGE_KEY, readStoredLanguage } from "../lib/language";
import type { Language } from "../types";

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>(readStoredLanguage);

  useEffect(() => {
    i18n.changeLanguage(language).then(() => {
      document.documentElement.lang = language;
      document.title = i18n.t("common.page-title");

      const description = document.querySelector('meta[name="description"]');
      description?.setAttribute("content", i18n.t("common.page-description"));
    });
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [language]);

  const changeLanguage = (next: Language) => {
    setLanguage(next);
  };

  return { language, changeLanguage };
};
