"use client";

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

export default function BackgroundElements() {
  const { theme } = useTheme();
  const color = theme === 'dark' ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)';

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Cerchi decorativi */}
      <motion.div
        className="absolute"
        style={{
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          border: `1px solid ${color}`,
          top: '10%',
          right: '-100px',
        }}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <motion.div
        className="absolute"
        style={{
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          border: `1px solid ${color}`,
          bottom: '10%',
          left: '-50px',
        }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Linee decorative */}
      <div className="absolute top-0 left-1/4 w-px h-screen" style={{ background: `linear-gradient(to bottom, transparent, ${color}, transparent)` }} />
      <div className="absolute top-0 right-1/3 w-px h-screen" style={{ background: `linear-gradient(to bottom, transparent, ${color}, transparent)` }} />

      {/* Punti decorativi */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            backgroundColor: color,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
} 