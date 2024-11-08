"use client";

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import PageTransition from './PageTransition';
import AnimatedLink from './AnimatedLink';
import Header from './Header';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProjectLayoutProps {
  children: ReactNode;
  title: string;
  year: string;
  nextProject?: {
    href: string;
    label: string;
  };
}

export default function ProjectLayout({
  children,
  title,
  year,
  nextProject
}: ProjectLayoutProps) {
  const { t } = useLanguage();

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header showHomeLink={true} />

        {/* Hero Section */}
        <section className="pt-32 pb-32 px-8 md:px-12 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <div className="flex items-baseline gap-4 mb-4">
                <h1 className="text-4xl md:text-5xl font-light">{title}</h1>
                <span className="text-sm text-gray-500">{year}</span>
              </div>
              <div className="h-[1px] w-full bg-gray-200 dark:bg-gray-800" />
            </motion.div>

            {/* Main Content */}
            <div className="relative">
              {children}
            </div>
          </div>
        </section>

        {/* Project Navigation */}
        {nextProject && (
          <nav className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-black/80 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 z-10">
            <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 py-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex justify-end"
              >
                <AnimatedLink href={nextProject.href} className="group flex items-center gap-2 text-right">
                  <div>
                    <div className="text-sm text-gray-500">{t.projects.details.nextProject}</div>
                    <div className="font-light">{nextProject.label}</div>
                  </div>
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    className="transition-transform group-hover:translate-x-1"
                  >
                    <path 
                      d="M5 12H19M19 12L12 5M19 12L12 19" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </AnimatedLink>
              </motion.div>
            </div>
          </nav>
        )}
      </div>
    </PageTransition>
  );
} 