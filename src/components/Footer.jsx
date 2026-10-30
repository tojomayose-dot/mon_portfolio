import { ArrowUp, Download, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {
  AVAILABILITY_SHORT,
  CV_URL,
  EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  SITE_NAME,
} from '../site';

const navLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Projets', href: '#projects' },
  { label: 'À propos', href: '#about' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="on-night border-t border-white/10 bg-night text-night-text">
      <div className="shell py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.7fr_1fr_1.2fr]">
          <div>
            <a
              href="#accueil"
              className="text-xl font-extrabold tracking-[-0.04em] text-white"
              aria-label={`${SITE_NAME} — retour à l'accueil`}
            >
              {SITE_NAME}
              <span className="text-brand" aria-hidden="true">
                .
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-night-muted">
              Développeur full-stack en L3 Génie Logiciel, basé à Antananarivo, Madagascar.
              Ouvert aux stages et aux missions freelance.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-night-muted">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {AVAILABILITY_SHORT}
            </p>
          </div>

          <nav aria-label="Plan du site">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-night-muted/80">
              Navigation
            </p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-night-muted transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-night-muted/80">
              Liens
            </p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2 break-words text-sm text-night-muted transition-colors duration-200 hover:text-white"
                >
                  <Mail size={14} aria-hidden="true" />
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-night-muted transition-colors duration-200 hover:text-white"
                >
                  <FaGithub size={14} aria-hidden="true" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-night-muted transition-colors duration-200 hover:text-white"
                >
                  <FaLinkedin size={14} aria-hidden="true" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={CV_URL}
                  download
                  className="inline-flex items-center gap-2 text-sm text-night-muted transition-colors duration-200 hover:text-white"
                >
                  <Download size={14} aria-hidden="true" />
                  CV (PDF)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-night-muted">
            © {year} — Tojo Randrianantenaina
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-night-muted">
            Conçu &amp; développé avec React &amp; Tailwind CSS
          </p>
          <a
            href="#accueil"
            className="inline-flex min-h-9 items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-night-muted transition-colors hover:text-white"
          >
            Retour en haut
            <ArrowUp size={13} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
