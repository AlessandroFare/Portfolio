"use client";

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

interface SkillName {
  [key: string]: string;  // 'it' | 'en'
}

interface Skill {
  name: SkillName;
  icon?: React.ElementType;
}

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  const Icon = skill.icon;
  const { t, language } = useLanguage();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="px-4 py-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg hover:shadow-lg 
                 hover:bg-white dark:hover:bg-gray-800 transition-all group"
      role="listitem"
      aria-label={`${t.about.skills.title}: ${skill.name[language]}`}
    >
      <div className="flex items-center gap-3">
        {Icon && (
          <Icon 
            className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" 
            aria-hidden="true"
          />
        )}
        <span className="text-sm md:text-base truncate group-hover:text-blue-500 transition-colors">
          {skill.name[language]}
        </span>
      </div>
    </motion.div>
  );
} 