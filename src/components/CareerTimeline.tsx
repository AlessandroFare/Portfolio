"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  type: 'work' | 'education' | 'achievement';
  company?: string;
  technologies?: string[];
}

const timelineEvents: TimelineEvent[] = [
  {
    id: 'siva',
    date: '2024',
    title: 'Backend Developer',
    type: 'work',
    company: 'SIVA',
    technologies: ['NestJS', 'TypeScript', 'AWS']
  },
  {
    id: 'publicis',
    date: '2024',
    title: 'Backend Developer',
    type: 'work',
    company: 'Publicis Media',
    technologies: ['Java', 'Spring Boot', 'AWS']
  },
  {
    id: 'kpmg',
    date: '2022',
    title: 'OutSystems Developer',
    type: 'work',
    company: 'KPMG',
    technologies: ['OutSystems', 'JavaScript', 'SQL']
  },
  {
    id: 'degree',
    date: '2022',
    title: 'Laurea in Informatica',
    type: 'education'
  }
];

const iconMap = {
  work: Briefcase,
  education: GraduationCap,
  achievement: Award
};

export default function CareerTimeline() {
  const { t } = useLanguage();

  const TimelineCard = ({ event, index }: { event: TimelineEvent; index: number }) => {
    const Icon = iconMap[event.type];
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const getDescription = (event: TimelineEvent) => {
      if (event.type === 'work') {
        return t.timeline.work[event.id as keyof typeof t.timeline.work].description;
      }
      if (event.type === 'education') {
        return t.timeline.education[event.id as keyof typeof t.timeline.education].description;
      }
      return '';
    };

    return (
      <motion.div
        ref={ref}
        className={`relative flex items-center justify-start ${
          index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
        }`}
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Contenuto */}
        <div className={`w-[calc(100%-2rem)] md:w-[45%] ${
          index % 2 === 0 ? 'pl-8 md:pr-12' : 'pl-8 md:pl-12'
        }`}>
          <div className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-xl shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Icon className="w-5 h-5 text-blue-500" />
              <span className="text-sm text-gray-500">{event.date}</span>
            </div>
            <h3 className="text-lg md:text-xl font-light mb-2">{event.title}</h3>
            {event.company && (
              <p className="text-sm text-gray-500 mb-2">{event.company}</p>
            )}
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-4">
              {getDescription(event)}
            </p>
            {event.technologies && (
              <div className="flex flex-wrap gap-2">
                {event.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Punto sulla timeline con linea di connessione */}
        <div className="absolute left-0 md:left-1/2 top-8 -translate-y-1/2 md:-translate-x-1/2 flex items-center">
          <div className="w-4 h-4 bg-blue-500 rounded-full z-10" />
          <div className={`hidden md:block absolute w-8 h-[2px] bg-gray-200 dark:bg-gray-800 
                         left-4 md:left-auto md:top-1/2 md:-translate-y-1/2
                         md:w-[2px] md:h-8
                         ${index % 2 === 0 ? 'md:left-4' : 'md:-left-4'}`} />
        </div>
      </motion.div>
    );
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-light mb-16 text-center">
          {t.timeline.title}
        </h2>
        
        <div className="relative">
          {/* Linea centrale */}
          <div className="absolute left-0 md:left-1/2 top-8 bottom-0 w-px h-[calc(100%-4rem)] 
                         bg-gray-200 dark:bg-gray-800 md:-translate-x-1/2" />

          <div className="space-y-12 md:space-y-20">
            {timelineEvents.map((event, index) => (
              <TimelineCard key={event.id} event={event} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 