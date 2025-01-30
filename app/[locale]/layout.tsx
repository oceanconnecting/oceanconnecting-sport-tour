import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Poppins, Tajawal } from "next/font/google";
import BackToTopButton from "@/Components/BackToTopButton";

// ✅ Load Google Fonts
const poppins = Poppins({ subsets: ["latin"], weight: "300" });
const tajawal = Tajawal({ subsets: ["arabic"], weight: "400" });

// ✅ Define Metadata
export const metadata: Metadata = {
  title: "Ocean Sport Tours",
  description: "Ocean Sport Tours",
};

// ✅ Fetch Messages (Fix for Async Issue)
async function fetchMessages(locale: string) {
  const validLocales = ["fr", "en", "ar"];
  if (!validLocales.includes(locale)) {
    notFound();
  }
  return await getMessages({ locale });
}

// ✅ Fix: `params` must be awaited before destructuring
export default async function RootLayout({ children, params }: { children: React.ReactNode; params: { locale: string } }) {
  const { locale } = params; // ✅ Fix: Destructure inside the function
  const messages = await fetchMessages(locale);
  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={direction}> {/* ✅ NO EXTRA SPACE HERE */}
      <body className={locale === "ar" ? tajawal.className : poppins.className}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <BackToTopButton />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
