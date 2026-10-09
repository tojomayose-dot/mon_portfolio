import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowUp } from 'lucide-react';
import { useTheme } from './hooks/useTheme';
import Hero from './components/Hero';
import Editorial from './components/Editorial';
import Skills from './components/skills';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
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

      <div className="bg-bg min-h-screen text-text">
        <Navbar />

        <main>
          <Hero />
          <Editorial />
          <Skills />
          <Contact />
        </main>

        {showBackToTop && (
          <button
            type="button"
            aria-label="Retour en haut"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface/90 text-text shadow-lg shadow-black/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-accent"
          >
            <ArrowUp size={18} className="text-accent" />
          </button>
        )}
      </div>
    </>
  );
}

export default App;