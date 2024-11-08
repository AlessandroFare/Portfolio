"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/config/projects';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ProjectsShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t, language } = useLanguage();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Filtriamo solo i progetti che hanno un'immagine hero
  const projectsWithImages = projects.filter(project => project.images.hero);

  // Dividiamo i progetti in 3 colonne
  const columns = [
    projectsWithImages.slice(0, 2),
    projectsWithImages.slice(2, 4),
    projectsWithImages.slice(4, 6)
  ];

  // Diversi valori di parallax per ogni colonna
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -600]);

  const Column = ({ projects, y }: { projects: typeof projectsWithImages, y: any }) => {
    return (
      <motion.div 
        className="flex-1 px-2"
        style={{ y }}
      >
        <div className="space-y-4">
          {projects.map((project) => (
            <Link 
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="block group"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-900">
                <Image
                  src={project.images.hero}
                  alt={project.title}
                  fill
                  className="object-cover opacity-80 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 group-hover:opacity-0" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-xl text-white font-light mb-2">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 2).map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-white/10 backdrop-blur-sm rounded-full text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    );
  };

  return (
    <div 
      ref={containerRef} 
      className="h-[300vh] relative bg-gray-950"
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden py-10">
        <div className="max-w-7xl mx-auto w-full px-4 md:px-6">
          <div className="flex gap-4">
            <Column projects={columns[0]} y={y1} />
            <Column projects={columns[1]} y={y2} />
            <Column projects={columns[2]} y={y3} />
          </div>
        </div>
      </div>
    </div>
  );
}