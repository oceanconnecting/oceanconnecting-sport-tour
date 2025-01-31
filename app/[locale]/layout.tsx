import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Poppins, Tajawal } from "next/font/google";
import BackToTopButton from "@/Components/BackToTopButton";

// Chargement des polices
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "600"] });
const tajawal = Tajawal({ subsets: ["arabic"], weight: ["400"] });

// Métadonnées
export const metadata: Metadata = {
  title: "Ocean Sport Tours",
  description: "Explore the best tours with us!",
};

async function fetchMessages(locale: string) {
  const validLocales = ["fr", "en", "ar"];
  if (!validLocales.includes(locale)) {
    notFound();
  }
  return getMessages({ locale });
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await fetchMessages(params.locale);
  const direction = params.locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={params.locale} dir={direction}>
      <body className={params.locale === "ar" ? tajawal.className : poppins.className}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <BackToTopButton />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
