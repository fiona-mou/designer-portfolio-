import React, { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { featuredIds } from '../data/recruitment';

export const Work: React.FC = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="py-24 border-t border-[var(--color-kvs-dark)] bg-white" ref={ref}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="px-6 md:px-10 mb-12 flex items-center justify-between"
      >
        <h2 className="text-sm font-medium uppercase tracking-widest bg-[var(--color-kvs-dark)] text-[var(--color-kvs-light)] px-3 py-1">
          {t.recruitment.featured}
        </h2>
        <span className="w-8 h-[2px] bg-[var(--color-kvs-dark)]"></span>
      </motion.div>
      
      <div className="flex flex-col border-[var(--color-kvs-dark)] border-t border-b bg-[var(--color-kvs-dark)] gap-px">
        {featuredIds.map(id => t.projects.find(project => project.id === id)!).map((project, index) => (
          <ProjectItem key={project.id} project={project} index={index} t={t} />
        ))}
      </div>
      <div id="all-projects" className="px-6 md:px-10 pt-20">
        <h2 className="text-sm uppercase tracking-widest font-bold mb-8">{t.recruitment.allProjects}</h2>
        <div className="border-t border-current">
          {t.projects.filter(project => project.collection !== 'course').map(project => (
            <Link key={project.id} to={`/project/${project.slug || project.id}`} className="project-index-row grid grid-cols-[1fr_auto] md:grid-cols-[2fr_2fr_1fr_auto] gap-3 py-5 border-b border-current items-center hover:bg-[var(--color-kvs-light)]">
              <span className="font-bold text-lg">{project.title}</span>
              <span className="hidden md:block text-sm font-serif italic">{project.meta.type}</span>
              <span className="text-xs md:text-right">{project.year}</span>
              <span className="hidden md:block" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectItem: React.FC<{ project: any, index: number, t: any }> = ({ project, index, t }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const navigate = useNavigate();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const handleViewProject = () => navigate(`/project/${project.slug || project.id}`);

  return (
    <motion.div 
      ref={ref}
      className={`flex flex-col bg-[var(--color-kvs-accent)] hover:bg-white transition-colors duration-300 ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-stretch group`}
    >
      <div className={`w-full md:w-3/5 overflow-hidden border-[var(--color-kvs-dark)] ${index % 2 === 1 ? 'border-b md:border-b-0 md:border-l' : 'border-b md:border-b-0 md:border-r'}`}>
        <motion.div
           initial={{ scale: 1.1, opacity: 0 }}
           animate={isInView ? { scale: 1, opacity: 1 } : { scale: 1.1, opacity: 0 }}
           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
           className="relative aspect-[4/3] w-full cursor-pointer overflow-hidden"
           onClick={handleViewProject}
           role="link"
           tabIndex={0}
           aria-label={`${t.recruitment.viewCase}: ${project.title}`}
           onKeyDown={event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); handleViewProject(); } }}
        >
          <motion.div style={{ y: imgY, height: "120%", width: "100%", originY: 0 }} className="absolute -top-[10%] left-0 right-0">
          {(project.image?.includes('youtu.be') || project.image?.includes('youtube.com')) ? (
            <div className="w-full h-full pointer-events-none grayscale opacity-90 transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0 relative overflow-hidden bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${project.image.split('/').pop()?.split('?')[0]}?autoplay=1&mute=1&loop=1&playlist=${project.image.split('/').pop()?.split('?')[0]}&controls=0&disablekb=1&playsinline=1`}
                className="absolute inset-0 w-full h-full scale-[1.3] md:scale-[1.5]"
                style={{ border: 'none' }}
                allow="autoplay; encrypted-media"
                title={project.title}
              ></iframe>
            </div>
          ) : (project.image?.endsWith('.mov') || project.image?.endsWith('.mp4')) ? (
            <video 
              src={isInView ? project.image : undefined}
              poster={project.gallery?.find((image: string) => /\.(jpe?g|png|webp)$/i.test(image))}
              preload="metadata"
              autoPlay={isInView}
              muted 
              loop 
              playsInline
              className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
            />
          ) : (
            <img 
              src={project.image} 
              alt={project.title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
            />
          )}
          </motion.div>
        </motion.div>
      </div>
      
      <div className="w-full md:w-2/5 flex flex-col justify-center p-8 md:p-12 lg:p-16">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
           transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex justify-between items-start mb-8">
            <span className="text-[10px] border border-current px-2 py-0.5 font-bold">0{index + 1}</span>
            <span className="text-[10px] opacity-60 tracking-widest">{project.year}</span>
          </div>
          <h3 className="text-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-2">
            {project.title}
          </h3>
          <p className="text-xs uppercase tracking-widest font-serif italic mb-5 opacity-80">{project.category}</p>
          <p className="text-sm leading-relaxed mb-5">{project.meta.summary}</p>
          <p className="text-[10px] uppercase tracking-wide opacity-75 mb-3">{project.meta.type}</p>
          <p className="text-sm leading-relaxed mb-6"><strong>{t.recruitment.role}:</strong> {project.meta.role}</p>
          <div className="flex flex-wrap gap-2 mb-8">{project.meta.tools.slice(0, 5).map((tool: string) => <span key={tool} className="text-[10px] border border-current px-2 py-1">{tool}</span>)}</div>
          <button 
            onClick={handleViewProject}
           role="link"
           tabIndex={0}
           aria-label={`${t.recruitment.viewCase}: ${project.title}`}
           onKeyDown={event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); handleViewProject(); } }}
            className="text-sm font-bold uppercase tracking-widest border-b-2 border-transparent hover:border-[var(--color-kvs-dark)] transition-colors cursor-pointer w-fit"
          >
            {t.recruitment.viewCase}
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};
