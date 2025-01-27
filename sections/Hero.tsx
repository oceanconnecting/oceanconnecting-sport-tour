"use client"

import Button from '@/Components/Button'
import InfiniteTextChange from '@/Components/InfiniteTextChange';
import { useLocale, useTranslations } from 'next-intl';
import { GiSevenPointedStar } from "react-icons/gi";
import { motion } from "motion/react";

function Hero() {

    const t = useTranslations("homepage.hero")
    const locale = useLocale()

    const textList = ['Learn', 'Travel', 'Grow']

  return (
    <section id='main' className='w-full h-screen relative'>
        <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-[-1]">
            <source src="/8925443-hd_1920_1080_25fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div className='flex flex-col bg-primary-100/60 px-4 pt-5 w-full h-full'>
            <div className='w-full h-full flex flex-col justify-center items-center'>
                <div className='px-5 mb-3 py-2 gap-3 text-white backdrop-blur-lg bg-white/10 border border-white/10 rounded-full flex items-center justify-center'>
                    <GiSevenPointedStar />
                    <p className='text-sm lg:text-lg text-center'>{t("hero_tag")}</p>
                    <GiSevenPointedStar />
                </div>
                <h1 className="text-3xl text-center font-extrabold text-white sm:text-5xl">
                    <InfiniteTextChange textArray={textList}/>
                    <strong className="font-extrabold text-primary-800 sm:block">{t("highlighted")}</strong>
                </h1>
                <p className="mt-4 text-slate-200 sm:text-xl/relaxed max-w-xl text-center">
                    {t("descr")}
                </p>
                <div className='flex mt-5 gap-3 flex-col md:flex-row'>
                    <Button href={`/${locale}/contact`} variant='primary'>{t("contact_button")}</Button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
