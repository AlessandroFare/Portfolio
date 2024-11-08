"use client";

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Mail,
      label: t.about.personalInfo.email,
      value: 'ale14798@hotmail.com',
      href: 'mailto:ale14798@hotmail.com',
      ariaLabel: t.footer.aria.email
    },
    {
      icon: Phone,
      label: t.about.personalInfo.phone,
      value: '(+39) 3484408364',
      href: 'tel:+393484408364',
      ariaLabel: t.about.personalInfo.phone
    },
    {
      icon: MapPin,
      label: t.about.personalInfo.address,
      value: 'Via Lodovico il Moro, 179, Milano',
      href: 'https://goo.gl/maps/your-address-link',
      ariaLabel: t.about.personalInfo.address
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Alessandro Farè',
      href: 'https://www.linkedin.com/in/alessandro-far%C3%A8-987b42164/',
      ariaLabel: 'LinkedIn Profile'
    }
  ];

  return (
    <section className="py-16 md:py-32" role="region" aria-label={t.contact.title}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-16"
        >
          {/* Header */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-light">{t.contact.title}</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              {t.contact.description}
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid gap-8 md:grid-cols-3" role="list">
            {contactInfo.map((info) => (
              <motion.a
                key={info.label}
                href={info.href}
                className="group p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl 
                         hover:bg-white dark:hover:bg-gray-800 transition-all
                         hover:shadow-lg"
                whileHover={{ y: -5 }}
                role="listitem"
                aria-label={info.ariaLabel}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 
                                group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 
                                transition-colors">
                    <info.icon className="w-6 h-6 text-gray-600 dark:text-gray-400 
                                      group-hover:text-blue-500 dark:group-hover:text-blue-400 
                                      transition-colors" />
                  </div>
                  <div>
                    <h2 className="text-lg font-medium mb-1 group-hover:text-blue-500 
                                 dark:group-hover:text-blue-400 transition-colors">
                      {info.label}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      {info.value}
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
    </section>
  );
} 