import { US, DK } from "country-flag-icons/react/3x2";
import React from "react";
import { useTranslation } from "react-i18next";

export default function LangSelect() {
  const { i18n } = useTranslation()
  
  const changeLanguage = (lang: 'en' | 'da') => i18n.changeLanguage(lang)

  const btnStyle = 'w-12 h-8 rounded-lg overflow-hidden';
    
  return (
    <div className="w-fit h-fit flex flex-row gap-4 p-2 border-2 border-red-400 rounded-xl">
      <button className={btnStyle} onClick={() => changeLanguage("en")}>
        <US />
      </button>
      <button className={btnStyle} onClick={() => changeLanguage("da")}>
        <DK />
      </button>
    </div>
  );
}
