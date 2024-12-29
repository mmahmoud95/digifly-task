import { useTranslations } from "next-intl";
import React from "react";

const Footer = () => {
  const t = useTranslations("footer");
  return (
    <div className="font-tajwal font-medium">
      <p className="bg-secondary py-6 text-center text-sm leading-7 text-white text-opacity-60">
        {t("rights")} &copy; {t("companyName")}
      </p>
    </div>
  );
};

export default Footer;
