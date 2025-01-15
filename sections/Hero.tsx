import Button from '@/Components/Button'
import { useLocale, useTranslations } from 'next-intl';
import { GiSevenPointedStar } from "react-icons/gi";

function Hero() {

    const t = useTranslations("homepage.hero")
    const locale = useLocale()

  return (
    <section className='bg-bannerImg bg-cover bg-center w-full h-screen'>
        <div className='flex flex-col bg-primary-100 px-4 pt-5 bg-opacity-70 bg-cover bg-center w-full h-screen'>
            <div className='w-full h-full flex flex-col justify-center items-center'>
                <div className='px-5 mb-3 py-2 gap-3 text-white border border-white rounded-full flex items-center justify-center'>
                    <GiSevenPointedStar />
                    <p className='text-sm lg:text-lg text-center'>{t("hero_tag")}</p>
                    <GiSevenPointedStar />
                </div>
                <h1 className="text-3xl text-center font-extrabold text-white sm:text-5xl">
                    {t("grand_title")}
                    <strong className="font-extrabold text-primary-800 sm:block">{t("highlighted")}</strong>
                </h1>

                <p className="mt-4 text-slate-200 sm:text-xl/relaxed max-w-xl text-center">
                    {t("descr")}
                </p>
                <div className='flex mt-5 gap-3 flex-col md:flex-row'>
                    <Button href={`/${locale}/booking`} variant='primary'>{t("book_button")}</Button>
                    <Button href={`/${locale}/contact`} variant='secondary'>{t("contact_button")}</Button>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default Hero