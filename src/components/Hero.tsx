import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, useScroll, useTransform } from 'motion/react';

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  useEffect(() => {
    document.title = t.recruitment.pageTitle;
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', document.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', t.hero.subtitle);
    document.querySelector('meta[property="og:image"]')?.setAttribute('content', new URL('/recruitment/ahd-home.webp', window.location.origin).href);
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.hero.subtitle);
  }, [t.hero.subtitle, t.recruitment.pageTitle]);
  return (
    <section className="recruitment-hero w-full flex flex-col justify-center px-6 md:px-10 relative overflow-hidden">
      <motion.div style={{ y: y1, opacity }} className="z-10">
        <p className="hero-identity text-[10px] sm:text-xs tracking-[0.12em] sm:tracking-[0.2em] uppercase mb-6 flex flex-wrap gap-x-2 gap-y-1">
          <span className="whitespace-nowrap">Fangyu Mou /</span>{' '}
          <span className="whitespace-nowrap">Multidisciplinary Designer</span>
        </p>
        <h1 className="text-display leading-[0.95] tracking-tighter uppercase font-bold">
          {[t.hero.title, t.hero.title2].map((line, index) => (
            <span key={index} className={index ? 'block ml-[8vw]' : 'block'}>
              <motion.span initial={{ y: 100, skewY: index ? -10 : 10 }} animate={{ y: 0, skewY: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: index ? 0.4 : 0.2 }} className={`inline-block ${index ? 'text-transparent opacity-80' : ''}`} style={{ fontSize: line.length > 12 ? 'clamp(1.9rem, 7.2vw, 8rem)' : 'clamp(3.5rem, 13vw, 11rem)', ...(index ? { WebkitTextStroke: '2px var(--color-kvs-dark)' } : {}) }}>{line}</motion.span>
            </span>
          ))}
        </h1>
      </motion.div>
      <motion.div style={{ y: y2 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }} className="hero-intent mt-12 md:mt-16 max-w-xl self-end text-right flex flex-col items-end gap-5">
        <p className="hero-fields text-xl md:text-2xl font-serif italic leading-snug">{t.hero.subtitle.split(' · ').map((field, index) => <React.Fragment key={field}>{index > 0 && <span className="hidden sm:inline"> · </span>}<span className="block sm:inline-block whitespace-nowrap">{field}</span></React.Fragment>)}</p>
        <p className="text-xs tracking-wide opacity-70">{t.recruitment.fullTime}</p>
        <div className="flex flex-wrap justify-end gap-3">
          <a className="portfolio-button" href="#work">{t.recruitment.featured} ↗</a>
          <a className="portfolio-button" href="mailto:moufangyu@gmail.com">{t.recruitment.email} ↗</a>
        </div>
      </motion.div>
    </section>
  );
};
