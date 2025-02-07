import { Metadata } from "next"
import ContactForm from "./contactForm"
import { getTranslations } from "next-intl/server"

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({
    namespace: 'contact',
    locale: params.locale
  });
  return {
     title: t('title'),
  }
}

function page() {
  return (
    <div>
      <ContactForm />
    </div>
  )
}

export default page