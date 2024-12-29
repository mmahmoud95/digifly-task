import React, { Suspense } from "react";
import ResultsUsers from "./ResultUsers";
import Loader from "../ui/Loader";
import { useTranslations } from "next-intl";
import { API_URL } from "@/app/helpers/constants";
import { User } from "@/app/helpers/types";

const Results = async () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const t = useTranslations("part1");
  const AsyncResults = async () => {
    const users: User[] = await getData();
    return <ResultsUsers users={users} />;
  };

  return (
    <div className="mt-8 w-full md:mt-8 lg:mt-0 lg:w-[625px]">
      <h2 className="mb-4 text-xl font-bold text-secondary">
        {t("results.results")} :
      </h2>
      <div className="rounded bg-white shadow-sm">
        <div className="flex h-16 border-b border-black50 bg-black20 p-4 text-xs font-semibold text-black400 md:text-sm">
          <p className="w-1/5">{t("form.form-inputs.firstName")}</p>
          <p className="w-1/5">{t("form.form-inputs.lastName")}</p>
          <p className="w-1/5">{t("form.form-inputs.phone")}</p>
          <p className="w-2/5 pl-3">{t("form.form-inputs.email")}</p>
        </div>
        <div className="relative">
          <Suspense fallback={<Loader />}>
            <AsyncResults />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Results;
async function getData() {
  const response = await fetch(`${API_URL}/user-informations`);
  if (!response.ok) {
    throw new Error("Something went wrong!");
  }
  return await response.json();
}
