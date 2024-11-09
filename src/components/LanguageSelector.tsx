"use client";

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center gap-2"
      role="radiogroup"
      aria-label={t.language.select}
    >
      <button
        onClick={() => setLanguage('it')}
        className={`px-2 py-1 text-xs md:text-sm rounded-md transition-colors ${
          language === 'it'
            ? 'bg-gray-200 dark:bg-gray-800'
            : 'hover:bg-gray-100 dark:hover:bg-gray-800/50'
        }`}
        role="radio"
        aria-checked={language === 'it'}
        aria-label={language === 'it'
          ? t.language.current.replace('{language}', t.language.it)
          : t.language.switch.replace('{language}', t.language.it)
        }
      >
        IT
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 rounded-md transition-colors ${
          language === 'en'
            ? 'bg-gray-200 dark:bg-gray-800'
            : 'hover:bg-gray-100 dark:hover:bg-gray-800/50'
        }`}
        role="radio"
        aria-checked={language === 'en'}
        aria-label={language === 'en'
          ? t.language.current.replace('{language}', t.language.en)
          : t.language.switch.replace('{language}', t.language.en)
        }
      >
        <span className="text-xs md:text-sm">EN</span>
      </button>
    </motion.div>
  );
} 