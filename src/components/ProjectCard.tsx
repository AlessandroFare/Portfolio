"use client";

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { getProjectDescription } from '@/config/projects';

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
  index: number;
  technologies: string[];
  slug: string;
}

export default function ProjectCard({ 
  title, 
  description, 
  imageSrc, 
  href, 
  index, 
  technologies,
  slug 
}: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  // Ottieni la descrizione tradotta
  const translatedDescription = getProjectDescription(slug, language);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative aspect-[4/3] rounded-lg overflow-hidden"
    >
      <Link href={href} className="block w-full h-full">
        <div className="absolute inset-0 w-full h-full transform-gpu">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        
        <motion.div 
          className="relative z-10 p-6 flex flex-col justify-end h-full"
          style={{ transform: "translateZ(50px)" }}
        >
          <h3 className="text-xl font-medium text-white mb-2">
            {title}
          </h3>
          <p className="text-sm text-white/80">
            {translatedDescription}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {technologies.slice(0, 2).map((tech, i) => (
              <span 
                key={i}
                className="px-2 py-1 text-xs bg-white/10 backdrop-blur-sm rounded-full text-white"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 2 && (
              <span className="px-2 py-1 text-xs bg-white/10 backdrop-blur-sm rounded-full text-white">
                +{technologies.length - 2}
              </span>
            )}
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
} 