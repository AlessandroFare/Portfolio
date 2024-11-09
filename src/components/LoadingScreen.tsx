"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [text, setText] = useState("Loading");

  useEffect(() => {
    // Effetto per i puntini di loading
    const textInterval = setInterval(() => {
      setText(prev => {
        if (prev === "Loading...") return "Loading";
        return prev + ".";
      });
    }, 500);

    // Effetto per la progressione
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setIsComplete(true), 500);
            return 100;
          }
          // Simula rallentamenti casuali
          const increment = Math.random() * 2 + 0.1;
          return Math.min(prev + increment, 100);
        });
      }, 30);

      return () => clearInterval(interval);
    }, 500);

    return () => {
      clearTimeout(timer);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isComplete ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
    >
      <div className="w-full max-w-md space-y-8 p-4">
        {/* Testo Loading */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <span className="text-sm text-gray-500 font-mono">
            {text}
          </span>
        </motion.div>

        {/* Loading Spinner */}
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="w-8 h-8 border-2 border-gray-800 border-t-white rounded-full animate-spin" />
        </motion.div>

        {/* Percentuale nascosta che controlla la progressione */}
        <div className="opacity-0">
          {Math.round(progress)}%
        </div>
      </div>
    </motion.div>
  );
} 