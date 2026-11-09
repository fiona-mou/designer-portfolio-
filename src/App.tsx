import { LanguageProvider } from './context/LanguageContext';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Cursor } from './components/Cursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Work } from './components/Work';
import { Playground } from './components/Playground';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { ProjectDetail } from './components/ProjectDetail';
import { Skills } from './components/Skills';
import { Recognition } from './components/Recognition';
import { Experience } from './components/Experience';
import { useLanguage } from './context/LanguageContext';

function MainLayout() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const section = location.hash.slice(1) || new URLSearchParams(location.search).get('section');
    if (section) {
      const frame = requestAnimationFrame(() => {
        const el = document.getElementById(section);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      });
      return () => cancelAnimationFrame(frame);
    }
  }, [location.hash, location.search, location.key]);

  const handleNavigate = (sectionId: string) => {
    navigate(`/#${sectionId}`);
  };

  return (
    <div className="min-h-screen bg-[var(--color-kvs-light)] text-[var(--color-kvs-dark)] flex flex-col relative overflow-x-hidden selection:bg-[var(--color-kvs-dark)] selection:text-[var(--color-kvs-light)]">
      <div className="fixed inset-0 pointer-events-none border-[8px] sm:border-[12px] border-[var(--color-kvs-dark)] z-[100]"></div>
      <a href="#main-content" className="skip-link">{t.recruitment.skip}</a>
      <Cursor />
      <Navbar onNavigate={handleNavigate} />
      <main id="main-content" className="w-full flex-1 pt-20 md:pt-24 pb-0">
        <Hero />
        <Work />
        <Playground />
        <Skills />
        <Recognition />
        <Experience />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

