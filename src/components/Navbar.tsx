import React from 'react';
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

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-[8px] sm:top-[12px] left-[8px] sm:left-[12px] right-[8px] sm:right-[12px] h-20 bg-[var(--color-kvs-light)] border-b-2 border-[var(--color-kvs-dark)] z-50 flex items-center justify-between px-6 md:px-10"
    >
      <div className="cursor-pointer flex items-center gap-4" onClick={handleLogoClick}>
        <img src="/logo.png" alt="Logo" className="h-10 object-contain" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
        <span className="text-display font-bold text-2xl tracking-tighter">FANGYU MOU.</span>
      </div>
      
      <div className="flex gap-8 items-center text-sm font-medium uppercase tracking-widest">
        <button onClick={() => onNavigate('work')} className="hover:underline transition-all">
          {t.nav.work}
        </button>
        <button onClick={() => onNavigate('about')} className="hover:underline transition-all">
          {t.nav.about}
        </button>
        
        <div className="flex gap-2 ml-4 md:ml-12 text-sm font-bold">
          <button 
            onClick={() => handleLanguageChange('en')}
            className={`px-2 py-1 transition-colors ${language === 'en' ? 'bg-[var(--color-kvs-dark)] text-[var(--color-kvs-light)]' : 'opacity-30 hover:opacity-100'}`}
          >
            EN
          </button>
          <button 
            onClick={() => handleLanguageChange('zh')}
            className={`px-2 py-1 transition-colors ${language === 'zh' ? 'bg-[var(--color-kvs-dark)] text-[var(--color-kvs-light)]' : 'opacity-30 hover:opacity-100'}`}
          >
            ZH
          </button>
          <button 
            onClick={() => handleLanguageChange('it')}
            className={`px-2 py-1 transition-colors ${language === 'it' ? 'bg-[var(--color-kvs-dark)] text-[var(--color-kvs-light)]' : 'opacity-30 hover:opacity-100'}`}
          >
            IT
          </button>
        </div>
      </div>
    </motion.nav>
  );
};
