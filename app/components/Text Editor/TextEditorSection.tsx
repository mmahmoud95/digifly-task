import React from "react";
import TextEditor from "./TextEditor";
import PartText from "../ui/PartText";
import { useTranslations } from "next-intl";

const TextEditorSection: React.FC = () => {
  const t = useTranslations("part3");

  return (
    <div className="mx-auto mb-20 w-[90%]">
      <PartText
        content={t("header.description")}
        headerText={t("header.title")}
      />
      <TextEditor />
    </div>
  );
};

export default TextEditorSection;
