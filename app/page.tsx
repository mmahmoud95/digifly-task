import { getLocale } from "next-intl/server";
import Header from "./components/Header/Header";
import MapSection from "./components/Map/MapSection";
import TextEditorSection from "./components/Text Editor/TextEditorSection";
import { Locale } from "./i18n/config";

export default async function Home() {
  const locale = (await getLocale()) as Locale;

  return (
    <div>
      <Header />
      <MapSection locale={locale} />
      <TextEditorSection />
    </div>
  );
}
