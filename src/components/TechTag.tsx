"use client";

import { motion } from 'framer-motion';

interface TechTagProps {
  name: string;
}

const TechTag = ({ name }: TechTagProps) => {
  return (
    <motion.span
      className="inline-block px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-800 
                 text-gray-800 dark:text-gray-200"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {name}
    </motion.span>
  );
};

export default TechTag; 