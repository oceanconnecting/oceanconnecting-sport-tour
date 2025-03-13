"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

type Sport = {
  name: string;
  description: string;
  image: string;
};

interface SportCardProps {
  sport: Sport;
}

export default function SportCard({ sport }: SportCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="w-full max-w-sm rounded-xl overflow-hidden shadow-lg bg-background-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="relative overflow-hidden">
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          <Image
            src={sport.image}
            alt={sport.name}
            className="w-full h-56 object-cover"
            width={440}
            height={440}
          />
        </motion.div>
        <div className="absolute bottom-0 left-0 w-full">
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            className="w-full h-16"
          >
            <path
              d="M0,100 C150,200 350,0 500,100 L500,150 L0,150 Z"
              className="fill-background-100"
            ></path>
          </svg>
        </div>
      </div>

      <div className="px-6 py-4">
        <motion.div
          className="font-bold text-xl mb-2 text-text-800"
          layoutId={`title-${sport.name}`}
        >
          {sport.name}
        </motion.div>

        <motion.p
          className="text-background-800 text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {isExpanded
            ? sport.description
            : sport.description.length > 100
            ? `${sport.description.substring(0, 100)}...`
            : sport.description}
        </motion.p>
      </div>

      <motion.div
        className="px-6 pt-2 pb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.button
          className="mt-2 inline-flex items-center px-2 py-2 bg-background-200 text-text-800 rounded-full hover:bg-background-300 transition-colors"
          whileTap={{ scale: 0.95 }}
        >
          {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
