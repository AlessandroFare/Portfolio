"use client";

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Palette } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

interface ContactMethod {
  icon: typeof Mail | typeof Linkedin | typeof Github | typeof Palette;
  label: string;
  value: string;
  href: string;
  ariaLabel?: string;
}

export default function Contact() {
  const { t } = useLanguage();

  const contactMethods: ContactMethod[] = [
    {
      icon: Mail,
      label: t.footer.links.email,
      value: 'ale14798@hotmail.com',
      href: 'mailto:ale14798@hotmail.com',
      ariaLabel: t.footer.aria.email
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Alessandro Farè',
      href: 'https://www.linkedin.com/in/alessandro-far%C3%A8-987b42164/',
      ariaLabel: 'LinkedIn Profile'
    },
    {
      icon: Github,
      label: t.footer.links.github,
      value: 'AlessandroFare',
      href: 'https://github.com/AlessandroFare',
      ariaLabel: t.footer.aria.github
    },
    {
      icon: Palette,
      label: t.footer.links.behance,
      value: 'ale14798869c',
      href: 'https://www.behance.net/ale14798869c',
      ariaLabel: t.footer.aria.behance
    }
  ];

  return (
    <PageTransition>
      <main className="min-h-screen pt-32 pb-24 px-6" role="main" aria-label={t.contact.title}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-16"
          >
            {/* Header */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-light">{t.contact.title}</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                {t.contact.description}
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid gap-8 md:grid-cols-2" role="list">
              {contactMethods.map((method) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl 
                           hover:bg-white dark:hover:bg-gray-800 transition-all
                           hover:shadow-lg"
                  whileHover={{ y: -5 }}
                  role="listitem"
                  aria-label={method.ariaLabel}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 
                                  group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 
                                  transition-colors">
                      <method.icon className="w-6 h-6 text-gray-600 dark:text-gray-400 
                                            group-hover:text-blue-500 dark:group-hover:text-blue-400 
                                            transition-colors" />
                    </div>
                    <div>
                      <h2 className="text-lg font-medium mb-1 group-hover:text-blue-500 
                                   dark:group-hover:text-blue-400 transition-colors">
                        {method.label}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400">
                        {method.value}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Additional Info */}
            <div className="space-y-6 text-gray-600 dark:text-gray-400">
              <p>{t.contact.availability}</p>
              <p>{t.contact.preferredContact}</p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </PageTransition>
  );
} 