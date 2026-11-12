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
  React: { Icon: SiReact },
  JavaScript: { Icon: SiJavascript },
  TypeScript: { Icon: SiTypescript },
  Java: { Icon: FaJava },
  'Spring Boot': { Icon: SiSpringboot },
  Python: { Icon: SiPython },
  FastAPI: { Icon: SiFastapi },
  PostgreSQL: { Icon: SiPostgresql },
  MySQL: { Icon: SiMysql },
  Git: { Icon: SiGit },
  Docker: { Icon: SiDocker },
  Figma: { Icon: SiFigma },
};

const groups = Object.entries(skills);

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="section-pastel scroll-mt-24 bg-page py-12 sm:py-20">
      <div className="shell">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">
            <span className="flex h-5 w-5 items-center justify-center rounded-[5px] border border-line bg-soft-blue/10 text-ink">
              <Code2 size={11} aria-hidden="true" />
            </span>
            Mon expertise
          </p>
          <h2
            id="skills-title"
            className="mt-4 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.04] tracking-[-0.025em] text-ink"
          >
            Compétences
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Les technologies et outils que j'utilise pour donner vie à mes idées.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-x-8 gap-y-7 grid-cols-2 xl:grid-cols-4">
          {groups.map(([category, items], index) => (
            <Reveal key={category} delay={index * 0.05} className="border-t border-control pt-5">
              <h3 className="text-base font-semibold text-ink">{category}</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {items.map((name) => {
                  const { Icon } = skillIcons[name] ?? { Icon: Code2 };
                  return (
                    <li key={name} className="flex items-center gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center">
                        <Icon size={21} aria-hidden="true" className="text-ink" />
                      </span>
                      <span className="text-sm font-medium text-ink">{name}</span>
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
