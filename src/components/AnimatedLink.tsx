"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

interface AnimatedLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  label?: string;
}

export default function AnimatedLink({ href, children, className = '', label }: AnimatedLinkProps) {
  return (
    <motion.div
      whileHover={{ x: 5 }}
      transition={{ duration: 0.2 }}
      className="w-fit"
    >
      <Link href={href} className={className}>
        {children}
      </Link>
    </motion.div>
  );
} 