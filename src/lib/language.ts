import type { Language } from "../types";

export const LANGUAGE_STORAGE_KEY = "i18nextLng";

export const readStoredLanguage = (): Language => {
  const raw = localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (raw === "jp") {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, "ja");
    return "ja";
  }
  return raw === "ja" ? "ja" : "en";
};
