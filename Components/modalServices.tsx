'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    title: string;
    images: string[];
  };
  currentImage: number;
  setCurrentImage: React.Dispatch<React.SetStateAction<number>>;
}

const ModalServices: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  data,
  currentImage,
  setCurrentImage,
}) => {
  if (!isOpen) return null;

  const handlePrev = () => {
    setCurrentImage((prev) => (prev - 1 + data.images.length) % data.images.length);
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % data.images.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div

        // commentaire 
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          // onClick={onClose}
        >
          <div    onClick={onClose} className="relative grid grid-cols-12 items-center justify-center w-screen max-h-full">
            {/* Bouton Précédent */}
            <div
 
  className="col-span-2 flex items-center justify-center"
>
  <button
    onClick={(event) => {
      event.stopPropagation(); // Empêche le clic de remonter vers le parent
      handlePrev(); // Navigation de l'image
    }}
    className=" bg-opacity-70 text-slate-100 hover:text-black w-16 h-16 flex items-center justify-center rounded-full shadow-lg hover:bg-gray-500 transition"
  >
    <FaAngleLeft size={24} />
  </button>
</div>


            {/* Image centrale */}
            <motion.div
              
              initial={{ opacity: 0, x: -100 }}  // Image enters from the left
              animate={{ opacity: 1, x: 0 }}    // Image settles in the center
              exit={{ opacity: 0, x: 100 }}    // Image exits to the right
            className="col-span-8 flex flex-col items-center justify-center px-4">
              <img
                src={data.images[currentImage]}
                alt={data.title}
                className="w-full max-w-3xl h-auto rounded-lg shadow-lg"
              />
              <h2 className="text-white text-2xl font-semibold mt-4">{data.title}</h2>
              
            </motion.div>

            {/* Bouton Suivant */}
            <div
 
  className="col-span-2 flex items-center justify-center"
>
  <button
    onClick={(event) => {
      event.stopPropagation(); // Empêche le clic de remonter vers le parent
      handleNext(); // Navigation de l'image
    }}
    className=" bg-opacity-70 text-slate-100 hover:text-black w-16 h-16 flex items-center justify-center rounded-full shadow-lg hover:bg-gray-500 transition"
  >
    <FaAngleRight size={24} />
  </button>
</div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalServices;
