import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import ThemeToggle from './ThemeToggle';

const links = [
  { label: 'à propos', href: '#about' },
  { label: 'projets', href: '#projects' },
  { label: 'compétences', href: '#skills' },
  { label: 'contact', href: '#contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = links.map((link) => link.href.replace('#', ''));

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

  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 px-4 py-4 transition-all duration-300 md:px-6 ${
        scrolled ? 'bg-bg/80 backdrop-blur-md border-b border-border' : ''
      }`}
    >
      <div className="relative mx-auto flex max-w-7xl items-center justify-between">
        <span className="font-mono text-sm text-accent">~/portfolio</span>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative font-mono text-xs tracking-[0.18em] uppercase transition-colors duration-300 ${
                active === link.href.replace('#', '') ? 'text-accent' : 'text-text-muted hover:text-text'
              }`}
            >
              {link.label}
              {active === link.href.replace('#', '') && (
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-accent transition-all duration-300" />
              )}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setIsOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/80 text-text transition-colors duration-300 hover:border-accent md:hidden"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="mx-4 mt-3 rounded-2xl border border-border bg-surface/95 p-3 shadow-xl backdrop-blur-xl">
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`rounded-lg px-3 py-2 font-mono text-xs uppercase tracking-[0.18em] transition-colors duration-300 ${
                    active === link.href.replace('#', '') ? 'bg-accent/10 text-accent' : 'text-text-muted hover:text-text'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}