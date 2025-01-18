// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "@/locales/en.json";
import translationDK from "@/locales/da.json";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

export const resources = {
    en: translationEN,
    da: translationDK,
};

i18n
    .use(I18nextBrowserLanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: translationEN },
            da: { translation: translationDK },
        },
        fallbackLng: "en",
        debug: true,
    });

export default i18n;
