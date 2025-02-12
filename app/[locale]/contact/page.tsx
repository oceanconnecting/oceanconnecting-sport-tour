import { Metadata } from "next";
import ContactForm from "./contactForm";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    namespace: "contact",
    locale: locale,
  });
  return {
    title: t("title"),
  };
}

function page() {
  return (
    <div>
      <ContactForm />
    </div>
  );
}

export default page;
