import { ArrowUpRight, Download, MapPin, Sparkles } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const techStack = ['React', 'TypeScript', 'Node', 'Python', 'Postgres', 'UI/UX'];

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-24 pt-32 md:pt-40">
      <div className="grid items-start gap-16 lg:grid-cols-[1.1fr_1.35fr]">
        {/* ─── Headline ─── */}
        <div className="max-w-xl">
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

          <div className="mt-10 flex items-center gap-4">
            <a href="#projects" className="cta-primary px-6 py-3 text-sm md:text-base">
              Voir les projets
            </a>
          </div>
        </div>

        {/* ─── Bento cards ─── */}
        <div className="grid auto-rows-[150px] grid-cols-2 gap-5">
          <div className="bento-card group col-span-2 row-span-2 overflow-hidden p-3">
            <img
              src="/photo.jpg"
              alt="Tojo Randrianantenaina"
              className="h-full w-full rounded-[18px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>

          <div className="bento-card flex flex-col justify-between p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted">Profil</p>
            <div>
              <h2 className="text-xl font-semibold text-text">Tojo Randrianantenaina</h2>
              <div className="mt-3 flex items-center gap-2 text-sm text-text-muted">
                <MapPin size={14} className="text-accent" />
                Antananarivo, Madagascar
              </div>
            </div>
            <span className="mt-4 inline-flex w-fit items-center rounded-full bg-[#ECFEFF] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-[#0F172A] dark:bg-accent/10 dark:text-accent">
              Ouvert aux missions
            </span>
          </div>

          <div className="bento-card bg-[#DFFBFF] p-5 dark:bg-accent/5">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#0F172A]/70 dark:text-text-muted">Stack</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {techStack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#9BEAF3] bg-white/80 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[#0F172A] dark:border-accent/30 dark:bg-surface dark:text-text"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="bento-card flex flex-col items-center justify-center gap-3 p-4">
            <div className="flex items-center gap-4 text-text">
              <a href="https://github.com/tojomayose-dot" target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors duration-300 hover:text-accent">
                <FaGithub size={22} />
              </a>
              <a href="https://www.linkedin.com/in/tojo-randrianantenaina" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors duration-300 hover:text-accent-soft">
                <FaLinkedin size={22} />
              </a>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted">Réseaux</p>
          </div>

          <a href="#projects" className="bento-card block bg-[#F3E8FF] p-5 transition-all duration-300 hover:-translate-y-1 hover:opacity-80 dark:bg-accent-soft/10">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#0F172A]/70 dark:text-text-muted">En cours de création</p>
              <Sparkles size={14} className="text-[#7C3AED]" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-[#0F172A] dark:text-text">Portfolio v2</h3>
            <div className="mt-4 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[#0F172A]/75 dark:text-text-muted">
              Explorer
              <ArrowUpRight size={14} />
            </div>
          </a>

          <a href="/cv.pdf" download className="bento-card flex flex-col justify-between bg-[#ECFEFF] p-5 transition-all duration-300 hover:-translate-y-1 hover:opacity-80 dark:bg-accent/5">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#0F172A]/70 dark:text-text-muted">CV</p>
              <Download size={15} className="text-[#0F172A] dark:text-text" />
            </div>
            <div>
              <p className="mt-6 text-2xl font-semibold text-[#0F172A] dark:text-text">Résumé</p>
              <p className="mt-2 text-xs uppercase tracking-[0.16em] text-[#0F172A]/70 dark:text-text-muted">Télécharger</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}