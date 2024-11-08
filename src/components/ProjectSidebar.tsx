"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Users, GitBranch, FileCode, Blocks, TestTube, Globe, ChevronUp, Info } from 'lucide-react';
import TechStack from './TechStack';
import AnimatedLink from './AnimatedLink';
import { Project } from '@/config/projects';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProjectSidebarProps {
  project: Project;
}

interface StatTooltip {
  [key: string]: string;
}

interface DragEvent {
  offset: { x: number; y: number };
  velocity: { x: number; y: number };
}

export default function ProjectSidebar({ project }: ProjectSidebarProps) {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const { t } = useLanguage();

  const statTooltips: StatTooltip = {
    commits: t.projects.details.tooltips.commits,
    files: t.projects.details.tooltips.files,
    functions: t.projects.details.tooltips.functions,
    tests: t.projects.details.tooltips.tests
  };

  const StatItem = ({ 
    icon: Icon, 
    label, 
    value, 
    tooltipKey 
  }: { 
    icon: any; 
    label: string; 
    value: number; 
    tooltipKey: string;
  }) => (
    <div className="relative group">
      <div className="flex items-center gap-2">
        <Icon className="w-4 h-4 text-gray-400" />
        <div>
          <div className="text-sm text-gray-500 flex items-center gap-1">
            {label}
            <button
              className="opacity-50 hover:opacity-100 transition-opacity"
              onMouseEnter={() => setActiveTooltip(tooltipKey)}
              onMouseLeave={() => setActiveTooltip(null)}
              aria-label={`Info su ${label}`}
            >
              <Info className="w-3 h-3" />
            </button>
          </div>
          <div>{value}</div>
        </div>
      </div>
      <AnimatePresence>
        {activeTooltip === tooltipKey && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            className="absolute bottom-full left-0 mb-2 p-2 bg-gray-900 dark:bg-gray-100 
                     text-white dark:text-gray-900 text-xs rounded shadow-lg whitespace-nowrap"
          >
            {statTooltips[tooltipKey]}
            <div className="absolute bottom-0 left-4 transform translate-y-1/2 rotate-45 
                          w-2 h-2 bg-gray-900 dark:bg-gray-100" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  const SidebarContent = () => (
    <div className="space-y-8">
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
              <StatItem 
                icon={GitBranch} 
                label="Commits" 
                value={project.details.stats.commits} 
                tooltipKey="commits" 
              />
            )}
            {project.details.stats.files && (
              <StatItem 
                icon={FileCode} 
                label="Files" 
                value={project.details.stats.files} 
                tooltipKey="files" 
              />
            )}
            {project.details.stats.functions && (
              <StatItem 
                icon={Blocks} 
                label="Functions" 
                value={project.details.stats.functions} 
                tooltipKey="functions" 
              />
            )}
            {project.details.stats.tests && (
              <StatItem 
                icon={TestTube} 
                label="Tests" 
                value={project.details.stats.tests} 
                tooltipKey="tests" 
              />
            )}
          </div>
        </div>
      )}

      {/* Tech Stack */}
      <div className="space-y-6">
        <h3 className="text-lg font-light">{t.projects.details.technologies}</h3>
        <TechStack technologies={project.technologies} />
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
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block lg:col-span-4">
        <div className="sticky top-32">
          <SidebarContent />
        </div>
      </aside>

      {/* Mobile Bottom Sheet */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30">
        <button
          onClick={() => setIsBottomSheetOpen(!isBottomSheetOpen)}
          className="w-full bg-white/80 dark:bg-black/80 backdrop-blur-md py-4 border-t 
                   border-gray-200 dark:border-gray-800 flex items-center justify-center gap-2"
          aria-expanded={isBottomSheetOpen}
          aria-controls="mobile-project-details"
        >
          <span>{t.projects.details.title}</span>
          <ChevronUp 
            className={`w-4 h-4 transition-transform ${isBottomSheetOpen ? 'rotate-180' : ''}`} 
          />
        </button>

        <AnimatePresence>
          {isBottomSheetOpen && (
            <motion.div
              id="mobile-project-details"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 bg-white dark:bg-black border-t 
                       border-gray-200 dark:border-gray-800 rounded-t-2xl shadow-lg 
                       max-h-[80vh] overflow-y-auto"
            >
              <div className="p-6">
                <SidebarContent />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
} 