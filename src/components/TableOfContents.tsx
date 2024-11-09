"use client";

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, Menu } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Section {
  id: string;
  label: string;
}

export default function TableOfContents() {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const sections = useMemo(() => [
    { id: 'overview', label: 'Overview' },
    { id: 'processo-sviluppo', label: t.projects.details.timeline },
    { id: 'sfide-soluzioni', label: `${t.projects.details.challenges} & ${t.projects.details.solutions}` },
    { id: 'progetti-correlati', label: t.projects.details.relatedProjects }
  ], [t.projects.details]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Compensazione per l'header fisso
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Versione Desktop */}
      <motion.nav
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
        className="fixed right-8 top-1/2 -translate-y-1/2 z-20 hidden lg:block"
      >
        <div className="bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-lg p-4 shadow-lg">
          <ul className="space-y-3">
            {sections.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => scrollToSection(id)}
                  className="text-xs md:text-sm whitespace-nowrap text-gray-500 hover:text-gray-900 dark:hover:text-gray-100"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
            <button
              onClick={scrollToTop}
              className="text-xs md:text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-100"
            >
              {t.nav.home}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Versione Mobile/Tablet */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        className="fixed bottom-24 right-4 z-20 lg:hidden"
      >
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-3 bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-full shadow-lg"
        >
          <Menu className="w-5 h-5" />
        </button>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="absolute bottom-full right-0 mb-2 bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-lg p-4 shadow-lg min-w-[200px]"
            >
              <ul className="space-y-3">
                {sections.map(({ id, label }) => (
                  <li key={id}>
                    <button
                      onClick={() => {
                        scrollToSection(id);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`text-sm whitespace-nowrap ${
                        activeSection === id
                          ? 'text-blue-500'
                          : 'text-gray-500 hover:text-gray-900 dark:hover:text-gray-100'
                      } transition-colors`}
                    >
                      <span className="text-sm md:text-base text-gray-500">
                        {label}
                      </span>
                      <button className="text-xs md:text-sm text-gray-500 hover:text-current transition-colors">
                        {t.toc.jumpTo}
                      </button>
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                <button
                  onClick={() => {
                    scrollToTop();
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                >
                  <ChevronUp className="w-4 h-4" />
                  {t.toc.backToTop}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
} 