import { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/projects';
import Skills from './components/skills';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';

function App() {
  const [isLoading, setIsLoading] = useState(true);

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