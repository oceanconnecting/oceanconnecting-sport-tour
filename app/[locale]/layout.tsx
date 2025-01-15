import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import { NextIntlClientProvider, useLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Poppins, Tajawal } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: "300"
})

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: "400"
})

export const metadata: Metadata = {
  title: "Ocean Sport Tours",
  description: "Ocean Sport Tours",
};

export default async function RootLayout({
  children,
  params: {locale},
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  const validLocales = ["fr","en", "ar"];
  if (!validLocales.includes(locale)) {
    notFound();
  }

  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <NextIntlClientProvider messages={messages}>
      <html lang={locale} dir={direction}>
        <body
          className={locale === "ar" ? tajawal.className : poppins.className}>
          <Navbar/>
          {children}
          <Footer/>
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
