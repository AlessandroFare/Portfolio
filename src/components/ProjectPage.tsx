"use client";

import { motion } from 'framer-motion';
import ProjectLayout from '@/components/ProjectLayout';
import ProjectGallery from '@/components/ProjectGallery';
import TechStack from '@/components/TechStack';
import AnimatedLink from '@/components/AnimatedLink';
import { Project, getNextProject, getProjectBySlug } from '@/config/projects';
import { Clock, Users, GitBranch, FileCode, Blocks, TestTube, Globe } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import TableOfContents from './TableOfContents';
import { useLanguage } from '@/contexts/LanguageContext';
import { projectTranslationsIT, projectTranslationsEN } from '@/config/projects.i18n';

interface ProjectPageProps {
  project: Project;
}

export default function ProjectPage({ project }: ProjectPageProps) {
  const nextProject = getNextProject(project.slug)!;
  const { t, language } = useLanguage();

  // Ottieni le traduzioni corrette in base alla lingua
  const translations = language === 'it' 
    ? projectTranslationsIT[project.slug] 
    : projectTranslationsEN[project.slug];

  if (!translations) {
    return null; // O gestisci il caso in cui non ci sono traduzioni
  }

  // Filtra solo le immagini che esistono
  const galleryImages = project.images.gallery 
    ? [project.images.hero, ...project.images.gallery].filter(Boolean)
    : [project.images.hero];

  return (
    <ProjectLayout
      title={project.title}
      year={project.year}
      nextProject={{
        href: `/projects/${nextProject.slug}`,
        label: nextProject.title
      }}
    >
      <TableOfContents />
      <main role="main" aria-label={`${t.projects.details.title}: ${project.title}`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Contenuto Principale */}
          <article className="lg:col-span-8 space-y-16">
            {/* Gallery */}
            {galleryImages.length > 0 && (
              <section aria-label="Galleria immagini">
                <ProjectGallery 
                  images={galleryImages}
                  title={project.title}
                />
              </section>
            )}

            {/* Descrizione */}
            <section id="overview" aria-label="Panoramica del progetto">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl font-light"
              >
                Overview
              </motion.h2>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="prose dark:prose-invert max-w-none"
              >
                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                  {translations.description}
                </p>
              </motion.div>
            </section>

            {/* Processo di Sviluppo */}
            <section id="processo-sviluppo" aria-label="Processo di sviluppo" className="space-y-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl font-light"
              >
                {t.projects.details.timeline}
              </motion.h2>

              {/* Timeline */}
              <div className="relative pl-8 border-l border-gray-200 dark:border-gray-800">
                {translations.timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="mb-8 last:mb-0"
                  >
                    <div className="absolute left-0 w-3 h-3 bg-gray-200 dark:bg-gray-800 rounded-full -translate-x-[1.3rem]" />
                    <div className="text-sm text-gray-500 mb-1">{item.date}</div>
                    <div className="text-gray-600 dark:text-gray-400">{item.milestone}</div>
                  </motion.div>
                ))}
              </div>

              {/* Sfide e Soluzioni */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-light mb-4">{t.projects.details.challenges}</h3>
                  <ul className="space-y-3">
                    {translations.challenges.map((challenge, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                      >
                        <span className="mt-2 w-1 h-1 rounded-full bg-gray-400" />
                        {challenge}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-light mb-4">{t.projects.details.solutions}</h3>
                  <ul className="space-y-3">
                    {translations.solutions.map((solution, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                      >
                        <span className="mt-2 w-1 h-1 rounded-full bg-gray-400" />
                        {solution}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Related Projects */}
            {project.relatedProjects && project.relatedProjects.length > 0 && (
              <section id="progetti-correlati" aria-label="Progetti correlati">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-2xl font-light"
                >
                  {t.projects.details.relatedProjects}
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {project.relatedProjects.map((slug) => {
                    const relatedProject = getProjectBySlug(slug);
                    if (!relatedProject) return null; // Skip if related project not found
                    
                    return (
                      <Link 
                        key={slug}
                        href={`/projects/${slug}`}
                        className="group block"
                      >
                        <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                          {relatedProject.images?.preview && (
                            <Image
                              src={relatedProject.images.preview}
                              alt={relatedProject.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          )}
                        </div>
                        <h3 className="text-xl font-light group-hover:text-blue-500 transition-colors">
                          {relatedProject.title}
                        </h3>
                      </Link>
                    );
                  })}
                </div>
              </section>
            )}
          </article>

          {/* Sidebar */}
          <aside 
            className="lg:col-span-4"
            aria-label="Informazioni aggiuntive sul progetto"
          >
            <div className="space-y-8 sticky top-32">
              {/* Project Details */}
              <div className="space-y-6">
                <h3 className="text-lg font-light">{t.projects.details.title}</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                    <Clock className="w-5 h-5" />
                    <span>{t.projects.details.duration}: {project.details.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                    <Users className="w-5 h-5" />
                    <span>{t.projects.details.role}: {project.details.role}</span>
                  </div>
                  {project.details.team && (
                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                      <Users className="w-5 h-5" />
                      <span>{t.projects.details.team}: {project.details.team}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Project Stats */}
              {project.details.stats && (
                <div className="space-y-6">
                  <h3 className="text-lg font-light">{t.projects.details.stats}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {project.details.stats.commits && (
                      <div className="flex items-center gap-2">
                        <GitBranch className="w-4 h-4 text-gray-400" />
                        <div>
                          <div className="text-sm text-gray-500">Commits</div>
                          <div>{project.details.stats.commits}</div>
                        </div>
                      </div>
                    )}
                    {project.details.stats.files && (
                      <div className="flex items-center gap-2">
                        <FileCode className="w-4 h-4 text-gray-400" />
                        <div>
                          <div className="text-sm text-gray-500">Files</div>
                          <div>{project.details.stats.files}</div>
                        </div>
                      </div>
                    )}
                    {project.details.stats.functions && (
                      <div className="flex items-center gap-2">
                        <Blocks className="w-4 h-4 text-gray-400" />
                        <div>
                          <div className="text-sm text-gray-500">Functions</div>
                          <div>{project.details.stats.functions}</div>
                        </div>
                      </div>
                    )}
                    {project.details.stats.tests && (
                      <div className="flex items-center gap-2">
                        <TestTube className="w-4 h-4 text-gray-400" />
                        <div>
                          <div className="text-sm text-gray-500">Tests</div>
                          <div>{project.details.stats.tests}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Tech Stack */}
              <div className="space-y-6">
                <h3 className="text-lg font-light">Stack Tecnologico</h3>
                <TechStack technologies={project.technologies} showTitle={false} />
              </div>

              {/* Links */}
              <div className="space-y-4">
                {project.links.demo && (
                  <AnimatedLink 
                    href={project.links.demo}
                    className="flex items-center gap-2 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    <Globe className="w-5 h-5" />
                    <span>{t.projects.details.viewDemo}</span>
                  </AnimatedLink>
                )}
                {project.links.github && (
                  <AnimatedLink 
                    href={project.links.github}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <GitBranch className="w-5 h-5" />
                    <span>{t.projects.details.viewGithub}</span>
                  </AnimatedLink>
                )}
              </div>
            </div>
          </aside>
        </div>
      </main>
    </ProjectLayout>
  );
} 