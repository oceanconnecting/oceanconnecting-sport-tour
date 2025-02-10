"use client";

import Button from '@/Components/Button';
import { FlipWords } from "@/Components/flip-words.tsx";
import { motion } from 'motion/react';
import { useLocale, useTranslations } from 'next-intl';
import { GiSevenPointedStar } from "react-icons/gi";

function Hero() {
    const t = useTranslations("homepage.hero");
    const locale = useLocale();
    const isArabic = locale === "ar";
    const textList = [t("grand_title.txt_1"), t("grand_title.txt_2"), t("grand_title.txt_3")];

    return (
        <section id='main' className='w-full h-screen relative'>
            <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-0">
                <source src="/herovideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className='absolute top-0 left-0 w-full h-full bg-[#080f12] bg-opacity-85 z-10'></div>
            <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className='flex flex-col px-4 pt-5 w-full h-full relative z-20'>
                <div className='w-full h-full flex flex-col justify-center items-center'>
                    <div className='px-5 mb-3 py-2 gap-3 text-white backdrop-blur-lg bg-white/10 border border-white/10 rounded-full flex items-center justify-center'>
                        <GiSevenPointedStar />
                        <p className='text-sm lg:text-lg text-center'>{t("hero_tag")}</p>
                        <GiSevenPointedStar />
                    </div>
                    <h1 className="text-4xl text-center mt-5 font-extrabold text-white sm:text-6xl">
                        <FlipWords duration={2000} isArabic={isArabic} words={textList} />{t("grand_title.end_txt")}
                        <strong className="font-extrabold text-sky-200 sm:block"> {t("highlighted")}</strong>
                    </h1>
                    <p className="mt-6 text-slate-300 sm:text-lg/relaxed max-w-4xl text-center">
                        {t("descr")}
                    </p>
                    <div className='flex mt-7 gap-3 flex-col md:flex-row'>
                        <Button href='/#about' variant='primary'>{t("start_button")}</Button>
                        <Button href={`/${locale}/contact`} variant='secondary'>{t("contact_button")}</Button>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export default Hero;