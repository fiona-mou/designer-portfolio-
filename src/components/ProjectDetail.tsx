import React, { useEffect, useState } from "react";
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
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = t.projects.find((p: any) => p.id.toString() === id);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null || !project?.gallery) return;
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
        <h1 className="text-4xl font-bold">Project not found</h1>
        <button onClick={() => navigate("/")} className="mt-4 hover:underline">
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-kvs-light)] text-[var(--color-kvs-dark)] flex flex-col relative overflow-x-hidden selection:bg-[var(--color-kvs-dark)] selection:text-[var(--color-kvs-light)]">
      <div className="fixed inset-0 pointer-events-none border-[8px] sm:border-[12px] border-[var(--color-kvs-dark)] z-[100]"></div>
      <Cursor />
      <Navbar
        onNavigate={(section) => {
          navigate(`/?section=${section}`);
        }}
      />

      <main className="w-full flex-1 pt-32 pb-24 px-6 md:px-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight uppercase">
              {project.title}
            </h1>
            <p className="text-sm uppercase tracking-widest font-serif italic max-w-xs md:text-right opacity-80">
              {project.category} / {project.year}
            </p>
          </div>

          <div className="w-full aspect-video border-2 border-[var(--color-kvs-dark)] mb-16 relative group">
            {(project.image?.includes('youtu.be') || project.image?.includes('youtube.com')) ? (
              <div className="w-full h-full pointer-events-none relative overflow-hidden bg-black">
                  <iframe
                    src={`https://www.youtube.com/embed/${project.image.split('/').pop()?.split('?')[0]}?autoplay=1&mute=1&loop=1&playlist=${project.image.split('/').pop()?.split('?')[0]}&controls=0&disablekb=1&playsinline=1`}
                    className="absolute inset-0 w-full h-full scale-[1.05]"
                    style={{ border: 'none' }}
                    allow="autoplay; encrypted-media"
                    title={project.title}
                  ></iframe>
              </div>
            ) : project.image?.endsWith(".mov") ||
            project.image?.endsWith(".mp4") ? (
              <video
                src={project.image}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover object-center"
              />
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center"
              />
            )}
          </div>

          {/* Project Details */}
          <div className="max-w-4xl mx-auto w-full flex flex-col gap-16">
            {project.overview ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t-2 border-[var(--color-kvs-dark)]">
                <div>
                  <h2 className="text-2xl font-bold uppercase tracking-widest mb-6">
                    01. Overview
                  </h2>
                  <div className="space-y-4 text-sm tracking-wide leading-relaxed">
                    {project.overview.name && (
                      <p>
                        <span className="font-bold opacity-70">Name:</span>{" "}
                        {project.overview.name}
                      </p>
                    )}
                    {project.overview.type && (
                      <p>
                        <span className="font-bold opacity-70">Type:</span>{" "}
                        {project.overview.type}
                      </p>
                    )}
                    {project.overview.scenario && (
                      <p>
                        <span className="font-bold opacity-70">Scenario:</span>{" "}
                        {project.overview.scenario}
                      </p>
                    )}
                    {project.overview.context && (
                      <p>
                        <span className="font-bold opacity-70">Context:</span>{" "}
                        {project.overview.context}
                      </p>
                    )}
                    {project.overview.team && (
                      <p>
                        <span className="font-bold opacity-70">Team:</span>{" "}
                        {project.overview.team}
                      </p>
                    )}
                    {project.overview.academic && (
                      <p>
                        <span className="font-bold opacity-70">Academic:</span>{" "}
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

            {project.gallery && (
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
                    >
                      {(img.includes('youtu.be') || img.includes('youtube.com')) ? (
                        <div className="w-full aspect-video pointer-events-none opacity-90 group-hover:opacity-100 group-hover:scale-[1.01] transition-all duration-700 block relative overflow-hidden bg-black">
                          <iframe
                            src={`https://www.youtube.com/embed/${img.split('/').pop()?.split('?')[0]}?autoplay=1&mute=1&loop=1&playlist=${img.split('/').pop()?.split('?')[0]}&controls=0&disablekb=1&playsinline=1`}
                            className="absolute inset-0 w-full h-full scale-[1.05]"
                            style={{ border: 'none' }}
                            allow="autoplay; encrypted-media"
                            title="gallery item"
                          ></iframe>
                        </div>
                      ) : img.endsWith(".mp4") || img.endsWith(".mov") ? (
                        <video
                          src={img}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.01] transition-all duration-700 block min-h-[100px]"
                        />
                      ) : (
                        <img
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
                onClick={() => navigate("/")}
                className="text-sm font-bold uppercase tracking-widest border-b-2 border-transparent hover:border-[var(--color-kvs-dark)] transition-colors cursor-pointer w-fit inline-block"
              >
                ← Back to Home
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
            className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4 md:p-10"
          >
            <div
              className="absolute inset-0 cursor-zoom-out"
              onClick={() => setLightboxIndex(null)}
            />

            {project.gallery.length > 1 && (
              <>
                <button
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
                <button
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
                <iframe
                  src={`https://www.youtube.com/embed/${project.gallery[lightboxIndex].split('/').pop()?.split('?')[0]}?autoplay=1&controls=1&rel=0`}
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 'none' }}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="gallery lightbox"
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
                alt="Lightbox"
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};
