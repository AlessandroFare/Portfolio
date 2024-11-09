"use client";

import { motion, useScroll, useSpring } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const { t } = useLanguage();

  return (
    <div className="hidden md:block fixed bottom-40 left-0 right-0 z-50 pointer-events-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-row items-center justify-between gap-4">
          {/* Progress Label */}
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {t.scroll.progress}
          </div>
          
          {/* Progress Bar */}
          <div className="w-1/2 h-[1px] bg-gray-200 dark:bg-gray-800 overflow-hidden">
            <motion.div
              className="h-full bg-blue-500"
              style={{ scaleX, transformOrigin: "0%" }}
            />
          </div>
          
          {/* Percentage */}
          <motion.div 
            className="text-sm text-gray-500 dark:text-gray-400"
            style={{
              opacity: useSpring(scrollYProgress, {
                stiffness: 100,
                damping: 30,
                restDelta: 0.001
              })
            }}
          >
            {Math.round(scrollYProgress.get() * 100)}%
          </motion.div>
        </div>
      </div>
    </div>
  );
} 