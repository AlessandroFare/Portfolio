"use client";

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

interface HobbyName {
  [key: string]: string;  // 'it' | 'en'
}

interface Hobby {
  name: HobbyName;
  icon: React.ElementType;
  description?: HobbyName;
}

interface HobbyCardProps {
  hobby: Hobby;
}

export default function HobbyCard({ hobby }: HobbyCardProps) {
  const { t, language } = useLanguage();
  const Icon = hobby.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="px-4 py-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg hover:shadow-lg 
                 hover:bg-white dark:hover:bg-gray-800 transition-all group"
      aria-label={`${t.about.interests.title}: ${hobby.name[language]}`}
    >
      <div className="flex items-center gap-3">
        <Icon className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
        <div>
          <span className="text-sm md:text-base block truncate group-hover:text-blue-500 transition-colors">
            {hobby.name[language]}
          </span>
          {hobby.description && (
            <span className="text-xs md:text-sm block truncate text-gray-500">
              {hobby.description[language]}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
} 