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
  { name: 'React', Icon: SiReact, color: '#61DAFB' },
  { name: 'Python', Icon: SiPython, color: '#5BA7E8' },
  { name: 'PostgreSQL', Icon: SiPostgresql, color: '#7BA7F5' },
  { name: 'Java', Icon: FaJava, color: '#F89820' },
];

export default function Hero() {
  return (
    <section
      id="accueil"
      aria-labelledby="hero-title"
      className="on-night relative overflow-hidden bg-night pb-16 pt-28 text-night-text sm:pb-20 sm:pt-32 lg:pb-14 lg:pt-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="hero-halo absolute inset-0" />
        <div className="hero-grid absolute inset-0 opacity-60" />
        <div className="absolute -left-32 top-24 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />
      </div>

      <div className="shell relative">
        <div className="grid items-center gap-12 lg:grid-cols-[56fr_44fr] lg:gap-10">
          {/* ─── Colonne éditoriale ─── */}
          <Reveal y={18}>
            <p className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-2 text-xs font-medium text-night-text backdrop-blur-sm">
              <span aria-hidden="true" className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:hidden" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {AVAILABILITY}
            </p>

            <p className="mt-7 text-sm font-medium leading-relaxed text-night-muted">
              Bonjour, je suis <span className="text-white">{FULL_NAME}</span>
            </p>

            <h1
              id="hero-title"
              className="mt-3 max-w-xl text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-[1.08] tracking-[-0.045em] text-white"
            >
              Développeur <span className="whitespace-nowrap text-brand-light">full-stack.</span>
            </h1>

            <p className="mt-6 max-w-[36rem] text-base leading-relaxed text-night-muted sm:text-[17px]">
              Des idées aux applications concrètes. Étudiant en L3 Génie Logiciel, je développe
              des interfaces intuitives et les systèmes qui les font fonctionner.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <a href="#projects" className="btn btn-primary min-h-12 px-5 sm:px-6">
                Voir mes projets
                <ArrowRight size={17} aria-hidden="true" />
              </a>
              <a href="#contact" className="btn btn-night-outline min-h-12 px-5 sm:px-6">
                Me contacter
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 pt-2 text-[13px] text-night-muted">
              <span className="inline-flex items-center gap-2">
                <MapPin size={15} className="text-brand-light" aria-hidden="true" />
                {LOCATION}
              </span>
              <span className="hidden h-4 w-px bg-white/15 sm:block" aria-hidden="true" />

              <span className="flex items-center gap-1.5">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Profil GitHub de Tojo (nouvel onglet)"
                  className="flex h-11 w-11 items-center justify-center rounded-full text-night-muted transition-colors hover:bg-white/[0.06] hover:text-white"
                >
                  <FaGithub size={18} aria-hidden="true" />
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Profil LinkedIn de Tojo (nouvel onglet)"
                  className="flex h-11 w-11 items-center justify-center rounded-full text-night-muted transition-colors hover:bg-white/[0.06] hover:text-white"
                >
                  <FaLinkedin size={18} aria-hidden="true" />
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  aria-label="Envoyer un email à Tojo"
                  className="flex h-11 w-11 items-center justify-center rounded-full text-night-muted transition-colors hover:bg-white/[0.06] hover:text-white"
                >
                  <Mail size={18} aria-hidden="true" />
                </a>
              </span>
            </div>
          </Reveal>

          {/* ─── Portrait et technologies principales ─── */}
          <Reveal delay={0.12} y={22} className="relative mx-auto w-full max-w-[360px] sm:max-w-[390px] lg:mr-10">
            <div
              aria-hidden="true"
              className="absolute -inset-5 rounded-[32px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.28),transparent_68%)] blur-2xl"
            />
            <div
              aria-hidden="true"
              className="absolute -right-3 top-8 hidden h-[88%] w-2/3 rounded-[28px] border border-brand/25 bg-brand/[0.08] lg:block"
            />

            <div className="relative rounded-[20px] border border-white/10 bg-brand/10 p-1.5 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)] backdrop-blur-sm">
              <div className="relative overflow-hidden rounded-[18px] bg-night-surface">
                <img
                  src="/portrait-800.webp"
                  srcSet="/portrait-480.webp 480w, /portrait-800.webp 800w"
                  sizes="(min-width: 640px) 390px, (max-width: 399px) calc(100vw - 40px), 360px"
                  alt="Portrait de Tojo Randrianantenaina"
                  width="1122"
                  height="1402"
                  fetchPriority="high"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover object-center sm:aspect-[4/5] lg:aspect-[4/5]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-night via-night/35 to-transparent"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-brand/20 mix-blend-multiply"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-tr from-brand/20 via-transparent to-transparent"
                />
              </div>

              {/* Carte technologies */}
              <div className="absolute bottom-3 inset-x-3 sm:inset-x-4 rounded-xl border border-white/10 bg-night-surface/90 p-3 shadow-2xl shadow-black/40 backdrop-blur-md sm:bottom-4 sm:p-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-night-muted">
                  Technologies principales
                </p>
                <ul className="mt-2.5 flex items-center gap-2.5 sm:gap-3" aria-label="Technologies principales">
                  {techStack.map(({ name, Icon, color }) => (
                    <li key={name} title={name}>
                      <span
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] sm:h-10 sm:w-10"
                        aria-hidden="true"
                      >
                        <Icon size={21} style={{ color }} />
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
