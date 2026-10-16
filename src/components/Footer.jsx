import { Download, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { CV_URL, EMAIL, GITHUB_URL, LINKEDIN_URL } from '../site';

const navLinks = [
  { label: 'À propos', href: '#about' },
  { label: 'Projets', href: '#projects' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto max-w-6xl px-6 pb-16">
      <div className="border-t border-border pt-12">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <span className="font-mono text-sm text-accent-ink">~/portfolio</span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-muted">
              Développeur full-stack en L3 Génie Logiciel, basé à Antananarivo, Madagascar.
              Ouvert aux stages et aux missions freelance.
            </p>
          </div>

          <nav aria-label="Plan du site">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-text-muted">
              Navigation
            </p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-muted transition-colors duration-300 hover:text-accent-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-text-muted">
              Liens
            </p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2 text-sm text-text-muted transition-colors duration-300 hover:text-accent-ink"
                >
                  <Mail size={14} />
                  Email
                </a>
              </li>
              <li>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-text-muted transition-colors duration-300 hover:text-accent-ink"
                >
                  <FaGithub size={14} />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-text-muted transition-colors duration-300 hover:text-accent"
                >
                  <FaLinkedin size={14} />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={CV_URL}
                  download
                  className="inline-flex items-center gap-2 text-sm text-text-muted transition-colors duration-300 hover:text-accent-ink"
                >
                  <Download size={14} />
                  CV (PDF)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted">
            © {year} — Tojo Randrianantenaina
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted">
            Conçu &amp; développé avec React &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
