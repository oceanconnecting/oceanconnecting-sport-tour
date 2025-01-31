import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Poppins, Tajawal } from "next/font/google";
import BackToTopButton from "@/Components/BackToTopButton";

const poppins = Poppins({ subsets: ["latin"], weight: "300" });
const tajawal = Tajawal({ subsets: ["arabic"], weight: "400" });

export const metadata: Metadata = {
  title: "Ocean Sport Tours",
  description: "Ocean Sport Tours",
  keywords: "Ocean connecting tours, ocean sports, ocean sports tours, etc."
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { locale } = await params; // Attendre params avant d'extraire locale

  const messages = await getMessages();
  const validLocales = ["fr", "en", "ar", "du", "es"];

  if (!validLocales.includes(locale)) {
    notFound();
  }

  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={direction} suppressHydrationWarning>
      <body className={locale === "ar" ? tajawal.className : poppins.className}>
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