"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface CarouselProps {
  images: string[];
}

export default function Carousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dir, setDir] = useState(0)

  const handlePrevious = () => {
    setDir(-1)
    setCurrentIndex((prevIndex) =>
      (prevIndex === 0 ? images.length - 1 : prevIndex - 1)
    );
  };

  const handleNext = () => {
    setDir(1)
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto h-[400px]">
      <AnimatePresence initial={false} custom={currentIndex}>
        {images.map(
          (src, index) =>
            index === currentIndex && (
              <motion.img
                key={src}
                src={src}
                alt={`Slide ${index + 1}`}
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-lg"
                initial={{ opacity: 0, x: dir * 300}}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 * dir}}
                transition={{ duration: 0.5 }}
              />
            )
        )}
      </AnimatePresence>

      <button
        onClick={handlePrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 shadow-xl bg-white hover:bg-opacity-75 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-300 transition-all duration-200 z-10"
        aria-label="Previous slide"
      >
        <IoIosArrowBack className="w-6 h-6 text-gray-800" />
      </button>

      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 shadow-xl bg-white hover:bg-opacity-75 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-300 transition-all duration-200 z-10"
        aria-label="Next slide"
      >
        <IoIosArrowForward className="w-6 h-6 text-gray-800" />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-300 transition-all duration-200 ${
              index === currentIndex ? "bg-primary-300" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
