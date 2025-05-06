import type React from 'react';
import { createContext, useState, useEffect, type ReactNode } from 'react'
import i18n from '../i18n/i18n';

type Language = 'id' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'id',
  toggleLanguage: () => {},
});

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Check if language is stored in localStorage
    const savedLanguage = localStorage.getItem('language');

    if (savedLanguage === 'id' || savedLanguage === 'en') {
      return savedLanguage;
    }

    // Default to Indonesian
    return 'id';
  });

  useEffect(() => {
    // Save language to localStorage
    localStorage.setItem('language', language);

    // Change i18n language
    i18n.changeLanguage(language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'id' ? 'en' : 'id'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
