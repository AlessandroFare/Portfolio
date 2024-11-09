"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useRouter, usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from '@/styles/components/Menu.module.css';
import { Menu as MenuIcon } from 'lucide-react';

interface MenuProps {
  children?: React.ReactNode;
}

export default function Menu({ children }: MenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();
  const { t } = useLanguage();

  useEffect(() => {
    setMounted(true);
    
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
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
        onClick={() => setIsOpen(true)}
        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
        aria-label={t.header.toggleMenu}
      >
        <MenuIcon className="w-6 h-6" />
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
                  <span className="text-sm md:text-base text-gray-500">{t.menu.title}</span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-xs md:text-sm border border-current rounded-full px-3 py-1"
                    aria-label={t.menu.close}
                  >
                    {t.menu.close}
                  </button>
                </div>

                <nav className="flex-1 mb-8" aria-label={t.menu.navigation}>
                  <ul className="space-y-6 text-3xl md:text-4xl font-light">
                    {menuItems.map((item) => (
                      <li key={item.href}>
                        <button
                          onClick={() => handleMenuClick(item.href)}
                          className="hover:text-blue-500 transition-colors"
                        >
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div>
                  <h2 className="text-sm text-gray-500 mb-4">{t.menu.social.title}</h2>
                  <ul className="flex gap-4">
                    {socialItems.map((item) => (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm hover:text-blue-500 transition-colors"
                          aria-label={item.ariaLabel}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}