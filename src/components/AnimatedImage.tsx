"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

interface AnimatedImageProps {
  src: string;
  alt: string;
  priority?: boolean;
}

export default function AnimatedImage({ src, alt, priority = false }: AnimatedImageProps) {
  return (
    <motion.div
      className="relative aspect-video w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority={priority}
      />
    </motion.div>
  );
} 