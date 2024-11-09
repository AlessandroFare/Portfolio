"use client";

import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface TimelineItem {
  date: string;
  milestone: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      {/* Desktop Timeline */}
      <div className="hidden md:block relative pl-8 border-l border-gray-200 dark:border-gray-800">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="mb-8 last:mb-0"
          >
            <div className="absolute left-0 w-3 h-3 bg-gray-200 dark:bg-gray-800 rounded-full -translate-x-[1.3rem]" />
            <div className="text-xs md:text-sm text-gray-500 mb-1">{item.date}</div>
            <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">{item.milestone}</div>
          </motion.div>
        ))}
      </div>

      {/* Mobile Timeline */}
      <div className="md:hidden space-y-4">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4"
          >
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
              <Calendar className="w-4 h-4" />
              {item.date}
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              {item.milestone}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 