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

function MainLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get('section');
    if (section) {
      setTimeout(() => {
        const el = document.getElementById(section);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      // clean up URL
      navigate('/', { replace: true });
    }
  }, [location, navigate]);

  const handleNavigate = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-kvs-light)] text-[var(--color-kvs-dark)] flex flex-col relative overflow-x-hidden selection:bg-[var(--color-kvs-dark)] selection:text-[var(--color-kvs-light)]">
      <div className="fixed inset-0 pointer-events-none border-[8px] sm:border-[12px] border-[var(--color-kvs-dark)] z-[100]"></div>
      <Cursor />
      <Navbar onNavigate={handleNavigate} />
      <main className="w-full flex-1 pt-24 pb-0">
        <Hero />
        <Playground />
        <Work />
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

