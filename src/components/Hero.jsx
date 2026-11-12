import {
  ArrowRight,
  Mail,
  MapPin,
} from 'lucide-react';
import { FaGithub, FaJava, FaLinkedin } from 'react-icons/fa';
import { SiPostgresql, SiPython, SiReact } from 'react-icons/si';
import { AVAILABILITY, EMAIL, FULL_NAME, GITHUB_URL, LINKEDIN_URL, LOCATION } from '../site';
import Reveal from './Reveal';

const techStack = [
  { name: 'React', Icon: SiReact },
  { name: 'Python', Icon: SiPython },
  { name: 'PostgreSQL', Icon: SiPostgresql },
  { name: 'Java', Icon: FaJava },
];

export default function Hero() {
  return (
    <section
      id="accueil"
      aria-labelledby="hero-title"
      className="relative bg-page overflow-hidden pb-10 pt-24 text-ink sm:pb-20 sm:pt-32 lg:pb-14 lg:pt-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="hero-halo absolute inset-0" />
        <div className="absolute inset-0" />
        <div className="absolute -left-32 top-24 h-72 w-72 rounded-full bg-soft-blue/10 blur-3xl" />
      </div>

      <div className="shell relative">
        <div className="grid items-center gap-7 sm:gap-12 lg:grid-cols-[56fr_44fr] lg:gap-10">
          {/* ─── Colonne éditoriale ─── */}
          <Reveal y={18}>
            <p className="inline-flex items-center gap-2.5 rounded-full border border-line bg-soft-yellow px-3.5 py-2 text-xs font-medium text-on-accent backdrop-blur-sm">
              <span aria-hidden="true" className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-on-accent opacity-60 motion-reduce:hidden" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-on-accent" />
              </span>
              {AVAILABILITY}
            </p>

            <p className="mt-5 text-base font-medium leading-relaxed text-muted">
              Bonjour, je suis <span className="font-bold text-ink">{FULL_NAME}</span>
            </p>

            <h1
              id="hero-title"
              className="mt-3 max-w-xl text-[clamp(2.1rem,5vw,3.6rem)] font-bold leading-[1.08] tracking-[-0.045em] text-ink"
            >
              Développeur <span className="hero-signature whitespace-nowrap text-ink">full-stack.</span>
            </h1>

            <p className="mt-4 sm:mt-6 max-w-[36rem] text-base leading-relaxed text-muted sm:text-[17px]">
              Des idées aux applications concrètes. Étudiant en L3 Génie Logiciel, je développe
              des interfaces intuitives et les systèmes qui les font fonctionner.
            </p>

            <div className="mt-5 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <a href="#projects" className="btn btn-primary min-h-12 px-5 sm:px-6">
                Voir mes projets
                <ArrowRight size={17} aria-hidden="true" />
              </a>
              <a href="#contact" className="btn btn-night-outline min-h-12 px-5 sm:px-6">
                Me contacter
              </a>
            </div>

            <div className="mt-5 sm:mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 pt-2 text-[13px] text-muted">
              <span className="inline-flex items-center gap-2">
                <MapPin size={15} className="text-ink" aria-hidden="true" />
                {LOCATION}
              </span>
              <span className="hidden h-4 w-px bg-surface/15 sm:block" aria-hidden="true" />

              <span className="flex items-center gap-1.5">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Profil GitHub de Tojo (nouvel onglet)"
                  className="flex h-11 w-11 items-center justify-center rounded-full text-muted transition-colors hover:bg-accent hover:text-on-accent"
                >
                  <FaGithub size={18} aria-hidden="true" />
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Profil LinkedIn de Tojo (nouvel onglet)"
                  className="flex h-11 w-11 items-center justify-center rounded-full text-muted transition-colors hover:bg-accent hover:text-on-accent"
                >
                  <FaLinkedin size={18} aria-hidden="true" />
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  aria-label="Envoyer un email à Tojo"
                  className="flex h-11 w-11 items-center justify-center rounded-full text-muted transition-colors hover:bg-accent hover:text-on-accent"
                >
                  <Mail size={18} aria-hidden="true" />
                </a>
              </span>
            </div>
          </Reveal>

          {/* ─── Portrait et technologies principales ─── */}
          <Reveal delay={0.12} y={22} className="relative mx-auto w-full max-w-[240px] sm:max-w-[390px] lg:mr-10">
            <div className="relative">
              <div className="portrait-stage relative overflow-hidden">
                <img
                  src="/portrait-detoure.png"
                  sizes="(min-width: 640px) 390px, (max-width: 399px) calc(100vw - 40px), 360px"
                  alt="Portrait de Tojo Randrianantenaina"
                  width="1122"
                  height="1402"
                  fetchPriority="high"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover object-center sm:aspect-[4/5] lg:aspect-[4/5]"
                />
              </div>

              {/* Carte technologies */}
              <div className="relative bg-surface px-3 py-3 sm:p-4">
                <p className="text-xs font-medium text-muted">
                  Technologies principales
                </p>
                <ul className="mt-2.5 flex items-center gap-2.5 sm:gap-3" aria-label="Technologies principales">
                  {techStack.map(({ name, Icon }) => (
                    <li key={name} title={name}>
                      <span
                        className="flex h-9 w-9 items-center justify-center rounded-lg sm:h-10 sm:w-10"
                        aria-hidden="true"
                      >
                        <Icon size={21} className="text-ink" />
                      </span>
                      <span className="sr-only">{name}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
