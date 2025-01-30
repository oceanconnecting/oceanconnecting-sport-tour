"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Button from "./Button";

function ImageCard(props: any) {
  const [isOpen, setIsOpen] = useState(false);

  const { title, image, children } = props;

  return (
    <div>
      <div
        onClick={() => setIsOpen(true)}
        className="relative overflow-hidden w-full min-w-sm h-64 rounded-lg shadow-lg cursor-pointer"
      >
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 z-10" />
        <div className="relative h-full flex flex-col justify-end z-10">
          <div className="p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)} // Closes modal on backdrop click
            className="fixed top-0 left-0 z-30 bg-black px-5 bg-opacity-75 backdrop-blur-lg h-screen w-full flex justify-center items-center"
          >
            <div
              onClick={(e) => e.stopPropagation()} // Prevents modal from closing when interacting with content
              className="overflow-hidden shadow-lg max-w-md w-full"
            >
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ImageCard;
