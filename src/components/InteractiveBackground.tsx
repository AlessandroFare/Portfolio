"use client";

import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useTheme } from 'next-themes';

export default function InteractiveBackground() {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Configurazione spring più fluida e lenta
  const springConfig = { damping: 50, stiffness: 100, mass: 1 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (!containerRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      const relativeX = e.clientX - rect.left;
      const relativeY = e.clientY - rect.top;

      const normalizedX = (relativeX / rect.width) * 2 - 1;
      const normalizedY = (relativeY / rect.height) * 2 - 1;

      mouseX.set(normalizedX * 100);
      mouseY.set(normalizedY * 100);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Pattern di rumore SVG più intenso
  const noisePattern = `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch' seed='0'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`;

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none">
      {/* Background con gradiente che si muove */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: theme === 'dark'
            ? 'radial-gradient(circle at 50% 50%, #1a1a1a 0%, transparent 70%)'
            : 'radial-gradient(circle at 50% 50%, #f0f0f0 0%, transparent 70%)',
          x,
          y,
        }}
      />

      {/* Overlay con noise texture più intenso */}
      <div 
        className="absolute inset-0 opacity-[0.25] mix-blend-overlay"
        style={{
          backgroundImage: noisePattern,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px'
        }}
      />

      {/* Sfumatura superiore */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"
        style={{
          background: theme === 'dark'
            ? 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 100%)'
            : 'linear-gradient(to bottom, transparent 0%, rgba(255,255,255,1) 100%)'
        }}
      />
    </div>
  );
}