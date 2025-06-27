import { useState } from 'react';
import type { Language } from '../types';

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>('en');

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('legal-clarity-language', newLanguage);
  };

  return { language, changeLanguage };
};