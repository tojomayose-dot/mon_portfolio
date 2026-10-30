import {
  ArrowRight,
  BriefcaseBusiness,
  Mail,
  MapPin,
} from 'lucide-react';
import { FaGithub, FaJava, FaLinkedin } from 'react-icons/fa';
import { SiPostgresql, SiPython, SiReact } from 'react-icons/si';
import { AVAILABILITY, AVAILABILITY_SHORT, EMAIL, GITHUB_URL, LINKEDIN_URL } from '../site';
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

            <h1
              id="hero-title"
              className="mt-7 text-[clamp(2.2rem,4.2vw,3.4rem)] font-extrabold leading-[1.08] tracking-[-0.045em] text-white"
            >
              Développeur<br />
              <span className="whitespace-nowrap">Full-Stack.</span>
              <br />
              Des idées aux
              <br />
              <span className="text-brand">applications concrètes.</span>
            </h1>

            <p className="mt-6 max-w-[36rem] text-base leading-relaxed text-night-muted sm:text-[17px]">
              Étudiant en L3 Génie Logiciel, je conçois et développe des applications web en
              alliant interfaces intuitives, architectures robustes et technologies modernes.
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
                Antananarivo, Madagascar
              </span>
              <span className="hidden h-4 w-px bg-white/15 sm:block" aria-hidden="true" />
              <span className="inline-flex items-center gap-2">
                <BriefcaseBusiness size={15} className="text-brand-light" aria-hidden="true" />
                {AVAILABILITY_SHORT}
              </span>

              <span className="hidden h-4 w-px bg-white/15 md:block" aria-hidden="true" />

              <span className="flex items-center gap-1.5">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Profil GitHub de Tojo (nouvel onglet)"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-night-muted transition-colors hover:bg-white/[0.06] hover:text-white"
                >
                  <FaGithub size={18} aria-hidden="true" />
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Profil LinkedIn de Tojo (nouvel onglet)"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-night-muted transition-colors hover:bg-white/[0.06] hover:text-white"
                >
                  <FaLinkedin size={18} aria-hidden="true" />
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  aria-label="Envoyer un email à Tojo"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-night-muted transition-colors hover:bg-white/[0.06] hover:text-white"
                >
                  <Mail size={18} aria-hidden="true" />
                </a>
              </span>
            </div>
          </Reveal>

          {/* ─── Portrait et cartes flottantes ─── */}
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
                  src="/photo.png"
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

              {/* Carte projets complets */}
              <div className="animate-float absolute -left-3 top-10 w-[140px] rounded-2xl border border-white/10 bg-night-surface/90 p-3.5 shadow-2xl shadow-black/50 backdrop-blur-md sm:-left-6 sm:top-14 sm:w-[150px] sm:p-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold leading-none text-white">3+</span>
                  <div className="flex items-center gap-1 text-emerald-400">
                    <span className="flex h-5 w-5 items-center justify-center rounded bg-emerald-500/20 text-[10px]">
                      ✉
                    </span>
                    <span className="flex h-5 w-5 items-center justify-center rounded bg-emerald-500/20 text-[10px]">
                      📈
                    </span>
                  </div>
                </div>
                <p className="mt-2 text-[11px] leading-snug text-night-muted">Projets complets</p>
              </div>

              {/* Annotation Tojo / Développeur avec flèche dessinée */}
              <div className="pointer-events-none absolute -right-2 top-4 select-none sm:-right-16 sm:top-8">
                <div className="text-right">
                  <p className="font-serif italic text-lg font-medium text-white/90 sm:text-xl">Tojo</p>
                  <p className="text-[11px] text-night-muted -mt-0.5">Développeur</p>
                </div>
                <svg
                  className="ml-auto mt-1 h-8 w-8 text-brand -rotate-12"
                  viewBox="0 0 40 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M28 6 C15 12, 10 24, 18 34 M18 34 L12 28 M18 34 L24 30" />
                </svg>
              </div>

              {/* Carte formation L3 */}
              <div className="absolute right-[-10px] top-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-night-surface/90 p-3.5 shadow-2xl shadow-black/50 backdrop-blur-md sm:right-[-18px] sm:p-4">
                <p className="text-2xl font-bold leading-none text-white">L3</p>
                <p className="mt-1 text-[11px] leading-snug text-night-muted">Génie Logiciel</p>
              </div>

              {/* Carte technologies */}
              <div className="animate-float-delayed absolute -bottom-5 right-0 w-[min(88%,280px)] sm:-right-12 rounded-xl border border-white/10 bg-night-surface/90 p-3 shadow-2xl shadow-black/40 backdrop-blur-md sm:bottom-4 sm:p-4">
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-night-muted">
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
