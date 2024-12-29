"use client";

import { useTranslations } from "next-intl";
import React from "react";

const SubmitBtn: React.FC<{
  loading: boolean;
}> = ({ loading }) => {
  const t = useTranslations("part1.form.form-inputs");
  return (
    <button
      disabled={loading}
      className={`h-[54px] w-full rounded-sm bg-primary font-bold text-white ${loading && "cursor-wait"}`}
    >
      {loading ? t("submitted") : t("send")}
    </button>
  );
};

export default SubmitBtn;
