import { useEffect, useState } from 'react';
import { useTheme } from './hooks/useTheme';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/skills';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 480);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    /* Évite que le bouton flottant recouvre les champs du formulaire. */
    const form = document.getElementById('contact-form');
    const observer = form
      ? new IntersectionObserver(([entry]) => setFormVisible(entry.isIntersecting))
      : null;
    observer?.observe(form);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer?.disconnect();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-page text-ink">
      <a
        href="#main-content"
        className="sr-only z-[60] rounded-btn bg-white px-4 py-3 text-sm font-semibold text-night shadow-lg focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Aller au contenu principal
      </a>

      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>

      <Footer />

      <BackToTop visible={showBackToTop && !formVisible} />
    </div>
  );
}

export default App;
