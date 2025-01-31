"use client";

import { motion, AnimatePresence } from "motion/react";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";


interface InfiniteTextChangeProps {
  textArray: string[];
}

function InfiniteTextChange({ textArray }: InfiniteTextChangeProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (textArray.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [textArray]);

  if (textArray.length === 0) {
    return <div>No text provided</div>;
  }
  const t = useTranslations("homepage.hero")
  return (
    <div className="h-10 lg:h-16 gap-3 w-auto overflow-hidden flex items-center justify-center">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentIndex}
          initial={{ y: "100%", opacity: 0, }}
          animate={{ y: "0%", opacity: 1, }}
          exit={{ y: "-100%", opacity: 0, }}
          transition={{ duration: 0.2 }}
          className="h-10 lg:h-16 w-fit text-center"
        >
          {textArray[currentIndex]}
        </motion.div>
      </AnimatePresence>
      <motion.h1 className=" h-10 lg:h-16" layout>{t("grand_title.end_txt")}</motion.h1>
    </div>
  );
}

export default InfiniteTextChange;
