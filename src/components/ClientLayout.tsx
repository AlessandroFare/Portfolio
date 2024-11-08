"use client";

import { ThemeProvider } from 'next-themes';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ParallaxProvider } from 'react-scroll-parallax';
import Header from './Header';
import { usePathname } from 'next/navigation';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const showHomeLink = pathname !== '/';

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <LanguageProvider defaultLanguage="en">
        <ParallaxProvider>
          <Header showHomeLink={showHomeLink} />
          {children}
        </ParallaxProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
} 