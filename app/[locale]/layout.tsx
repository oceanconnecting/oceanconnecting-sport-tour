import "./globals.css";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { redirect } from "next/navigation";
import Providers from "@/Components/Providers";
import { Poppins, Tajawal } from "next/font/google";
import BackToTopButton from "@/Components/BackToTopButton";
import { GoogleAnalytics } from "@next/third-parties/google";
import WhatsappContact from "@/Components/WhatsappContact";
import OfflineChat from "@/Components/OfflineChat";
// import { Toaster } from "@/Components/ui/sonner"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const poppins = Poppins({ subsets: ["latin"], weight: "400" });
const tajawal = Tajawal({ subsets: ["arabic"], weight: "500" });

export async function generateMetadata({
  params,
}: Readonly<{
  params: { locale: string };
}>) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: {
      default: t("title"),
      template: `%s | ${t("title")}`,
    },
    description: t("description"),
    keywords: t("keywords"),
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { locale } = await params;

  const messages = await getMessages();
  const validLocales = ["fr", "en", "ar", "es", "de"];

  if (!validLocales.includes(locale)) {
    redirect("/en");
  }

  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={direction} suppressHydrationWarning>
      <body className={locale === "ar" ? tajawal.className : poppins.className}>
        <GoogleAnalytics gaId={`${process.env.GOOGLE_ANALYTICS_ID}`} />
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <OfflineChat />
            <Navbar />
            <BackToTopButton />
            <WhatsappContact />
            <main>{children}</main>
              <ToastContainer /> 
           

            <Footer />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
