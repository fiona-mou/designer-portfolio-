import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const [weChatCopied, setWeChatCopied] = useState(false);

  const handleWeChatClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('Tianxbbsyqs').then(() => setWeChatCopied(true)).catch(() => setWeChatCopied(false));
    setTimeout(() => setWeChatCopied(false), 2000);
  };

  return (
    <footer className="portfolio-footer border-t-2 border-[var(--color-kvs-dark)] flex flex-col md:flex-row justify-between items-center px-6 md:px-10 text-[10px] uppercase tracking-[0.2em] bg-[var(--color-kvs-light)] text-[var(--color-kvs-dark)] gap-4 py-6 md:min-h-16 font-bold z-10 relative">
      <div>{t.footer.rights}</div>
      <div className="flex flex-wrap justify-center gap-5 md:gap-8">
        <a href="mailto:moufangyu@gmail.com" className="underline">moufangyu@gmail.com</a>
        <a href="https://www.instagram.com/fangyu_m/" target="_blank" rel="noreferrer" className="hover:underline transition-colors">Insta</a>
        <a href="https://www.linkedin.com/in/fangyu-mou-8a3583262/details/skills/" target="_blank" rel="noreferrer" className="hover:underline transition-colors">In</a>
        <button onClick={handleWeChatClick} className="block hover:underline transition-colors uppercase tracking-[0.2em] font-bold">
          {weChatCopied ? t.recruitment.copied : 'Wechat'}
        </button>
      </div>
    </footer>
  );
};
