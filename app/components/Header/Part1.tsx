import From from "./Form";
import PartText from "../ui/PartText";
import { useTranslations } from "next-intl";
import Results from "./Results";
import React from "react";

const Part1: React.FC = () => {
  const t = useTranslations("part1");
  return (
    <div className="mx-auto w-[90%]">
      <PartText
        headerText={t("header.title")}
        content={t("header.description")}
      />
      <div className="xl:gap-36 md:gap-8  pb-24 pt-16 lg:flex justify-between">
        {" "}
        <From />
        <Results />
      </div>
    </div>
  );
};

export default Part1;
