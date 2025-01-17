"use client"
import { PiBeachBallDuotone } from "react-icons/pi";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

function InfiniteText() {
    const t = useTranslations("homepage.text_ticker")
    const quotes: string[] = [
        t("text_1"),
        t("text_2"),
        t("text_3"),
        t("text_4"),
        t("text_5"),
        t("text_6"),
        t("text_7"),
        t("text_8"),
        t("text_9"),
        t("text_10"),
    ];


  return (
    <section id="infinteTicker">
        <div className="overflow-x-clip my-16 flex bg-secondary-950">
        <motion.div
        animate={
            {x: "-50%"}
        }
        whileHover={{
            
        }}
        transition={{
            duration:100,
            ease:"linear",
            repeat:Infinity
        }}
        className="flex flex-none justify-between overflow-hidden">
            {Array.from({length : 2}).map((_, i) => (
                quotes.map((quote, index) => (
                    <div key={index} className="py-4 flex items-center">
                        <h1 className="text-primary-100 sora text-3xl w-full font-bold text-nowrap">{quote}</h1>
                        <PiBeachBallDuotone className="mx-8 text-primary-200 text-5xl"/>
                    </div>
                ))
            ))}
            
        </motion.div>
        </div>
    </section>
  )
}

export default InfiniteText