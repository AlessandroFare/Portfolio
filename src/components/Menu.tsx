"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useRouter, usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from '@/styles/components/Menu.module.css';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();
  const { t } = useLanguage();

  useEffect(() => {
    setMounted(true);
    
    // Gestisce la chiusura del menu con ESC
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Blocca lo scroll quando il menu è aperto
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const menuItems = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.about, href: '/about' },
    { label: t.nav.projects, href: pathname === '/' ? '#projects' : '/#projects' },
    { label: t.nav.contact, href: '/contact' }
  ];

  const socialItems = [
    { 
      label: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/alessandro-far%C3%A8-987b42164/',
      ariaLabel: 'LinkedIn Profile' 
    },
    { label: 'GitHub', href: 'https://github.com/AlessandroFare', ariaLabel: t.footer.aria.github },
    { label: 'Behance', href: 'https://www.behance.net/ale14798869c', ariaLabel: t.footer.aria.behance }
  ];

  const handleMenuClick = (href: string) => {
    if (!mounted) return;
    
    setIsOpen(false);

    if (href.startsWith('#')) {
      if (pathname === '/') {
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 300);
      } else {
        router.push('/' + href);
      }
    } else {
      router.push(href);
    }
  };

  if (!mounted) return null;

  return (
    <div className={`${styles.container} ${theme === 'dark' ? styles.dark : ''}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles.menuButton}
        aria-expanded={isOpen}
        aria-controls="main-menu"
        aria-label={t.menu.toggle}
      >
        <span className="text-sm">{t.menu.title}</span>
      </button>

      <AnimatePresence mode="wait">
        {isOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={styles.overlay}
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            <motion.aside
              key="sidebar"
              id="main-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className={styles.sidebar}
              role="dialog"
              aria-label={t.menu.title}
            >
              <div className="h-full flex flex-col px-8 md:px-16 py-8 md:py-12">
                <div className="flex justify-between items-center mb-8 md:mb-16">
                  <span className="text-sm text-gray-500">{t.menu.title}</span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-sm border border-current rounded-full px-3 py-0.5 md:px-4 md:py-1"
                    aria-label={t.menu.close}
                  >
                    {t.menu.close}
                  </button>
                </div>

                <nav 
                  className={styles.nav}
                  role="navigation"
                  aria-label={t.menu.navigation}
                >
                  {menuItems.map((item) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <button
                        onClick={() => handleMenuClick(item.href)}
                        className="text-4xl md:text-5xl font-light hover:opacity-50 transition-opacity"
                      >
                        {item.label}
                      </button>
                    </motion.div>
                  ))}
                </nav>

                <div className="mt-auto">
                  <span className="block text-sm text-gray-500 mb-4">{t.menu.social.title}</span>
                  <div 
                    className={`grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-16 md:gap-y-4 ${styles.social}`}
                    role="list"
                    aria-label={t.menu.social.follow}
                  >
                    {socialItems.map((item) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base md:text-lg hover:opacity-50 transition-opacity"
                          aria-label={item.ariaLabel}
                        >
                          {item.label}
                        </a>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}