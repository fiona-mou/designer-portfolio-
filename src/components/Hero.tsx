import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, useScroll, useTransform } from 'motion/react';

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="h-screen w-full flex flex-col justify-center px-6 md:px-10 relative overflow-hidden">
      <motion.div 
        style={{ y: y1, opacity }}
        className="z-10 mt-20"
      >
        <div className="overflow-hidden">
          <motion.h1 
            initial={{ y: 200, skewY: 10 }}
            animate={{ y: 0, skewY: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-display text-[15vw] leading-[0.85] tracking-tighter uppercase font-bold"
          >
            {t.hero.title}
          </motion.h1>
        </div>
        <div className="overflow-hidden h-fit ml-[10vw]">
          <motion.h1 
            initial={{ y: 200, skewY: -10 }}
            animate={{ y: 0, skewY: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="text-display text-[15vw] leading-[0.85] tracking-tighter uppercase font-bold text-transparent opacity-80"
            style={{ WebkitTextStroke: '2px var(--color-kvs-dark)' }}
          >
            {t.hero.title2}
          </motion.h1>
        </div>
      </motion.div>

      <motion.div 
        style={{ y: y2 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-20 right-6 md:right-20 max-w-sm text-right flex flex-col items-end"
      >
        <p className="text-[10px] uppercase tracking-[0.2em] opacity-50 mb-4">Intent</p>
        <p className="text-xl md:text-2xl font-serif italic text-[var(--color-kvs-dark)] leading-snug">
          {t.hero.subtitle}
        </p>
      </motion.div>
    </section>
  );
};
