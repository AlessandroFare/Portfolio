"use client";

import { motion } from 'framer-motion';
import { FileDown, FileText, Download, Gamepad } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';

const SnakeGame = dynamic(() => import('./games/SnakeGame'), {
  loading: () => <div className="w-[400px] h-[400px] bg-gray-800 rounded-xl animate-pulse" />
});

interface Resource {
  id: string;
  name: string;
  description: string;
  icon: any;
  href: string;
  type: string;
}

export default function DownloadSection() {
  const { t, language } = useLanguage();
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const handleLogoClick = () => {
    setShowEasterEgg(true);
  };

  const resources: Resource[] = [
    {
      id: 'cv',
      name: 'Curriculum Vitae',
      description: t.downloads.cv.description,
      icon: FileText,
      href: '/downloads/CV_Alessandro_Fare.pdf',
      type: 'PDF'
    },
    {
      id: 'portfolio',
      name: 'Portfolio',
      description: t.downloads.portfolio.description,
      icon: FileDown,
      href: `/downloads/Portfolio_Alessandro_Fare_${language.toUpperCase()}.pdf`,
      type: 'PDF'
    }
  ];

  const ResourceCard = ({ resource }: { resource: Resource }) => (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700">
          <resource.icon className="w-6 h-6 text-blue-500" />
        </div>
        <div>
          <h3 className="text-lg font-medium mb-2 group-hover:text-blue-500 transition-colors">
            {resource.name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            {resource.description}
          </p>
          <span className="text-xs text-gray-500">
            {resource.type} • {t.downloads.clickToDownload}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            onClick={handleLogoClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block cursor-pointer"
          >
            <Download className="w-8 h-8 mb-4 mx-auto text-gray-400" />
          </motion.div>
          <h2 className="text-2xl md:text-3xl font-light mb-4">
            {t.downloads.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t.downloads.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {resources.map((resource) => (
            <motion.a
              key={resource.id}
              href={resource.href}
              download
              className="block group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <ResourceCard resource={resource} />
            </motion.a>
          ))}
        </div>

        <AnimatePresence>
          {showEasterEgg && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-12 flex flex-col items-center"
            >
              <div className="max-w-[400px] mx-auto">
                <SnakeGame />
              </div>
              <button
                onClick={() => setShowEasterEgg(false)}
                className="mt-4 text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              >
                Close Game
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
} 