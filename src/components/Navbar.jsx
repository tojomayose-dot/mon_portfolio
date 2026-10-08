import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import ThemeToggle from './ThemeToogle';

const links = [
  { label: 'about', href: '#about' },
  { label: 'projects', href: '#projects' },
  { label: 'skills', href: '#skills' },
  { label: 'contact', href: '#contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = links.map(l => l.href.replace('#', ''));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 150) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.5 }}
      className={`fixed top-0 left-0 right-0 z-40 px-6 py-4 flex items-center justify-between transition-all duration-300 ${
        scrolled ? 'bg-bg/80 backdrop-blur-md border-b border-border' : ''
      }`}
    >
      <span className="font-mono text-sm text-accent">~/portfolio</span>

      <div className="flex items-center gap-8">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`font-mono text-xs tracking-wider transition-colors relative ${
              active === link.href.replace('#', '')
                ? 'text-accent'
                : 'text-text-muted hover:text-text'
            }`}
          >
            {link.label}
            {active === link.href.replace('#', '') && (
              <motion.div
                layoutId="nav-indicator"
                className="absolute -bottom-1 left-0 right-0 h-px bg-accent"
              />
            )}
          </a>
        ))}

        {/* Toggle ici */}
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </motion.nav>
  );
}