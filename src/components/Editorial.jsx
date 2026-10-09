import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

/* ─── DATA ─── */
const milestones = [
  { year: '2023', label: 'BTS SIO SLAM' },
  { year: '2024', label: 'Première expérience dev' },
  { year: '2026', label: 'L3 Génie Logiciel' },
];

const projects = [
  {
    title: 'Application Web',
    description: 'Projet full-stack avec React et Spring Boot',
    tags: ['React', 'Spring Boot', 'PostgreSQL'],
    github: 'https://github.com/tojomayose-dot',
    demo: '#',
    featured: true,
  },
  {
    title: 'API REST',
    description: 'API construite avec FastAPI et Python',
    tags: ['Python', 'FastAPI', 'MySQL'],
    github: 'https://github.com/tojomayose-dot',
    demo: '#',
    featured: false,
  },
  {
    title: 'Portfolio',
    description: 'Ce portfolio — design moderne et animations soignées',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/tojomayose-dot',
    demo: '#',
    featured: false,
  },
];

const stats = [
  { label: 'Formation', value: 'L3' },
  { label: 'Domaine', value: 'Génie Logiciel' },
  { label: 'Focus', value: 'Web' },
  { label: 'Approche', value: 'Full-stack' },
];

/* ─── COMPONENT ─── */
export default function Editorial() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-32 space-y-40">

      {/* ╔══════════════════════════════════════════╗
         ║  ACT I — QUI JE SUIS                     ║
         ╚══════════════════════════════════════════╝ */}
      <div id="about" className="scroll-mt-24">
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
      </div>

      {/* ╔══════════════════════════════════════════╗
         ║  INTERLUDE — FEATURED PROJECT             ║
         ╚══════════════════════════════════════════╝ */}
      <div id="projects" className="scroll-mt-24">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-6">
          projet à la une
        </p>

        {projects.filter(p => p.featured).map((project) => (
          <div
            key={project.title}
            className="group grid gap-10 md:grid-cols-[1.6fr_1fr] items-center"
          >
            <div>
              <h3 className="text-4xl font-bold tracking-[-0.04em] text-text md:text-5xl transition-colors duration-300 group-hover:text-accent">
                {project.title}
              </h3>
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
              <div className="mt-8 flex items-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-text transition-all duration-300 hover:-translate-y-0.5 hover:text-accent"
                >
                  <FaGithub size={18} />
                  Code source
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-text-muted transition-all duration-300 hover:-translate-y-0.5 hover:text-accent-soft"
                >
                  <ExternalLink size={16} />
                  Démo
                </a>
              </div>
            </div>

            {/* Placeholder visuel — peut être remplacé par un screenshot */}
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-accent/10 to-accent-soft/10 border border-border transition-all duration-500 group-hover:border-accent/30" />
          </div>
        ))}
      </div>

      {/* ╔══════════════════════════════════════════╗
         ║  ACT II — PARCOURS (timeline intime)      ║
         ╚══════════════════════════════════════════╝ */}
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
                  <span className="absolute -left-[2.15rem] top-1 h-3 w-3 rounded-full bg-accent shadow-[0_0_14px_rgba(34,211,238,0.5)]" />
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

      {/* ╔══════════════════════════════════════════╗
         ║  ACT III — AUTRES PROJETS                 ║
         ╚══════════════════════════════════════════╝ */}
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-10">
          autres projets
        </p>

        <div className="space-y-0 divide-y divide-border">
          {projects.filter(p => !p.featured).map((project) => (
            <div
              key={project.title}
              className="group grid gap-6 py-10 md:grid-cols-[1fr_2fr_auto] items-baseline"
            >
              <h3 className="text-2xl font-semibold text-text tracking-[-0.03em] transition-colors duration-300 group-hover:text-accent">
                {project.title}
              </h3>

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
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`GitHub ${project.title}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                >
                  <FaGithub size={16} />
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Demo ${project.title}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-soft hover:text-accent-soft"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ╔══════════════════════════════════════════╗
         ║  STAT BAR — frise éditoriale               ║
         ╚══════════════════════════════════════════╝ */}
      <div className="grid grid-cols-2 gap-y-8 gap-x-6 border-t border-border pt-12 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-text-muted mb-2">{stat.label}</p>
            <p className="text-xl font-semibold text-text">{stat.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
