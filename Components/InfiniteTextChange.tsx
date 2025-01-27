"use client";

import { motion, AnimatePresence } from "motion/react";
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

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [textArray]);

  if (textArray.length === 0) {
    return <div>No text provided</div>;
  }

  return (
    <div className="h-12 gap-4 w-full overflow-hidden flex items-center justify-center">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentIndex}
          initial={{ y: "100%", opacity: 0, }}
          animate={{ y: "0%", opacity: 1, }}
          exit={{ y: "-100%", opacity: 0, }}
          transition={{ duration: 0.25 }}
          className="h-12 w-fit text-center"
        >
          {textArray[currentIndex]}
        </motion.div>
      </AnimatePresence>
      <motion.h1 layout>with</motion.h1>
    </div>
  );
}

export default InfiniteTextChange;
