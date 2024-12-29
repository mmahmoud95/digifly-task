"use client";
import React from "react";
import PartText from "../ui/PartText";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import { Locale } from "@/app/i18n/config";

const MapWithNoSSR = dynamic(() => import("./Map").then((mod) => mod.Map), {
  ssr: false,
});

const MapSection: React.FC<{ locale: Locale }> = ({ locale }) => {
  const t = useTranslations("part2");
  return (
    <>
      <div className="mx-auto mb-20 flex w-[90%]">
        <PartText
          content={t("header.description")}
          headerText={t("header.title")}
        />
      </div>
      <MapWithNoSSR
        locale={locale}
        center={{ lng: 31.3368448822089, lat: 30.06161013929119 }}
        locations={[{ lng: 31.3368448822089, lat: 30.06161013929119 }]}
      />
    </>
  );
};

export default MapSection;
