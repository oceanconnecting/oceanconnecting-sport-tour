import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import { NextIntlClientProvider, useLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Poppins, Tajawal } from 'next/font/google'
import BackToTopButton from "@/Components/BackToTopButton";

const poppins = Poppins({
  subsets: ['latin'],
  weight: "300"
})

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: "400"
})


let is_arabic;

export const metadata: Metadata = {
  title: "Ocean Sport Tours",
  
  description: "Ocean Sport Tours",
  keywords: "Ocean connecting tours, ocean sports, ocean sports tours, Formation Agadir, Formation Professionnelle Agadir, sport, tours, kids, fun, Apprentissage des Langues Agadir, Formation Agent Aéroport, Formation Agent d’Enregistrement, Formation DJ Agadir, Formation Soins Infirmiers, Placement Professionnel Agadir, Recrutement International, Recrutement Agadir, Assistance aux Documents, Services de Soutien à l’Emploi, Domiciliation Entreprise Agadir, Domiciliation d’Entreprise, Formation Développement Web, Développement d’Applications Agadir, Nettoyage de Façade Agadir, Nettoyage de Fenêtres Agadir, Revêtement Extérieur Agadir, Services de Bardage Agadir, Nettoyage de Panneaux Solaires, Entretien des Panneaux Solaires Agadir, Services Extérieurs Agadir, Solutions de Développement Personnalisées, Cours de Langues Agadir, Formation Infirmière Agadir, Formation Service Client, Formation aux Procédures de Sécurité, Formation en Gestion d'Événements, Croissance Professionnelle Agadir, Soutien aux Carrières Internationales, Formation Professionnelle Personnalisée, Opportunités de Carrière Agadir, Formation à la Promotion en Ligne, Création d'Entreprise Agadir, Solutions de Formation Complètes, Développement de Compétences Agadir, Meilleure Formation à Agadir, Cours Professionnels Avancés, Soutien Professionnel Expert "
};



export default async function RootLayout(
  
  {
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
          <BackToTopButton/>
          {children}
          <Footer/>
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
