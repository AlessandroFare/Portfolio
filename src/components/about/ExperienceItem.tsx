"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Briefcase, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
  index: number;
}

export default function ExperienceItem({
  title,
  company,
  period,
  location,
  description,
  technologies,
  index
}: ExperienceItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-12"
    >
      {/* Timeline dot with pulse effect */}
      <motion.div 
        className="absolute left-0 top-0 -translate-x-1/2"
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.2 }}
        aria-hidden="true"
      >
        <div className="w-3 h-3 rounded-full bg-gray-200 dark:bg-gray-800" />
        <div className="absolute inset-0 rounded-full bg-gray-200 dark:bg-gray-800 animate-ping opacity-75" />
      </motion.div>
      
      <div 
        className={`space-y-6 cursor-pointer transition-colors
          ${isExpanded ? 'bg-gray-50 dark:bg-gray-900/50' : ''}
          hover:bg-gray-50 dark:hover:bg-gray-900/50 rounded-lg p-6`}
        onClick={() => setIsExpanded(!isExpanded)}
        role="button"
        aria-expanded={isExpanded}
        aria-label={`${t.experience.details.company}: ${company}`}
      >
        {/* Header */}
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-light">{title}</h3>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              aria-hidden="true"
            >
              <ChevronDown className="w-5 h-5 text-gray-500" />
            </motion.div>
          </div>
          <div className="mt-2 flex flex-wrap gap-4 text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4" aria-hidden="true" />
              <span>{company}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" aria-hidden="true" />
              <span>{period.includes('Attuale') ? period.replace('Attuale', t.experience.current) : period}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span>{location}</span>
            </div>
          </div>
        </div>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              {/* Description */}
              <ul className="space-y-3 text-gray-600 dark:text-gray-400 mb-6" role="list">
                {description.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                    role="listitem"
                  >
                    <span className="mt-2 w-1 h-1 rounded-full bg-gray-400" aria-hidden="true" />
                    {item}
                  </motion.li>
                ))}
              </ul>

              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="flex flex-wrap gap-2"
              >
                <h4 className="w-full text-sm font-medium text-gray-500 mb-2">
                  {t.experience.details.technologies}
                </h4>
                {technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-full
                             hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
} 