"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Briefcase, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { experienceTranslationsIT, experienceTranslationsEN } from '@/config/experience.i18n';

interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: 'siva',
    title: "Backend Developer",
    company: "SIVA",
    period: "06/2024 - Current",
    location: "Milano, Italia",
    description: [],
    technologies: ["NestJS", "TypeScript", "React", "Node.js", "Supabase", "GitHub"]
  },
  {
    id: 'publicis',
    title: "Backend Developer",
    company: "Publicis Media",
    period: "07/10/2024 - Current",
    location: "Milano, Italia",
    description: [],
    technologies: ["Java", "Spring Boot", "AWS", "SQL", "Linux", "Bash"]
  },
  {
    id: 'kpmg',
    title: "OutSystems Developer",
    company: "KPMG",
    period: "12/10/2022 - 04/10/2024",
    location: "Milano, Italia",
    description: [],
    technologies: ["OutSystems", "JavaScript", "ReactJS", "SQL", "SQL Server"]
  },
  {
    id: 'digital-technologies',
    title: "Java Developer",
    company: "Digital Technologies S.R.L.",
    period: "28/03/2022 - 09/10/2022",
    location: "Milano, Italia",
    description: [],
    technologies: ["Java", "JavaScript", "SQL", "Spring Boot"]
  },
  {
    id: 'digital-technologies-stage',
    title: "Stage",
    company: "Digital Technologies S.R.L.",
    period: "03/10/2021 - 31/12/2021",
    location: "Milano, Italia",
    description: [],
    technologies: ["Java", "Python", "OCR", "Machine Learning"]
  }
];

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const { t, language } = useLanguage();

  const getExperienceDescription = (id: string) => {
    const translations = language === 'it' ? experienceTranslationsIT : experienceTranslationsEN;
    return translations[id]?.description || [];
  };

  return (
    <section id="experience" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-light mb-16"
        >
          {t.experience.title}
        </motion.h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800" />
          
          {/* Experiences */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
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
                >
                  <div className="w-3 h-3 rounded-full bg-gray-200 dark:bg-gray-800" />
                  <div className="absolute inset-0 rounded-full bg-gray-200 dark:bg-gray-800 animate-ping opacity-75" />
                </motion.div>
                
                <div 
                  className={`space-y-6 cursor-pointer transition-colors
                    ${expandedIndex === index ? 'bg-gray-50 dark:bg-gray-900/50' : ''}
                    hover:bg-gray-50 dark:hover:bg-gray-900/50 rounded-lg p-6`}
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                >
                  {/* Header */}
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-light">{exp.title}</h3>
                      <motion.div
                        animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      </motion.div>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-4 text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period.includes('Current') ? exp.period.replace('Current', t.experience.current) : exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        {/* Description */}
                        <ul className="space-y-3 text-gray-600 dark:text-gray-400 mb-6">
                          {getExperienceDescription(exp.id).map((item, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-start gap-3"
                            >
                              <span className="mt-2 w-1 h-1 rounded-full bg-gray-400" />
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
                          {exp.technologies.map((tech, i) => (
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 