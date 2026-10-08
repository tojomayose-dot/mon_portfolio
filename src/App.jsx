import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowUp } from 'lucide-react';
import { useTheme } from './hooks/useTheme';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/projects';
import Skills from './components/skills';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>Tojo Randrianantenaina — Dev Full-Stack</title>
        <meta
          name="description"
          content="Portfolio de Tojo Randrianantenaina, étudiant en L3 Génie Logiciel et développeur full-stack passionné par les interfaces, le backend et les produits digitaux."
        />
        <meta property="og:title" content="Tojo Randrianantenaina — Dev Full-Stack" />
        <meta
          property="og:description"
          content="Développeur full-stack en L3 Génie Logiciel, spécialisé dans le web, le design, et la création de solutions efficaces."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/photo.jpg" />
        <meta name="theme-color" content="#F8F9FA" />
      </Helmet>

      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      <div className="bg-bg min-h-screen text-text">
        <Navbar />

        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>

        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              type="button"
              aria-label="Retour en haut"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface/90 text-text shadow-lg shadow-black/5 backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-[#22D3EE]"
            >
              <ArrowUp size={18} className="text-[#22D3EE]" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;