"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  value = 0,
}: {
  testimonials: Testimonial[];
  value: number;
}) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    setActive(value);
  }, [value]);

  const randomRotateY = (i: number) => i * 5;

  return (
    <div className="max-w-sm md:max-w-4xl mx-auto px-4 md:px-8 lg:px-12 py-8">
      <div className="relative flex flex-col md:flex-row gap-5 md:gap-10 lg:gap-20">
        {/* Image Section - Sticky */}
        <div className="flex justify-center md:w-1/2">
          <div className="relative h-40 md:h-64 lg:h-96 aspect-square top-1/2 -translate-y-1/2">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(index),
                  }}
                  animate={{
                    opacity: index === active ? 1 : 0.7,
                    scale: index === active ? 1 : 0.95,
                    z: index === active ? 0 : -100,
                    rotate: index === active ? 0 : randomRotateY(index),
                    zIndex:
                      index === active ? 999 : testimonials.length + 2 - index,
                    y: index === active ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(index),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Text Section - Scrollable */}
        <div className="flex justify-center flex-col py-4 md:w-1/2">
          <p className="text-center bg-background-200 mb-6 w-fit rounded-full px-6 py-2 text-lg font-semibold text-background-600">
            {value + 1} / {testimonials.length}
          </p>
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <h3 className="text-2xl font-bold text-text-950">
              {testimonials[active].name}
            </h3>
            <motion.p className="text-lg text-gray-500 mt-8 dark:text-neutral-300">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
