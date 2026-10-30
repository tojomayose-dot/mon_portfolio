import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import { FaJava } from 'react-icons/fa';
import {
  SiDocker,
  SiFastapi,
  SiFigma,
  SiGit,
  SiJavascript,
  SiMysql,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSpringboot,
  SiTypescript,
} from 'react-icons/si';
import { skills } from '../data/skills';
import Reveal from './Reveal';

/* Icônes associées aux compétences réellement présentes dans src/data/skills.js.
   Aucune compétence n'est ajoutée ici : cette table ne fait qu'illustrer. */
const skillIcons = {
  React: { Icon: SiReact, color: '#61DAFB' },
  JavaScript: { Icon: SiJavascript, color: '#D4A600' },
  TypeScript: { Icon: SiTypescript, color: '#3178C6' },
  Java: { Icon: FaJava, color: '#ED8B00' },
  'Spring Boot': { Icon: SiSpringboot, color: '#6DB33F' },
  Python: { Icon: SiPython, color: '#3776AB' },
  FastAPI: { Icon: SiFastapi, color: '#009688' },
  PostgreSQL: { Icon: SiPostgresql, color: '#4169E1' },
  MySQL: { Icon: SiMysql, color: '#4479A1' },
  Git: { Icon: SiGit, color: '#F05032' },
  Docker: { Icon: SiDocker, color: '#2496ED' },
  Figma: { Icon: SiFigma, color: '#F24E1E' },
};

const groups = Object.entries(skills);

/* Aplatit la source en évitant les doublons éventuels entre catégories. */
const allSkills = [];
const seen = new Set();
for (const [category, items] of groups) {
  for (const name of items) {
    if (seen.has(name)) continue;
    seen.add(name);
    allSkills.push({ name, category });
  }
}

const filters = [
  { id: 'all', label: 'Toutes', count: allSkills.length },
  ...groups
    .map(([category, items]) => ({
      id: category,
      label: category,
      count: items.filter((name, index) => items.indexOf(name) === index).length,
    }))
    .filter((filter) => filter.count > 0),
];

function SkillCard({ skill }) {
  const config = skillIcons[skill.name] ?? { Icon: Code2, color: null };
  const { Icon, color } = config;

  return (
    <div
      title={`${skill.name} — ${skill.category}`}
      className="group flex min-h-[96px] flex-col items-center justify-center gap-2 rounded-[12px] border border-line bg-surface px-2 py-3 text-center shadow-[0_1px_2px_rgba(15,23,42,0.03)] transition duration-200 hover:-translate-y-0.5 hover:border-brand/35 hover:shadow-card"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-page transition-colors duration-200 group-hover:border-brand/25 group-hover:bg-brand/5">
        <Icon
          size={26}
          aria-hidden="true"
          className={color ? undefined : 'text-ink'}
          style={color ? { color } : undefined}
        />
      </span>
      <span className="text-[11px] font-medium leading-tight text-ink">{skill.name}</span>
    </div>
  );
}

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('all');
  const reducedMotion = useReducedMotion();

  const filteredSkills =
    activeFilter === 'all'
      ? allSkills
      : allSkills.filter((skill) => skill.category === activeFilter);

  return (
    <section id="skills" aria-labelledby="skills-title" className="scroll-mt-24 bg-page py-16 sm:py-20">
      <div className="shell">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">
            <span className="flex h-5 w-5 items-center justify-center rounded-[5px] border border-brand/25 bg-brand/10 text-brand-ink">
              <Code2 size={11} aria-hidden="true" />
            </span>
            Mon expertise
          </p>
          <h2
            id="skills-title"
            className="mt-4 text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.04] tracking-[-0.045em] text-ink"
          >
            Compétences
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Les technologies et outils que j'utilise pour donner vie à mes idées.
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <div
            role="group"
            aria-label="Filtrer les compétences par catégorie"
            className="mt-7 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6"
          >
            {filters.map((filter) => {
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveFilter(filter.id)}
                  aria-pressed={isActive}
                  aria-label={`${filter.label} — ${filter.count} compétence${filter.count > 1 ? 's' : ''}`}
                  className={`inline-flex min-h-10 shrink-0 items-center justify-center gap-2 rounded-[10px] border px-4 py-2 text-xs font-semibold transition-colors duration-200 ${
                    isActive
                      ? 'border-brand-strong bg-brand-strong text-white'
                      : 'border-line bg-surface text-muted hover:border-brand/40 hover:text-brand-ink'
                  }`}
                >
                  {filter.label}
                  <span
                    aria-hidden="true"
                    className={`font-mono text-[10px] ${isActive ? 'text-white' : 'text-muted'}`}
                  >
                    {filter.count}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <p className="sr-only" role="status" aria-live="polite">
          {filteredSkills.length} compétence{filteredSkills.length > 1 ? 's' : ''} affichée
          {filteredSkills.length > 1 ? 's' : ''}.
        </p>

        <motion.ul
          layout={!reducedMotion}
          className="mt-8 grid grid-cols-3 gap-2 sm:grid-cols-4 sm:gap-3 md:grid-cols-6 xl:grid-cols-12"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {filteredSkills.map((skill) => (
              <motion.li
                key={skill.name}
                layout={!reducedMotion}
                initial={reducedMotion ? false : { opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reducedMotion ? undefined : { opacity: 0, scale: 0.97 }}
                transition={{ duration: reducedMotion ? 0 : 0.22, ease: [0.22, 1, 0.36, 1] }}
              >
                <SkillCard skill={skill} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>
  );
}
