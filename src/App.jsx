import { useState } from 'react';
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
  useTheme(); // initialise le thème dès le démarrage

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <div className="bg-bg min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </>
  );
}

export default App;