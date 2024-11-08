"use client";

import { useScroll, motion, useSpring } from "framer-motion";
import { useLanguage } from '@/contexts/LanguageContext';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const { t } = useLanguage();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
      style={{ scaleX }}
      aria-label={t.scroll.progress}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(scrollYProgress.get() * 100)}
      aria-valuetext={t.scroll.percentage.replace('{value}', Math.round(scrollYProgress.get() * 100).toString())}
    />
  );
} 