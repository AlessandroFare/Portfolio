"use client";

import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

export default function BackgroundGrid() {
  const { theme } = useTheme();
  const color = theme === 'dark' ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)';
  
  // Crea una griglia 8x8
  const grid = Array.from({ length: 64 });

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-8 gap-4 p-8">
        {grid.map((_, i) => (
          <motion.div
            key={i}
            className="relative aspect-square"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: i * 0.02,
              ease: [0.43, 0.13, 0.23, 0.96]
            }}
          >
            <div 
              className="absolute inset-0 rounded-full"
              style={{
                background: `radial-gradient(circle at center, ${color} 0%, transparent 70%)`
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: 'url("/noise.png")',
          backgroundRepeat: 'repeat',
          mixBlendMode: 'overlay'
        }}
      />

      {/* Gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: theme === 'dark' 
            ? 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(0, 0, 0, 0.3) 100%)'
            : 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(255, 255, 255, 0.3) 100%)'
        }}
      />
    </div>
  );
} 