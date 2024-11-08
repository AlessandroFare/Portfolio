"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import it from '@/i18n/locales/it';
import en from '@/i18n/locales/en';

type Language = 'it' | 'en';
type Translations = typeof it;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

interface LanguageProviderProps {
  children: ReactNode;
  defaultLanguage?: Language;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  it,
  en
};

export function LanguageProvider({ children, defaultLanguage = 'it' }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(defaultLanguage);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('language', language);
      document.documentElement.lang = language;
    }
  }, [language, mounted]);

  const value = {
    language,
    setLanguage,
    t: translations[language]
  };

  if (!mounted) return null;

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 