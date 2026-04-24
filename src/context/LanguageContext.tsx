import React, { createContext, useContext, useState, ReactNode } from 'react';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type LanguageCode = 'us' | 'es' | 'br' | 'tr';

export interface Language {
  code: LanguageCode;
  name: string;
}

export const languages: Language[] = [
  { code: 'us', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'br', name: 'Português (BR)' },
  { code: 'tr', name: 'Türkçe' },
];

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  availableLanguages: Language[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const savedCode = localStorage.getItem('gpa-lang');
    return languages.find(l => l.code === savedCode) || languages[0];
  });

  const setLanguage = (lang: Language) => {
    localStorage.setItem('gpa-lang', lang.code);
    setLanguageState(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, availableLanguages: languages }}>
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
