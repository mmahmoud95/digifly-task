import { useTranslations } from "next-intl";
import Link from "next/link";

export default function NotFound() {
  const t = useTranslations("not-found");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="rounded-lg bg-white p-8 text-center shadow-lg">
        <h2 className="mb-4 text-4xl font-bold text-primary">{t("title")}</h2>
        <p className="mb-6 text-lg text-secondary">{t("message")}</p>
        <Link
          href="/"
          className="rounded-lg bg-primary px-6 py-3 font-medium text-white transition hover:bg-secondary"
        >
          {t("link")}
        </Link>
      </div>
    </div>
  );
}
