import React, { useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../i18n/translations';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const sections = [
    { id: 'work', label: t.nav.work },
    { id: 'skills', label: t.nav.skills },
    { id: 'recognition', label: t.nav.awards },
    { id: 'about', label: t.nav.about },
  ];

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setMenuOpen(false);
  };

  const handleLogoClick = () => {
    navigate('/');
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <motion.nav
      aria-label={t.nav.navigation}
      onKeyDown={event => {
        if (event.key === 'Escape' && menuOpen) {
          setMenuOpen(false);
          menuToggleRef.current?.focus();
        }
      }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-[8px] sm:top-[12px] left-[8px] sm:left-[12px] right-[8px] sm:right-[12px] h-16 md:h-20 bg-[var(--color-kvs-light)] border-b-2 border-[var(--color-kvs-dark)] z-50 flex items-center justify-between px-3 md:px-10"
    >
      <button type="button" aria-label="Fangyu Mou" className="cursor-pointer flex items-center gap-2 md:gap-4 min-w-0 text-left" onClick={handleLogoClick}>
        <img src="/logo.png" alt="" className="h-5 md:h-10 object-contain shrink-0" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
        <span className="text-display font-bold text-sm sm:text-lg md:text-2xl tracking-tighter leading-none whitespace-nowrap truncate">FANGYU MOU.</span>
      </button>
      
      <div className="flex gap-2 md:gap-6 items-center text-[10px] md:text-sm font-medium uppercase tracking-widest shrink-0 ml-2">
        <div id="portfolio-navigation" className={`${menuOpen ? 'grid' : 'hidden'} grid-cols-2 gap-x-6 gap-y-1 absolute top-full left-0 right-0 border border-current bg-[var(--color-kvs-light)] p-4 md:static md:flex md:items-center md:gap-5 lg:gap-7 md:border-0 md:bg-transparent md:p-0`}>
          {sections.map(section => <a key={section.id} href={`/#${section.id}`} onClick={event => {
            if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
            event.preventDefault();
            setMenuOpen(false);
            onNavigate(section.id);
          }} className="min-h-11 inline-flex items-center hover:underline whitespace-nowrap">{section.label}</a>)}
        </div>
        
        <div className="flex gap-1 md:gap-2 text-[10px] md:text-sm font-bold">
          <button 
            onClick={() => handleLanguageChange('en')}
            aria-pressed={language === 'en'}
            className={`px-1 md:px-2 py-2 transition-colors ${language === 'en' ? 'bg-[var(--color-kvs-dark)] text-[var(--color-kvs-light)]' : 'opacity-60 hover:opacity-100'}`}
          >
            EN
          </button>
          <button 
            onClick={() => handleLanguageChange('zh')}
            aria-pressed={language === 'zh'}
            className={`px-1 md:px-2 py-2 transition-colors ${language === 'zh' ? 'bg-[var(--color-kvs-dark)] text-[var(--color-kvs-light)]' : 'opacity-60 hover:opacity-100'}`}
          >
            ZH
          </button>
          <button 
            onClick={() => handleLanguageChange('it')}
            aria-pressed={language === 'it'}
            className={`px-1 md:px-2 py-2 transition-colors ${language === 'it' ? 'bg-[var(--color-kvs-dark)] text-[var(--color-kvs-light)]' : 'opacity-60 hover:opacity-100'}`}
          >
            IT
          </button>
        </div>
        <button ref={menuToggleRef} type="button" aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu} aria-expanded={menuOpen} aria-controls="portfolio-navigation" onClick={() => setMenuOpen(open => !open)} className="md:hidden w-11 h-11 border border-current inline-flex items-center justify-center">
          <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d={menuOpen ? 'M6 6l12 12M6 18L18 6' : 'M4 7h16M4 12h16M4 17h16'} /></svg>
        </button>
      </div>
    </motion.nav>
  );
};
