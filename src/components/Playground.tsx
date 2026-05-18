import React, { useRef, useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, useInView, AnimatePresence } from 'motion/react';

export const Playground: React.FC = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="playground" className="py-24 border-t border-[var(--color-kvs-dark)] bg-[var(--color-kvs-accent)]" ref={ref}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="px-6 md:px-10 mb-12 flex items-center justify-between"
      >
        <span className="text-sm font-medium uppercase tracking-widest bg-[var(--color-kvs-dark)] text-[var(--color-kvs-light)] px-3 py-1">
          {t.playground?.title || "Playground & Archive"}
        </span>
        <span className="w-full max-w-[100px] h-[2px] bg-[var(--color-kvs-dark)] ml-4 opacity-50"></span>
      </motion.div>

      <div className="px-6 md:px-10 relative">
        <div className="flex flex-col border-t border-[var(--color-kvs-dark)]">
          {t.playground?.items.map((item: any, index: number) => (
            <PlaygroundItem 
              key={item.id} 
              item={item} 
              index={index} 
              setHoveredImage={setHoveredImage} 
            />
          ))}
        </div>

        {/* Hover Image Reveal */}
        <AnimatePresence>
          {hoveredImage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="fixed pointer-events-none z-50 overflow-hidden border-2 border-[var(--color-kvs-dark)] bg-[var(--color-kvs-dark)] shadow-2xl"
              style={{
                left: mousePos.x,
                top: mousePos.y,
                width: '300px',
                height: '220px',
                transform: 'translate(-50%, -50%)',
              }}
            >
              {(hoveredImage.includes('youtu.be') || hoveredImage.includes('youtube.com')) ? (
                <div className="w-full h-full grayscale opacity-80 pointer-events-none bg-black overflow-hidden relative">
                  <iframe
                    src={`https://www.youtube.com/embed/${hoveredImage.split('/').pop()?.split('?')[0]}?autoplay=1&mute=1&loop=1&playlist=${hoveredImage.split('/').pop()?.split('?')[0]}&controls=0&disablekb=1&playsinline=1`}
                    className="absolute inset-0 w-full h-full scale-[1.4]"
                    style={{ border: 'none' }}
                    allow="autoplay; encrypted-media"
                    title="preview"
                  ></iframe>
                </div>
              ) : hoveredImage.endsWith('.mp4') || hoveredImage.endsWith('.mov') ? (
                <video 
                  src={hoveredImage} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover grayscale opacity-80"
                />
              ) : (
                <img 
                  src={hoveredImage} 
                  className="w-full h-full object-cover grayscale opacity-80"
                  alt="preview"
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

const PlaygroundItem: React.FC<{ item: any, index: number, setHoveredImage: (img: string | null) => void }> = ({ item, index, setHoveredImage }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleMouseEnter = () => {
    setHoveredImage(item.image);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((err) => console.log('Audio playback prevented:', err));
    }
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-[var(--color-kvs-dark)] border-opacity-30 hover:border-opacity-100 transition-colors group cursor-crosshair relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {item.audio && <audio ref={audioRef} src={item.audio} preload="auto" loop />}
      <div className="flex items-center gap-6 md:gap-12 w-full md:w-2/3">
        <span className="text-xs font-mono opacity-50 w-8">0{index + 1}</span>
        <h3 className="text-2xl md:text-4xl font-bold tracking-tight group-hover:italic transition-all duration-300 transform group-hover:translate-x-2">{item.title}</h3>
      </div>
      <div className="flex items-center justify-between mt-2 md:mt-0 w-full md:w-1/3">
        <span className="text-sm font-serif italic uppercase opacity-70 tracking-widest">{item.category}</span>
        <span className="text-sm opacity-50">{item.year}</span>
      </div>
    </motion.div>
  );
};
