import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import { CV_URL, SITE_NAME } from '../site';
import ThemeToggle from './ThemeToggle';

const links = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Projets', href: '#projects' },
  { label: 'À propos', href: '#about' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const SCROLL_OFFSET = 120;

export default function Navbar({ theme, toggleTheme }) {
  const [active, setActive] = useState('accueil');
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const reducedMotion = useReducedMotion();
  const toggleRef = useRef(null);
  const menuRef = useRef(null);

  /* Scrollspy : la section dont le haut a dépassé la navbar devient active. */
  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 16);

      let current = 'accueil';
      for (const link of links) {
        const id = link.href.slice(1);
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= SCROLL_OFFSET) {
          current = id;
        }
      }
      setActive(current);
    };

    const handleScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  /* Menu mobile : Échap, piège de focus, verrouillage du scroll. */
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const focusables = () => {
      const node = menuRef.current;
      if (!node) return [];
      return Array.from(
        node.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'),
      );
    };

    // Laisse le temps à AnimatePresence de monter le panneau avant le focus.
    const focusTimer = window.setTimeout(() => focusables()[0]?.focus(), 40);

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setIsOpen(false);
        window.requestAnimationFrame(() => toggleRef.current?.focus());
        return;
      }

      if (event.key !== 'Tab') return;

      const items = focusables();
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  /* Fermeture automatique si la fenêtre repasse en desktop. */
  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)');
    const handleChange = (event) => {
      if (event.matches) setIsOpen(false);
    };

    media.addEventListener('change', handleChange);
    return () => media.removeEventListener('change', handleChange);
  }, []);

  const navLinkClass = (isActive) =>
    `relative inline-flex items-center py-2 text-sm font-medium transition-colors duration-200 ${
      isActive ? 'text-ink' : 'text-muted hover:text-ink'
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`border-b transition-colors duration-300 ${
          scrolled || isOpen
            ? 'border-line bg-surface shadow-card'
            : 'border-transparent bg-surface backdrop-blur-md'
        }`}
      >
        <nav aria-label="Navigation principale" className="shell flex h-[72px] items-center justify-between gap-4">
          <a
            href="#accueil"
            onClick={() => setIsOpen(false)}
            aria-label={`${SITE_NAME} — retour à l'accueil`}
            className="shrink-0 text-xl font-extrabold tracking-[-0.04em] text-ink"
          >
            {SITE_NAME}
            <span className="text-ink" aria-hidden="true">
              .
            </span>
          </a>

          <ul className="hidden items-center gap-7 lg:flex">
            {links.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? 'location' : undefined}
                    className={navLinkClass(isActive)}
                  >
                    {link.label}
                    {isActive &&
                      (reducedMotion ? (
                        <span className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-accent" />
                      ) : (
                        <motion.span
                          layoutId="nav-active-indicator"
                          transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                          className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-accent"
                        />
                      ))}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

            <a
              href={CV_URL}
              download
              className="btn btn-outline min-h-10 rounded-[10px] px-2.5 py-2 text-[13px] sm:gap-2 sm:px-4"
            >
              <Download size={15} aria-hidden="true" />
              <span className="hidden sm:inline">Télécharger CV</span>
              <span className="sm:hidden">CV</span>
            </a>

            <button
              ref={toggleRef}
              type="button"
              aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsOpen((value) => !value)}
              className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-line bg-surface/[0.04] text-ink transition-colors duration-200 hover:border-control hover:bg-accent hover:text-on-accent lg:hidden"
            >
              {isOpen ? <X size={19} aria-hidden="true" /> : <Menu size={19} aria-hidden="true" />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={reducedMotion ? false : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: reducedMotion ? 0 : 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 bottom-0 top-[72px] z-40 overflow-y-auto border-t border-line bg-surface backdrop-blur-xl lg:hidden"
          >
            <div ref={menuRef} className="shell flex min-h-full flex-col py-6">
              <nav aria-label="Navigation mobile">
                <ul className="flex flex-col gap-1">
                  {links.map((link) => {
                    const isActive = active === link.href.slice(1);
                    return (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          aria-current={isActive ? 'location' : undefined}
                          className={`flex min-h-12 items-center rounded-[10px] px-4 text-lg font-semibold transition-colors ${
                            isActive
                              ? 'bg-accent text-on-accent'
                              : 'text-muted hover:bg-accent hover:text-on-accent'
                          }`}
                        >
                          {link.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="mt-8 border-t border-line pt-6">
                <a href={CV_URL} download className="btn btn-primary w-full">
                  <Download size={16} aria-hidden="true" />
                  Télécharger mon CV
                </a>
                <p className="mt-5 text-center font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                  Antananarivo · Madagascar
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
