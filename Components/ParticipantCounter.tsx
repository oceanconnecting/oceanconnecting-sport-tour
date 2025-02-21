"use client";

import type React from "react";
import { MinusIcon, PlusIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ParticipantCounterProps {
  label: string;
  value: number;
  onDecrement: () => void;
  onIncrement: () => void;
}

const ParticipantCounter: React.FC<ParticipantCounterProps> = ({
  label,
  value,
  onDecrement,
  onIncrement,
}) => (
  <div className="w-full max-w-xs">
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
      {label}
    </label>
    <div className="flex items-center justify-between bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-2">
      <motion.button
        type="button"
        onClick={onDecrement}
        className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-md transition-colors"
        aria-label="Decrease number of participants"
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
      >
        <MinusIcon className="w-5 h-5" />
      </motion.button>
      <AnimatePresence mode="wait">
        <motion.span
          key={value}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
          className="text-2xl font-semibold text-gray-900 dark:text-gray-100"
        >
          {value}
        </motion.span>
      </AnimatePresence>
      <motion.button
        type="button"
        onClick={onIncrement}
        className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-md transition-colors"
        aria-label="Increase number of participants"
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
      >
        <PlusIcon className="w-5 h-5" />
      </motion.button>
    </div>
  </div>
);

export default ParticipantCounter;
