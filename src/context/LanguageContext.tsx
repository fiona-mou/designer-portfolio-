import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Language } from '../i18n/translations';
import { buildProjects, recruitmentCopy, type PortfolioProject, type RecruitmentCopy } from '../data/recruitment';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Omit<typeof translations.en, 'projects'> & { projects: PortfolioProject[]; recruitment: RecruitmentCopy };
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => { try { const saved = localStorage.getItem('portfolio-language'); return saved === 'zh' || saved === 'it' ? saved : 'en'; } catch { return 'en'; } });

  useEffect(() => {
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : language;
    try { localStorage.setItem('portfolio-language', language); } catch { /* Storage may be unavailable in embedded previews. */ }
  }, [language]);

  const value = {
    language,
    setLanguage,
    t: { ...translations[language], projects: buildProjects(language, translations[language].projects), recruitment: recruitmentCopy[language] },
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
