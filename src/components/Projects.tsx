"use client";

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { projects, getProjectDescription } from '@/config/projects';
import { Search, Filter, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// Estraiamo tutte le tecnologie uniche dai progetti
const allTechnologies = Array.from(
  new Set(projects.flatMap(project => project.technologies))
).sort();

// Estraiamo tutti i tag unici dai progetti
const allTags = Array.from(
  new Set(projects.flatMap(project => project.tags))
).sort();

// Raggruppa i progetti per anno
const projectsByYear = projects.reduce((acc, project) => {
  if (!acc[project.year]) {
    acc[project.year] = [];
  }
  acc[project.year].push(project);
  return acc;
}, {} as Record<string, typeof projects>);

export default function Projects() {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTech, setSelectedTech] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const { t, language } = useLanguage();

  // Filtra i progetti in base ai criteri di ricerca e filtri
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      // Filtra per query di ricerca
      const matchesSearch = 
        searchQuery === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());

      // Filtra per tecnologie selezionate
      const matchesTech = 
        selectedTech.length === 0 ||
        selectedTech.every(tech => project.technologies.includes(tech));

      // Filtra per tag selezionati
      const matchesTags = 
        selectedTags.length === 0 ||
        selectedTags.every(tag => project.tags.includes(tag));

      return matchesSearch && matchesTech && matchesTags;
    });
  }, [searchQuery, selectedTech, selectedTags]);

  // Raggruppa i progetti filtrati per anno
  const filteredProjectsByYear = filteredProjects.reduce((acc, project) => {
    if (!acc[project.year]) {
      acc[project.year] = [];
    }
    acc[project.year].push(project);
    return acc;
  }, {} as Record<string, typeof projects>);

  const sortedFilteredYears = Object.keys(filteredProjectsByYear).sort((a, b) => parseInt(b) - parseInt(a));

  return (
    <section id="projects" className="py-16 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header con Search Toggle */}
        <div className="flex justify-end mb-8">
          <motion.button
            onClick={() => setShowSearch(!showSearch)}
            className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-gray-100 
                     dark:hover:bg-gray-800 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Search className="w-4 h-4" />
            <span className="text-sm">{t.projects.search.placeholder}</span>
          </motion.button>
        </div>

        {/* Search Panel */}
        <AnimatePresence>
          {showSearch && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden mb-8"
            >
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 space-y-6">
                {/* Search Bar */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder={t.projects.search.placeholder}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 pl-10 text-sm rounded-lg bg-white dark:bg-gray-800 
                             focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                </div>

                {/* Filters Toggle */}
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 
                             hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
                  >
                    <Filter className="w-4 h-4" />
                    {showFilters ? t.projects.search.filters.hide : t.projects.search.filters.show}
                  </button>
                  
                  {/* Clear Filters */}
                  {(selectedTech.length > 0 || selectedTags.length > 0) && (
                    <button
                      onClick={() => {
                        setSelectedTech([]);
                        setSelectedTags([]);
                      }}
                      className="flex items-center gap-2 text-sm text-red-500 hover:text-red-600 transition-colors"
                    >
                      <X className="w-4 h-4" />
                      {t.projects.search.filters.clear}
                    </button>
                  )}
                </div>

                {/* Filters Content */}
                <AnimatePresence>
                  {showFilters && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="space-y-6 overflow-hidden"
                    >
                      {/* Technologies Filter */}
                      <div>
                        <h3 className="text-sm font-medium mb-3">{t.projects.search.filters.technologies}</h3>
                        <div className="flex flex-wrap gap-2">
                          {allTechnologies.map((tech) => (
                            <button
                              key={tech}
                              onClick={() => {
                                setSelectedTech(prev => 
                                  prev.includes(tech) 
                                    ? prev.filter(t => t !== tech)
                                    : [...prev, tech]
                                );
                              }}
                              className={`px-3 py-1 text-sm rounded-full transition-colors
                                ${selectedTech.includes(tech)
                                  ? 'bg-blue-500 text-white'
                                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                                }`}
                            >
                              {tech}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Tags Filter */}
                      <div>
                        <h3 className="text-sm font-medium mb-3">{t.projects.search.filters.tags}</h3>
                        <div className="flex flex-wrap gap-2">
                          {allTags.map((tag) => (
                            <button
                              key={tag}
                              onClick={() => {
                                setSelectedTags(prev => 
                                  prev.includes(tag) 
                                    ? prev.filter(t => t !== tag)
                                    : [...prev, tag]
                                );
                              }}
                              className={`px-3 py-1 text-sm rounded-full transition-colors
                                ${selectedTags.includes(tag)
                                  ? 'bg-blue-500 text-white'
                                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                                }`}
                            >
                              {tag}
                            </button>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Projects Grid */}
        {sortedFilteredYears.length > 0 ? (
          sortedFilteredYears.map((year) => (
            <div key={year} className="mb-16 md:mb-32 last:mb-0">
              {/* Anno con linea temporale */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4 mb-8 md:mb-16"
              >
                <span className="text-sm font-light">{year}</span>
                <div className="h-[1px] flex-1 bg-gray-200 dark:bg-gray-800" />
              </motion.div>

              {/* Grid dei progetti */}
              <div className={`grid gap-8 md:gap-16 ${
                filteredProjectsByYear[year].length === 1 
                  ? 'grid-cols-1' 
                  : 'grid-cols-1 md:grid-cols-2'
              }`}>
                {filteredProjectsByYear[year].map((project, index) => (
                  <motion.div
                    key={project.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link 
                      href={`/projects/${project.slug}`}
                      className="block group"
                    >
                      {/* Immagine del progetto */}
                      <div className={`relative mb-4 md:mb-6 overflow-hidden bg-gray-100 dark:bg-gray-900 rounded-lg ${
                        filteredProjectsByYear[year].length === 1 
                          ? 'aspect-video md:aspect-[21/9]'
                          : 'aspect-[4/3]'
                      }`}>
                        <Image
                          src={project.images.preview}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes={filteredProjectsByYear[year].length === 1 
                            ? "100vw"
                            : "(max-width: 768px) 100vw, 50vw"
                          }
                          priority={index === 0}
                        />
                      </div>

                      {/* Info del progetto */}
                      <div className="space-y-3 md:space-y-4">
                        <h3 className="text-xl md:text-2xl font-light">{project.title}</h3>
                        <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 line-clamp-2">
                          {getProjectDescription(project.slug, language)}
                        </p>
                        
                        {/* Tech stack */}
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 2).map((tech, i) => (
                            <span 
                              key={i}
                              className="px-2 md:px-3 py-1 text-xs md:text-sm bg-gray-100 dark:bg-gray-800 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 2 && (
                            <span className="px-2 md:px-3 py-1 text-xs md:text-sm bg-gray-100 dark:bg-gray-800 rounded-full">
                              +{project.technologies.length - 2}
                            </span>
                          )}
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 text-gray-500"
          >
            {t.projects.search.noResults}
          </motion.div>
        )}
      </div>
    </section>
  );
} 