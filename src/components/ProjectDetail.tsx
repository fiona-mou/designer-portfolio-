import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { Navbar } from "./Navbar";
import { Cursor } from "./Cursor";
import { Footer } from "./Footer";
import { motion, AnimatePresence } from "motion/react";

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const lightboxRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = t.projects.find((p: any) => p.id.toString() === id || p.slug === id);

  useEffect(() => {
    if (!project) return;
    document.title = `${project.title} — Fangyu Mou`;
    document.querySelector('meta[name="description"]')?.setAttribute('content', project.meta.summary);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', document.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', project.meta.summary);
    const cover = project.image.match(/\.(mov|mp4)$/i) ? project.gallery?.find(image => /\.(png|jpe?g|webp)$/i.test(image)) || '/logo.png' : project.image;
    document.querySelector('meta[property="og:image"]')?.setAttribute('content', new URL(cover, window.location.origin).href);
  }, [project]);
  useEffect(() => {
    if (lightboxIndex === null) return;
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    lightboxRef.current?.querySelector<HTMLButtonElement>('button')?.focus();
    return () => { document.body.style.overflow = overflow; previous?.focus(); };
  }, [lightboxIndex !== null]);
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null || !project?.gallery) return;
      if (e.key === 'Tab') {
        const buttons = lightboxRef.current?.querySelectorAll<HTMLButtonElement>('button');
        if (buttons?.length) {
          const first = buttons[0], last = buttons[buttons.length - 1];
          if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
          else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
        }
      }
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight")
        setLightboxIndex((prev) => (prev! + 1) % project.gallery.length);
      if (e.key === "ArrowLeft")
        setLightboxIndex(
          (prev) =>
            (prev! - 1 + project.gallery.length) % project.gallery.length,
        );
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[var(--color-kvs-light)] text-[var(--color-kvs-dark)] flex items-center justify-center">
        <h1 className="text-4xl font-bold">{t.recruitment.notFound}</h1>
        <button onClick={() => navigate("/")} className="mt-4 hover:underline">
          {t.recruitment.back}
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-kvs-light)] text-[var(--color-kvs-dark)] flex flex-col relative overflow-x-hidden selection:bg-[var(--color-kvs-dark)] selection:text-[var(--color-kvs-light)]">
      <div className="fixed inset-0 pointer-events-none border-[8px] sm:border-[12px] border-[var(--color-kvs-dark)] z-[100]"></div>
      <a href="#project-content" className="skip-link">{t.recruitment.skip}</a>
      <Cursor />
      <Navbar
        onNavigate={(section) => {
          navigate(`/#${section}`);
        }}
      />

      <main id="project-content" className="w-full flex-1 pt-32 pb-24 px-6 md:px-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight uppercase break-words min-w-0">
              {project.title}
            </h1>
            <p className="text-sm uppercase tracking-widest font-serif italic max-w-xs md:text-right opacity-80">
              {project.category} / {project.year}
            </p>
          </div>

          <p className="text-xl md:text-2xl font-serif italic leading-relaxed max-w-3xl mb-8">{project.meta.summary}</p>
          <div className="flex flex-wrap gap-4 mb-10">
            <a href="#project-overview" className="portfolio-button">{t.recruitment.overview} ↓</a>
            {project.meta.liveUrl && <a className="portfolio-button" href={project.meta.liveUrl} target="_blank" rel="noreferrer">{project.liveLabel || t.recruitment.live} ↗</a>}
          </div>
          <div className="w-full aspect-video border-2 border-[var(--color-kvs-dark)] mb-16 relative group">
            {(project.image?.includes('youtu.be') || project.image?.includes('youtube.com')) ? (
              <div className="w-full h-full pointer-events-none relative overflow-hidden bg-black">
                  <iframe loading="lazy"
                    src={`https://www.youtube.com/embed/${project.image.split('/').pop()?.split('?')[0]}?autoplay=1&mute=1&loop=1&playlist=${project.image.split('/').pop()?.split('?')[0]}&controls=0&disablekb=1&playsinline=1`}
                    className="absolute inset-0 w-full h-full scale-[1.05]"
                    style={{ border: 'none' }}
                    allow="autoplay; encrypted-media"
                    title={project.title}
                  ></iframe>
              </div>
            ) : project.image?.endsWith(".mov") ||
            project.image?.endsWith(".mp4") ? (
              <video preload="metadata"
                src={project.image}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover object-center"
              />
            ) : (
              <img loading="lazy" decoding="async"
                src={project.image}
                alt={project.title}
                className={`w-full h-full object-center ${project.imageFit === 'contain' ? 'object-contain' : 'object-cover'}`}
              />
            )}
          </div>

          <dl className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 border-t border-b border-current py-8 mb-16 text-sm leading-relaxed">
            {([['type', project.meta.type], ['role', project.meta.role], ['team', project.meta.team], ['year', project.year], ['tools', project.meta.tools.join(' · ')], ['deliverables', project.meta.deliverables]] as const).map(([label, value]) => <div key={label}><dt className="uppercase text-[10px] tracking-widest opacity-65 mb-2">{t.recruitment[label]}</dt><dd>{value}</dd></div>)}
          </dl>
          {/* Project Details */}
          <div className="max-w-4xl mx-auto w-full flex flex-col gap-16">
            {project.overview ? (
              <div id="project-overview" className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t-2 border-[var(--color-kvs-dark)]">
                <div>
                  <h2 className="text-2xl font-bold uppercase tracking-widest mb-6">
                    01. {t.recruitment.overview}
                  </h2>
                  <div className="space-y-4 text-sm tracking-wide leading-relaxed">
                    {project.overview.name && <p className="font-bold">{project.overview.name}</p>}
                    {project.overview.type && (
                      <p>
                        <span className="font-bold opacity-70">{t.recruitment.type}:</span>{" "}
                        {project.overview.type}
                      </p>
                    )}
                    {project.overview.scenario && (
                      <p>
                        <span className="font-bold opacity-70">{t.recruitment.overview}:</span>{" "}
                        {project.overview.scenario}
                      </p>
                    )}
                    {project.overview.context && (
                      <p>
                        <span className="font-bold opacity-70">{t.recruitment.overview}:</span>{" "}
                        {project.overview.context}
                      </p>
                    )}
                    {project.overview.team && (
                      <p>
                        <span className="font-bold opacity-70">{t.recruitment.team}:</span>{" "}
                        {project.overview.team}
                      </p>
                    )}
                    {project.overview.academic && (
                      <p>
                        <span className="font-bold opacity-70">{t.recruitment.type}:</span>{" "}
                        {project.overview.academic}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex items-center">
                  <p className="text-xl md:text-2xl font-serif italic leading-relaxed">
                    {project.overview.intro ? `"${project.overview.intro}"` : project.overview.goal}
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-lg leading-relaxed max-w-3xl">
                Details and description for {project.title} can be added here.
                (Project specific content is not fully provided yet.)
              </p>
            )}

            {project.caseSections?.map((section, sectionIndex) => <section key={section.title} className="flex flex-col gap-7">
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight border-b-2 border-dotted border-current pb-3">{String(sectionIndex + 2).padStart(2, '0')}. {section.title}</h2>
              {section.points.map(point => <p key={point} className="text-lg leading-relaxed opacity-85">{point}</p>)}
              {section.links && <div className="flex flex-wrap gap-4">{section.links.map(link => <a key={link.url} className="portfolio-button" href={link.url} target="_blank" rel="noreferrer">{link.label} ↗</a>)}</div>}
              {section.images && <div className={`grid gap-6 ${section.images.length > 1 ? 'md:grid-cols-2' : ''}`}>{section.images.map(image => <figure key={image.src} className={`case-figure ${image.src.includes('mobile') ? 'max-w-[390px] mx-auto' : ''}`}>
                <button type="button" className="block w-full cursor-zoom-in" aria-label={image.alt} onClick={() => setLightboxIndex(project.gallery!.indexOf(image.src))}><img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" decoding="async" /></button>
                <figcaption>{image.caption}</figcaption>
              </figure>)}</div>}
            </section>)}
            {project.sections &&
              project.sections.map((section: any, idx: number) => (
                <div key={idx} className="flex flex-col gap-6">
                  <h2 className="text-2xl font-bold uppercase tracking-widest border-b-2 border-dotted border-[var(--color-kvs-dark)] pb-2 inline-block w-fit">
                    {section.title}
                  </h2>
                  <ul className="space-y-4">
                    {section.points.map((point: string, pIdx: number) => {
                      const splitPoint = point.split("：");
                      const hasColon = splitPoint.length > 1;
                      const enSplitPoint = point.split(": ");
                      const hasEnColon = enSplitPoint.length > 1 && !hasColon;

                      if (hasColon) {
                        return (
                          <li
                            key={pIdx}
                            className="text-lg leading-relaxed flex flex-col sm:flex-row gap-2"
                          >
                            <span className="font-bold shrink-0">
                              {splitPoint[0]}：
                            </span>
                            <span className="opacity-80">
                              {splitPoint.slice(1).join("：")}
                            </span>
                          </li>
                        );
                      } else if (hasEnColon) {
                        return (
                          <li
                            key={pIdx}
                            className="text-lg leading-relaxed flex flex-col sm:flex-row gap-2"
                          >
                            <span className="font-bold shrink-0">
                              {enSplitPoint[0]}:{" "}
                            </span>
                            <span className="opacity-80">
                              {enSplitPoint.slice(1).join(": ")}
                            </span>
                          </li>
                        );
                      } else {
                        return (
                          <li
                            key={pIdx}
                            className="text-lg leading-relaxed opacity-80"
                          >
                            {point}
                          </li>
                        );
                      }
                    })}
                  </ul>
                </div>
              ))}

            {project.gallery && !project.caseSections && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-8">
                {project.gallery.map((img: string, i: number) => {
                  let colSpan = "md:col-span-12";
                  if (project.gallery.length === 4) {
                    if (i === 0) colSpan = "md:col-span-12";
                    else if (i === 1) colSpan = "md:col-span-7";
                    else if (i === 2) colSpan = "md:col-span-5";
                    else if (i === 3) colSpan = "md:col-span-12";
                  } else if (project.gallery.length > 1) {
                    colSpan = i % 3 === 0 ? "md:col-span-12" : "md:col-span-6";
                  }
                  return (
                    <div
                      key={i}
                      className={`w-full bg-[var(--color-kvs-dark)]/5 border-2 border-[var(--color-kvs-dark)]/10 hover:border-[var(--color-kvs-dark)] transition-all overflow-hidden group cursor-pointer flex flex-col ${colSpan}`}
                      onClick={() => setLightboxIndex(i)}
                      role="button" tabIndex={0} aria-label={`${project.title} ${i + 1}`}
                      onKeyDown={event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); setLightboxIndex(i); } }}
                    >
                      {(img.includes('youtu.be') || img.includes('youtube.com')) ? (
                        <div className="w-full aspect-video pointer-events-none opacity-90 group-hover:opacity-100 group-hover:scale-[1.01] transition-all duration-700 block relative overflow-hidden bg-black">
                          <iframe loading="lazy"
                            src={`https://www.youtube.com/embed/${img.split('/').pop()?.split('?')[0]}?autoplay=1&mute=1&loop=1&playlist=${img.split('/').pop()?.split('?')[0]}&controls=0&disablekb=1&playsinline=1`}
                            className="absolute inset-0 w-full h-full scale-[1.05]"
                            style={{ border: 'none' }}
                            allow="autoplay; encrypted-media"
                            title={project.title}
                          ></iframe>
                        </div>
                      ) : img.endsWith(".mp4") || img.endsWith(".mov") ? (
                        <video preload="metadata"
                          src={img}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.01] transition-all duration-700 block min-h-[100px]"
                        />
                      ) : (
                        <img loading="lazy" decoding="async"
                          src={img}
                          alt={`${project.title} context ${i + 1}`}
                          className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.01] transition-all duration-700 block min-h-[100px]"
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            <div className="pt-20 text-center">
              <button
                onClick={() => navigate("/?section=all-projects")}
                className="text-sm font-bold uppercase tracking-widest border-b-2 border-transparent hover:border-[var(--color-kvs-dark)] transition-colors cursor-pointer w-fit inline-block"
              >
                ← {t.recruitment.back}
              </button>
            </div>
          </div>
        </motion.div>
      </main>

      <AnimatePresence>
        {lightboxIndex !== null && project?.gallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            ref={lightboxRef}
            role="dialog" aria-modal="true" aria-label={project.title}
            className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4 md:p-10"
          >
            <button type="button" aria-label={t.recruitment.close} onClick={() => setLightboxIndex(null)} className="absolute top-6 right-6 z-[203] text-white border border-white min-w-11 min-h-11 text-2xl">×</button>
            <div
              className="absolute inset-0 cursor-zoom-out"
              onClick={() => setLightboxIndex(null)}
            />

            {project.gallery.length > 1 && (
              <>
                <button aria-label={t.recruitment.previous}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex(
                      (prev) =>
                        (prev! - 1 + project.gallery.length) %
                        project.gallery.length,
                    );
                  }}
                  className="absolute left-4 md:left-10 text-white p-4 hover:bg-white/10 rounded-full transition-colors z-[202]"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button aria-label={t.recruitment.next}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex(
                      (prev) => (prev! + 1) % project.gallery.length,
                    );
                  }}
                  className="absolute right-4 md:right-10 text-white p-4 hover:bg-white/10 rounded-full transition-colors z-[202]"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </>
            )}

            {(project.gallery[lightboxIndex].includes('youtu.be') || project.gallery[lightboxIndex].includes('youtube.com')) ? (
              <motion.div
                key={lightboxIndex}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="w-full max-w-[80vw] aspect-video relative z-[201] overflow-hidden bg-black"
              >
                <iframe loading="lazy"
                  src={`https://www.youtube.com/embed/${project.gallery[lightboxIndex].split('/').pop()?.split('?')[0]}?autoplay=1&controls=1&rel=0`}
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 'none' }}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title={project.title}
                ></iframe>
              </motion.div>
            ) : project.gallery[lightboxIndex].endsWith(".mp4") ||
            project.gallery[lightboxIndex].endsWith(".mov") ? (
              <motion.video
                key={lightboxIndex}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                src={project.gallery[lightboxIndex]}
                autoPlay
                muted
                loop
                playsInline
                className="max-w-full max-h-full object-contain shadow-2xl relative z-[201] select-none"
              />
            ) : (
              <motion.img
                key={lightboxIndex}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                src={project.gallery[lightboxIndex]}
                className="max-w-full max-h-full object-contain shadow-2xl relative z-[201] select-none"
                alt={`${project.title} · ${lightboxIndex + 1}`}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};
