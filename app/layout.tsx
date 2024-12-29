import type { Metadata } from "next";
import { Poppins, Tajawal } from "next/font/google";
import "./globals.css";
import Footer from "./components/ui/Footer";
import StoreProvider from "./StoreProvider";
import Navbar from "./components/ui/Navbar";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const poppins: NextFontWithVariable = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const tajwal: NextFontWithVariable = Tajawal({
  weight: ["500"],
  variable: "--font-tajwal",
  subsets: ["latin"],
});

// Providing all messages to the client
// side is the easiest way to get started

export const metadata: Metadata = {
  title: "Digifly Task",
  description:
    "This task is designed to assess your capability to create a dynamic and responsive web application using Typescript, Redux or Redux Toolkit, NextJS, TailwindCSS, Leaflet, and i18next. You will be building a multi-part application that interacts with a provided Strapi API",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();
  const direction = locale === "ar" ? "rtl" : "ltr";
  return (
    <html lang={locale} dir={direction}>
      <body className={`${poppins.variable} ${tajwal.variable}`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Navbar locale={locale as "ar" | "en"} />
          <StoreProvider>{children}</StoreProvider>
          <Footer />{" "}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
