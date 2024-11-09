"use client";

import { ElementType } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

interface InfoItemProps {
  icon: ElementType;
  label: string;
  value: string;
  ariaLabel?: string;
}

export function InfoItem({ icon: Icon, label, value, ariaLabel }: InfoItemProps) {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex items-center gap-3"
      role="group"
      aria-label={ariaLabel || `${label}: ${value}`}
    >
      <div 
        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
        aria-hidden="true"
      >
        <Icon className="w-5 h-5 text-gray-500" />
      </div>
      <div>
        <div className="text-sm md:text-base text-gray-500">{label}</div>
        <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">{value}</div>
      </div>
    </motion.div>
  );
} 