"use client";

import styles from './style.module.scss';
import { useState } from 'react';  
import { motion } from 'framer-motion';
import useMousePosition from '@/hooks/useMousePosition';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <motion.div 
      className={styles.mask}
      animate={{
        WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
        WebkitMaskSize: `${size}px`,
      }}
      transition={{ type: "tween", ease: "backOut", duration: 0.5}}
    >
      <div 
        onMouseEnter={() => {setIsHovered(true)}} 
        onMouseLeave={() => {setIsHovered(false)}}
      >
        {/* Contenuto che verrà rivelato dal mask */}
      </div>
    </motion.div>
  );
} 