import React from "react";
import Logo from "./Logo";
import LanguageBtn from "./LanguageBtn";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Locale } from "@/app/i18n/config";

const Navbar: React.FC<{ locale: Locale }> = ({ locale }) => {
  const t = useTranslations("navbar");
  return (
    <div className="bg-[#F2F0F8]">
      <div className="mx-auto flex w-[90%] items-center justify-between bg-[#F2F0F8] py-4">
        <div className="w-[188px]">
          <Logo />
        </div>

        <nav className="hidden w-full justify-start md:flex">
          <ul className="md flex gap-4">
            <li>
              <Link href="#" className="px-4 font-semibold text-primary">
                {t("home")}
              </Link>
            </li>
            <li>
              <Link href="#" className="px-4 hover:text-primary">
                {t("categories")}
              </Link>
            </li>
            <li>
              <Link href="#" className="px-4 hover:text-primary">
                {t("contact")}
              </Link>
            </li>
            <li>
              <Link href="#" className="px-4 hover:text-primary">
                {t("about")}
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex w-[188px] justify-end">
          <LanguageBtn locale={locale} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
