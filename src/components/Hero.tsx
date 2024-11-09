"use client";

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useLanguage } from '@/contexts/LanguageContext';

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: delay * 0.2,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  })
};

export default function Hero() {
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <section className="min-h-screen relative flex items-center">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUpVariants}
            className="text-3xl md:text-5xl font-light mb-6 md:mb-8"
          >
            {t.hero.title}
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUpVariants}
            className="text-base md:text-2xl text-gray-600 dark:text-gray-400 mb-3 md:mb-4"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUpVariants}
            className="text-sm md:text-xl text-gray-600 dark:text-gray-400"
          >
            {t.hero.currentRole}
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={3}
            variants={fadeUpVariants}
            className="mt-12 flex flex-wrap gap-6"
          >
            <a 
              href="#projects"
              className="group inline-flex items-center gap-2 text-base md:text-lg hover:opacity-60 transition-opacity"
              aria-label={t.hero.aria.cta.projects}
            >
              <span>{t.hero.cta.projects}</span>
              <svg 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="translate-y-[1px] transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              >
                <path 
                  d="M7 17L17 7M17 7H7M17 7V17" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - visibile solo su desktop */}
      <div className="hidden md:block">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          aria-label={t.hero.aria.scroll}
        >
          <div className="flex flex-col items-center gap-2">
            <motion.span 
              className="text-sm text-gray-500 whitespace-nowrap px-4 py-2 
                       bg-gray-900/80 dark:bg-gray-900/90 backdrop-blur-sm rounded-full 
                       text-white dark:text-gray-200"
              animate={{ 
                opacity: [0.5, 1, 0.5],
                y: [0, -5, 0] 
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {t.scroll.progress}
            </motion.span>
            <motion.div 
              className="w-[1px] h-12 bg-gray-400 dark:bg-gray-600"
              animate={{ 
                scaleY: [0.3, 1, 0.3],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              aria-hidden="true"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
} 