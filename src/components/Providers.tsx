"use client";

import { ThemeProvider } from "next-themes";
import { ParallaxProvider } from 'react-scroll-parallax';
import { ReactNode } from 'react';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ParallaxProvider>
        {children}
      </ParallaxProvider>
    </ThemeProvider>
  );
} 