import { ArrowUpRight, Download, MapPin, Sparkles } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { CV_URL, GITHUB_URL, LINKEDIN_URL } from '../site';
import Reveal from './Reveal';

const techStack = ['React', 'Java', 'Spring Boot', 'Python', 'FastAPI', 'PostgreSQL'];

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pb-24 pt-32 md:pt-40">
      <div className="grid items-start gap-16 lg:grid-cols-[1.1fr_1.35fr]">
        {/* ─── Headline ─── */}
        <Reveal className="max-w-xl" y={16}>
          <span className="hero-badge">
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            Disponible pour travailler
          </span>

          <h1 className="mt-10 text-6xl font-extrabold leading-[0.92] tracking-[-0.06em] text-text md:text-7xl xl:text-[5.75rem]">
            Bonjour,
            <br />
            je suis{' '}
            <span className="text-accent">Tojo</span>
          </h1>

          <p className="mt-8 max-w-md text-lg leading-relaxed text-text-muted">
            Je conçois des produits numériques réfléchis, en alliant interfaces élégantes,
            pensée produit solide et développement rigoureux pour transformer les idées en
            expériences abouties.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#projects" className="cta-primary px-6 py-3 text-sm md:text-base">
              Voir les projets
            </a>
            <a href="#contact" className="cta-secondary px-6 py-3 text-sm md:text-base">
              Me contacter
            </a>
          </div>
        </Reveal>

        {/* ─── Bento cards ─── */}
        <div className="grid auto-rows-[150px] grid-cols-1 gap-5 sm:grid-cols-2">
          <Reveal delay={0.1} className="bento-card group col-span-2 row-span-2 overflow-hidden p-3">
            <img
              src="/photo.jpg"
              alt="Tojo Randrianantenaina"
              width="413"
              height="443"
              fetchPriority="high"
              decoding="async"
              className="h-full w-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </Reveal>

          <Reveal delay={0.16} className="bento-card flex flex-col justify-between p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted">Profil</p>
            <div>
              <h2 className="text-xl font-semibold text-text">Tojo Randrianantenaina</h2>
              <div className="mt-3 flex items-center gap-2 text-sm text-text-muted">
                <MapPin size={14} className="text-accent" />
                Antananarivo, Madagascar
              </div>
            </div>
            <span className="mt-4 inline-flex w-fit items-center rounded-full bg-tint px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-ink">
              Ouvert aux missions
            </span>
          </Reveal>

          <Reveal delay={0.22} className="bento-card bg-tint p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/70">Stack</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {techStack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-accent/25 bg-surface/80 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-ink"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.28} className="bento-card flex flex-col items-center justify-center gap-3 p-4">
            <div className="flex items-center gap-4 text-text">
              <a href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors duration-300 hover:text-accent">
                <FaGithub size={22} />
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors duration-300 hover:text-accent-soft">
                <FaLinkedin size={22} />
              </a>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted">Réseaux</p>
          </Reveal>

          <Reveal delay={0.34} className="h-full">
            <a href="#projects" className="bento-card block h-full bg-tint-2 p-5 transition-all duration-300 hover:opacity-80">
              <div className="flex items-center justify-between">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/70">En cours de création</p>
                <Sparkles size={14} className="text-accent-soft" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-ink">Portfolio v2</h3>
              <div className="mt-4 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-ink/75">
                Explorer
                <ArrowUpRight size={14} />
              </div>
            </a>
          </Reveal>

          <Reveal delay={0.4} className="h-full">
            <a href={CV_URL} download className="bento-card flex h-full flex-col justify-between bg-tint p-5 transition-all duration-300 hover:opacity-80">
              <div className="flex items-center justify-between">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/70">CV</p>
                <Download size={15} className="text-ink" />
              </div>
              <div>
                <p className="mt-6 text-2xl font-semibold text-ink">Résumé</p>
                <p className="mt-2 text-xs uppercase tracking-[0.16em] text-ink/70">Télécharger</p>
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
