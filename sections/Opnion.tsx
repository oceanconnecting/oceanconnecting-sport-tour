"use client";

import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import Tag from "@/Components/Tag";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { useLocale, useTranslations } from "next-intl";

interface CardProps {
    image: string;
    name: string;
    descr: string;
    starRate: number;
}

function Card({ image, name, descr, starRate }: CardProps) {
    return (
        <div className="bg-background-50 shadow-md p-6 min-h-64 w-[500px] rounded-lg flex-shrink-0">
            <div className="flex gap-4 items-center">
                <Image className="w-16 h-16 shadow-md rounded-full object-cover" src={image} width={300} height={300} alt={name} />
                <h1 className="text-xl font-semibold">{name}</h1>
            </div>
            <div className="mt-4 flex gap-4 justify-center w-fit items-center font-semibold">
                <div className="flex gap-2">
                    {Array.from({ length: starRate }).map((_, i) => (
                        <FaStar key={i} className="text-yellow-500" />
                    ))}
                    {Array.from({ length: 5 - starRate }).map((_, i) => (
                        <FaStar key={i} className="text-text-200" />
                    ))}
                </div>
            </div>
            <div className="flex-1 mt-4 text-text-800">{descr}</div>
        </div>
    );
}

function Opinion() {

    const t = useTranslations("homepage.opinion")
    const locale = useLocale()
    const isArabic = locale == "ar"
    const opinions = [
        { name: t("opinions.opinion_1.name"), descr: t("opinions.opinion_1.opinion"), starRate: 5, image: "/Opinion/f1.jpg" },
        { name: t("opinions.opinion_2.name"), descr: t("opinions.opinion_2.opinion"), starRate: 4, image: "/Opinion/f2.jpg" },
        { name: t("opinions.opinion_3.name"), descr: t("opinions.opinion_3.opinion"), starRate: 3, image: "/Opinion/f3.jpg" },
        { name: t("opinions.opinion_4.name"), descr: t("opinions.opinion_4.opinion"), starRate: 5, image: "/Opinion/f4.jpg" },
        { name: t("opinions.opinion_5.name"), descr: t("opinions.opinion_5.opinion"), starRate: 5, image: "/Opinion/f5.jpg" },
        { name: t("opinions.opinion_6.name"), descr: t("opinions.opinion_6.opinion"), starRate: 4, image: "/Opinion/f6.jpg" },
        { name: t("opinions.opinion_7.name"), descr: t("opinions.opinion_7.opinion"), starRate: 5, image: "/Opinion/f7.jpg" },
    ];

  const FAST_DURATION = 20;
  const SLOW_DURATION = 150;

  const [duration, setDuration] = useState(FAST_DURATION);
  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    let finalPosition = isArabic ? (width / 2 - 8) : (-width / 2 - 8);

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [rerender, xTranslation, duration, width]);
    return (
        <section className="bg-background-100">
            <div className="flex flex-col [mask-image:linear-gradient(to_right,rgba(0,0,0,0)_2%,rgba(0,0,0,1)_4%,rgba(0,0,0,1)_96%,rgba(0,0,0,0)_98%)] overflow-hidden items-center p-6 w-full h-fit">
                <Tag>{t("title")}</Tag>
                <div className="overflow-hidden mt-12 w-full">
                <motion.div
                    className="flex gap-6 w-max flex-nowrap"
                    style={{ x: xTranslation }}
                    ref={ref}
                    onHoverStart={() => {
                    setMustFinish(true);
                    setDuration(SLOW_DURATION);
                    }}
                    onTouchStart={() => {
                        setMustFinish(true);
                        setDuration(SLOW_DURATION);
                    }}
                    onTouchEnd={() => {
                        setMustFinish(true);
                        setDuration(FAST_DURATION);
                    }}
                    onHoverEnd={() => {
                    setMustFinish(true);
                    setDuration(FAST_DURATION);
                    }}    
                    >
                        {[...opinions, ...opinions].map((opinion, idx) => (
                            <Card key={idx} {...opinion} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Opinion;