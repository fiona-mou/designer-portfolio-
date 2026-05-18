import React, { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, useInView } from 'motion/react';

export const About: React.FC = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section id="about" className="py-24 px-6 md:px-10 min-h-screen flex flex-col justify-center border-[var(--color-kvs-dark)] bg-[var(--color-kvs-light)]" ref={ref}>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-[10px] font-bold uppercase tracking-widest opacity-50 mb-16"
      >
        {t.about.title}
      </motion.p>

      <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start">
        <motion.div 
           initial={{ opacity: 0, y: 50 }}
           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
           transition={{ duration: 0.8 }}
           className="w-full md:w-1/2 p-2 border border-[var(--color-kvs-dark)] bg-white"
        >
          <img 
            src="/io.png" 
            alt="Designer Portrait" 
            className="w-full aspect-[3/4] object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>

        <div className="w-full md:w-1/2 flex flex-col gap-10">
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl lg:text-4xl leading-normal font-serif italic text-[var(--color-kvs-dark)]"
          >
            {t.about.description1}
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl opacity-70 leading-relaxed font-sans"
          >
            {t.about.description2}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10"
          >
            <a href="mailto:moufangyu@gmail.com" className="inline-flex items-center justify-center px-6 py-3 border border-[var(--color-kvs-dark)] hover:bg-[var(--color-kvs-dark)] hover:text-[var(--color-kvs-light)] bg-transparent text-[var(--color-kvs-dark)] font-bold tracking-widest text-[10px] uppercase transition-colors duration-300 w-fit">
              <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500"></span>{t.about.contact}</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
