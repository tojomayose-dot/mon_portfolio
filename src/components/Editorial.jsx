import { ExternalLink, Lock } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { GITHUB_URL } from '../site';
import Reveal from './Reveal';

/* ─── DATA ─── */
const milestones = [
  { year: '2023', label: 'BTS SIO SLAM' },
  { year: '2024', label: 'Première expérience dev' },
  { year: '2026', label: 'L3 Génie Logiciel' },
];

const projects = [
  {
    title: 'Mada-ID',
    subtitle: 'Certification numérique',
    year: '2026',
    mark: 'MI',
    description:
      "Backend d'API REST pour la certification et l'authentification de diplômes et d'actes officiels. Signature cryptographique Ed25519 + SHA-256 garantissant l'intégrité et la non-répudiation des documents.",
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Ed25519'],
    github: null,
    demo: null,
    featured: true,
  },
  {
    title: 'Parking',
    subtitle: 'Application web',
    year: '2026',
    mark: 'PK',
    description:
      'Réservation et libération de places de parking, avec gestion des utilisateurs et des abonnements.',
    tags: ['Java', 'JSP', 'Tomcat', 'PostgreSQL'],
    github: null,
    demo: null,
  },
  {
    title: "Gestion de l'énergie",
    subtitle: 'Application desktop',
    year: '2026',
    mark: 'EN',
    description:
      "Suivi et analyse de données énergétiques, avec visualisation graphique interactive et architecture MVC pour une meilleure maintenabilité.",
    tags: ['Python', 'PyQt6', 'SQLite', 'Matplotlib', 'MVC'],
    github: null,
    demo: null,
  },
  {
    title: 'Gestion de restaurant',
    subtitle: 'Application desktop',
    year: '2025',
    mark: 'GR',
    description: 'Application complète de gestion des commandes et du service en restaurant.',
    tags: ['Python', 'PyQt6', 'SQLite', 'MVC'],
    github: null,
    demo: null,
  },
  {
    title: 'Gestion de bibliothèque',
    subtitle: 'Application desktop',
    year: '2025',
    mark: 'GB',
    description: "Interface de gestion des stocks de livres, des emprunts et des retours.",
    tags: ['Python', 'PyQt6', 'MySQL', 'MVC'],
    github: null,
    demo: null,
  },
  {
    title: 'Portfolio personnel',
    subtitle: 'Site web',
    year: '2026',
    mark: 'PF',
    description: 'Ce portfolio — design éditorial, thème clair/sombre et animations au scroll.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    github: `${GITHUB_URL}/mon_portfolio`,
    demo: null,
    featured: false,
  },
];

const stats = [
  { label: 'Formation', value: 'L3' },
  { label: 'Domaine', value: 'Génie Logiciel' },
  { label: 'Focus', value: 'Web' },
  { label: 'Approche', value: 'Full-stack' },
];

/* Aperçu de projet : capture si disponible, sinon cadre de maquette */
function ProjectVisual({ project }) {
  if (project.image) {
    return (
      <div className="aspect-[4/3] overflow-hidden rounded-card border border-border transition-all duration-500 group-hover:border-accent/30">
        <img
          src={project.image}
          alt={`Aperçu du projet ${project.title}`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className="flex aspect-[4/3] flex-col overflow-hidden rounded-card border border-border bg-gradient-to-br from-accent/10 to-accent-soft/10 transition-all duration-500 group-hover:border-accent/30">
      <div className="flex items-center gap-1.5 border-b border-border/60 px-4 py-3">
        <span className="h-2 w-2 rounded-full bg-accent/50" />
        <span className="h-2 w-2 rounded-full bg-accent-soft/50" />
        <span className="h-2 w-2 rounded-full bg-border" />
        <span className="ml-3 font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted">
          {project.subtitle}
        </span>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <span className="font-mono text-5xl font-semibold tracking-[-0.04em] text-accent/70">
          {project.mark}
        </span>
      </div>
    </div>
  );
}

/* ─── COMPONENT ─── */
export default function Editorial() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-32 space-y-40">

      {/* ╔══════════════════════════════════════════╗
         ║  ACT I — QUI JE SUIS                     ║
         ╚══════════════════════════════════════════╝ */}
      <div id="about" className="scroll-mt-24">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-6">
            à propos
          </p>

          <div className="grid gap-16 md:grid-cols-[1fr_1.8fr]">
            <h2 className="text-5xl font-extrabold leading-[1.05] tracking-[-0.05em] text-text md:text-6xl">
              Qui<br />je suis
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-text-muted">
              <p>
                Je suis actuellement <span className="text-text font-medium">étudiant en L3 Génie Logiciel</span>,
                avec un intérêt particulier pour le développement d'applications modernes,
                l'architecture logicielle et l'expérience utilisateur.
              </p>
              <p>
                J'apprends et travaille avec des technologies comme{' '}
                <span className="text-accent">React</span>,{' '}
                <span className="text-accent">Java / Spring Boot</span>,{' '}
                <span className="text-accent">Python</span> et{' '}
                <span className="text-accent">bases de données</span>, en cherchant à construire
                des solutions fiables, élégantes et utiles.
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* ╔══════════════════════════════════════════╗
         ║  INTERLUDE — FEATURED PROJECT             ║
         ╚══════════════════════════════════════════╝ */}
      <div id="projects" className="scroll-mt-24">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-6">
          projet à la une
        </p>

        {projects.filter((project) => project.featured).map((project) => (
          <Reveal key={project.title}>
            <div className="group grid gap-10 md:grid-cols-[1.6fr_1fr] items-center">
              <div>
                <h3 className="text-4xl font-bold tracking-[-0.04em] text-text md:text-5xl transition-colors duration-300 group-hover:text-accent">
                  {project.title}
                </h3>
                <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
                  {project.subtitle} · {project.year}
                </p>
                <p className="mt-6 text-lg leading-relaxed text-text-muted max-w-lg">
                  {project.description}
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-text-muted transition-colors duration-300 hover:border-accent hover:text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-text transition-all duration-300 hover:-translate-y-0.5 hover:text-accent"
                    >
                      <FaGithub size={18} />
                      Code source
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-text-muted transition-all duration-300 hover:-translate-y-0.5 hover:text-accent-soft"
                    >
                      <ExternalLink size={16} />
                      Démo
                    </a>
                  )}
                  {!project.github && !project.demo && (
                    <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted">
                      <Lock size={13} />
                      Projet d'études · dépôt privé
                    </span>
                  )}
                </div>
              </div>

              <ProjectVisual project={project} />
            </div>
          </Reveal>
        ))}
      </div>

      {/* ╔══════════════════════════════════════════╗
         ║  ACT II — PARCOURS (timeline intime)      ║
         ╚══════════════════════════════════════════╝ */}
      <Reveal>
        <div className="grid gap-16 md:grid-cols-[0.8fr_1.6fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-6">
              parcours
            </p>
            <div className="relative ml-4 pl-8">
              <div className="absolute left-0 top-0 h-full w-px bg-accent/40" />
              <div className="space-y-8">
                {milestones.map((item) => (
                  <div key={item.year} className="relative">
                    <span className="absolute -left-[2.15rem] top-1 h-3 w-3 rounded-full bg-accent shadow-[0_0_14px_color-mix(in_srgb,var(--color-accent)_50%,transparent)]" />
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-muted">{item.year}</p>
                    <p className="mt-1.5 text-base font-medium text-text">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-end">
            <p className="text-2xl font-light leading-relaxed text-text-muted md:text-3xl">
              Curieux, rigoureux et motivé par les défis techniques, j'aime comprendre en profondeur
              les systèmes — du backend à l'interface.
            </p>
          </div>
        </div>
      </Reveal>

      {/* ╔══════════════════════════════════════════╗
         ║  ACT III — AUTRES PROJETS                 ║
         ╚══════════════════════════════════════════╝ */}
      <Reveal>
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-10">
            autres projets
          </p>

          <div className="space-y-0 divide-y divide-border">
            {projects.filter((project) => !project.featured).map((project) => (
              <div
                key={project.title}
                className="group grid gap-6 py-10 md:grid-cols-[1fr_2fr_auto] items-start"
              >
                <div>
                  <h3 className="text-2xl font-semibold text-text tracking-[-0.03em] transition-colors duration-300 group-hover:text-accent">
                    {project.title}
                  </h3>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted">
                    {project.year}
                  </p>
                </div>

                <div>
                  <p className="text-base leading-relaxed text-text-muted">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] uppercase tracking-[0.16em] text-text-muted/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`GitHub ${project.title}`}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                    >
                      <FaGithub size={16} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Démo ${project.title}`}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-soft hover:text-accent-soft"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                  {!project.github && !project.demo && (
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted">
                      Code privé
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* ╔══════════════════════════════════════════╗
         ║  STAT BAR — frise éditoriale               ║
         ╚══════════════════════════════════════════╝ */}
      <Reveal>
        <div className="grid grid-cols-2 gap-y-8 gap-x-6 border-t border-border pt-12 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-text-muted mb-2">{stat.label}</p>
              <p className="text-xl font-semibold text-text">{stat.value}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
