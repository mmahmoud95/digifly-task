"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Locale } from "../../i18n/config";

import { setUserLocale } from "../../i18n/locale";

const LanguageBtn = ({ locale }: { locale: Locale }) => {
  const [language, setLanguage] = useState<Locale>(locale);

  function changeLanguage() {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  }

  // Use effect to safely call setUserLocale outside the render phase
  useEffect(() => {
    setUserLocale(language);
  }, [language]);

  const flagSrc = language === "en" ? "/egypt-flag.png" : "/united-kingdom.png";

  return (
    <button
      className="flex items-center gap-2 text-right text-sm font-medium"
      onClick={changeLanguage}
    >
      {language === "en" ? "العربية" : "En"}
      <Image
        src={flagSrc}
        width={24}
        height={24}
        alt={`Flag representing ${language} language`}
      />
    </button>
  );
};

export default LanguageBtn;
