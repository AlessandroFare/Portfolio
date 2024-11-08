"use client";

import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import Menu from './Menu';
import ThemeToggle from './ThemeToggle';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';

interface HeaderProps {
  showHomeLink?: boolean;
}

export default function Header({ showHomeLink = false }: HeaderProps) {
  const [hidden, setHidden] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const { theme } = useTheme();
  const { t } = useLanguage();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.header
      role="banner"
      aria-label={t.header.navigation}
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -100, opacity: 0 }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className={`
        fixed top-0 left-0 right-0 z-40
        backdrop-blur-md bg-white/70 dark:bg-black/70
        border-b border-gray-200 dark:border-gray-800
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Home Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {showHomeLink ? (
              <Link 
                href="/" 
                className="text-lg hover:opacity-60 transition-opacity"
                aria-label={t.header.backHome}
              >
                Alessandro Farè
              </Link>
            ) : (
              <span className="text-lg">Alessandro Farè</span>
            )}
          </motion.div>

          {/* Right Side Controls */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-6"
            aria-label={t.header.controls}
          >
            <div aria-label={t.header.toggleLanguage}>
              <LanguageSelector />
            </div>
            <ThemeToggle />
            <div aria-label={t.header.toggleMenu}>
              <Menu />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
} 