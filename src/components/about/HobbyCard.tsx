"use client";

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

interface HobbyCardProps {
  hobby: {
    name: string;
    icon: React.ElementType;
    description?: string;
  };
}

export default function HobbyCard({ hobby }: HobbyCardProps) {
  const { t } = useLanguage();
  const Icon = hobby.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="px-4 py-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg hover:shadow-lg 
                 hover:bg-white dark:hover:bg-gray-800 transition-all group"
      aria-label={`${t.about.interests.title}: ${hobby.name}`}
    >
      <div className="flex items-center gap-3">
        <Icon className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
        <div>
          <span className="group-hover:text-blue-500 transition-colors">{hobby.name}</span>
          {hobby.description && (
            <span className="text-sm text-gray-500 block">{hobby.description}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
} 