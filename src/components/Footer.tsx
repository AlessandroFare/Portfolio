"use client";

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-black/80 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 z-10"
    >
      <div className="max-w-7xl mx-auto py-6 px-8 md:px-12 lg:px-16">
        <nav 
          className="flex justify-center gap-8 text-sm"
          aria-label={t.footer.aria.navigation}
        >
          <a 
            href="mailto:ale14798@hotmail.com" 
            className="hover:opacity-60 transition-opacity"
            aria-label={t.footer.aria.email}
          >
            {t.footer.links.email}
          </a>
          <a 
            href="https://github.com/AlessandroFare" 
            className="hover:opacity-60 transition-opacity"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.footer.aria.github}
          >
            {t.footer.links.github}
          </a>
          <a 
            href="https://www.behance.net/ale14798869c" 
            className="hover:opacity-60 transition-opacity"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.footer.aria.behance}
          >
            {t.footer.links.behance}
          </a>
          
          <a 
            href="https://www.linkedin.com/in/alessandro-far%C3%A8-987b42164/"
            className="hover:opacity-60 transition-opacity"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </motion.footer>
  );
} 