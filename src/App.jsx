import { useEffect, useState } from 'react';
import { useTheme } from './hooks/useTheme';
import Hero from './components/Hero';
import Editorial from './components/Editorial';
import Skills from './components/skills';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

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
    <div className="bg-bg min-h-screen text-text">
      <Navbar />

      <main>
        <Hero />
        <Editorial />
        <Skills />
        <Contact />
      </main>

      <Footer />

      <BackToTop visible={showBackToTop} />
    </div>
  );
}

export default App;
