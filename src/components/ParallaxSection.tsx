"use client";

import { ReactNode } from 'react';
import { Parallax, ParallaxProps } from 'react-scroll-parallax';

interface ParallaxSectionProps extends Omit<ParallaxProps, 'children'> {
  children: ReactNode;
  className?: string;
}

export default function ParallaxSection({ 
  children, 
  className = "",
  ...props
}: ParallaxSectionProps) {
  return (
    <Parallax
      className={`relative ${className}`}
      {...props}
    >
      {children}
    </Parallax>
  );
} 