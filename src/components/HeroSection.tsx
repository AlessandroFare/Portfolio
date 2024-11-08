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

export default function HeroSection() {
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <section 
      className="min-h-[90vh] flex flex-col justify-center relative"
      role="banner"
      aria-label={t.hero.title}
    >
      {/* Background Gradient */}
      <div 
        className="absolute inset-0 opacity-30 dark:opacity-20"
        style={{
          background: theme === 'dark' 
            ? 'radial-gradient(circle at 50% 50%, #1a1a1a 0%, transparent 70%)'
            : 'radial-gradient(circle at 50% 50%, #f0f0f0 0%, transparent 70%)'
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="max-w-4xl">
          {/* Titolo Principale */}
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUpVariants}
            className="text-6xl md:text-7xl lg:text-8xl font-light mb-8"
          >
            {t.hero.title}
          </motion.h1>

          {/* Sottotitoli */}
          <div className="space-y-6 text-lg md:text-xl text-gray-600 dark:text-gray-400">
            <motion.p
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeUpVariants}
            >
              {t.hero.subtitle}
            </motion.p>
            
            <motion.p
              initial="hidden"
              animate="visible"
              custom={2}
              variants={fadeUpVariants}
            >
              {t.hero.currentRole}
            </motion.p>
          </div>

          {/* CTA Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={3}
            variants={fadeUpVariants}
            className="mt-12 flex flex-wrap gap-6"
          >
            <a 
              href="#projects"
              className="inline-flex items-center gap-2 text-lg hover:opacity-60 transition-opacity"
              aria-label={t.hero.cta.projects}
            >
              {t.hero.cta.projects}
              <svg 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="translate-y-[1px]"
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

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-2">
          <motion.span 
            className="text-sm text-gray-500"
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
            Scroll
          </motion.span>
          <motion.div 
            className="w-[1px] h-12 bg-gray-300 dark:bg-gray-700"
            animate={{ 
              scaleY: [0.3, 1, 0.3],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </section>
  );
} 