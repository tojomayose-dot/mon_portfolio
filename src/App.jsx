import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/projects';
import Skills from './components/skills';
import Contact from './components/Contact';


function App() {
  return (
    <div className="bg-bg min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;