'use client';

import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { dictionaries, SupportedLocale } from './dictionaries';

interface LanguageContextValue {
  locale: SupportedLocale;
  t: (key: string) => string;
  toggle: () => void;
  setLocale: (l: SupportedLocale) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = 'site-locale';

export const LanguageProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [locale, setLocaleState] = useState<SupportedLocale>('en');

  // load initial locale
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = window.localStorage.getItem(STORAGE_KEY) as SupportedLocale | null;
      if (stored && (stored === 'en' || stored === 'es')) {
        setLocaleState(stored);
      } else {
        // try browser language
        const browserLang = navigator.language.slice(0, 2);
        if (browserLang === 'es') setLocaleState('es');
      }
    }
  }, []);

  // persist locale
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, locale);
      document.documentElement.setAttribute('lang', locale);
    }
  }, [locale]);

  const setLocale = useCallback((l: SupportedLocale) => setLocaleState(l), []);
  const toggle = useCallback(() => setLocaleState(prev => (prev === 'en' ? 'es' : 'en')), []);

  const t = useCallback((key: string) => {
    const dict = dictionaries[locale] || {};
    return dict[key] || key;
  }, [locale]);

  return (
    <LanguageContext.Provider value={{ locale, t, toggle, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};

