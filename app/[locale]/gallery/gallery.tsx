"use client";

import { Suspense } from "react";
import ModalCard from "@/Components/modalCard";
import Tag from "@/Components/Tag";
import React from "react";
import { motion } from "motion/react";
import { Images } from "./images";
import LoadingSpinner from "@/Components/LoadingSpinner";

const LoadingFallback = () => (
  <div className="flex items-center justify-center w-full h-full rounded-lg bg-background-100">
    <LoadingSpinner />
  </div>
);

function Gallery() {
  const images = Images;
  const fadeInAnimations = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="py-20 flex flex-col bg-background-50 w-full justify-center items-center">
      <Tag>Gallery</Tag>
      <div className=" mt-16 grid w-full px-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {images.map((collection: any, idx: number) => (
          <motion.div
            key={idx}
            variants={fadeInAnimations}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
          >
            <Suspense fallback={<LoadingFallback />}>
              <ModalCard
                title={collection.title}
                image={collection.images[0].src}
                Images={collection.images}
              />
            </Suspense>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
