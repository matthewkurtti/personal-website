import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import jp from './locales/jp.json';

i18n
    .use(initReactI18next)
    .init({
    resources: {
        en: { translation: en },
        jp: { translation: jp },
    },
    lng: localStorage.getItem('i18nextLng') || 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
    });

export default i18n;