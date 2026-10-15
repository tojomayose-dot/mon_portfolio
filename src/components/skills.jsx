import { BookOpen } from 'lucide-react';
import Reveal from './Reveal';

const skillGroups = [
  {
    category: 'Frontend',
    items: ['React', 'React Native', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'],
    className: 'col-span-2',
  },
  {
    category: 'Backend',
    items: ['Java', 'Spring Boot', 'Python', 'FastAPI', 'SQLAlchemy'],
  },
  {
    category: 'Bases de données',
    items: ['PostgreSQL', 'MySQL', 'SQLite'],
  },
  {
    category: 'Outils & architecture',
    items: ['Docker', 'Git / GitHub', 'Linux', 'Postman', 'API REST', 'MVC'],
  },
  {
    category: 'En apprentissage',
    items: ['TypeScript', 'CI/CD'],
    accent: true,
  },
];

function SkillPill({ children, accent }) {
  return (
    <span
      className={`rounded-full border px-4 py-2 font-mono text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5 ${
        accent
          ? 'border-accent-soft/30 text-accent-soft'
          : 'border-border text-text hover:border-accent hover:text-accent'
      }`}
    >
      {children}
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-32">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-6">
          stack
        </p>

        <h2 className="mb-20 text-5xl font-extrabold tracking-[-0.05em] text-text md:text-6xl">
          Compétences
        </h2>
      </Reveal>

      {/* ─── Asymmetric Bento Layout ─── */}
      <div className="grid gap-px overflow-hidden rounded-card bg-border md:grid-cols-3">
        {skillGroups.map((group, index) => (
          <Reveal
            key={group.category}
            delay={index * 0.06}
            className={`bg-bg p-8 transition-colors duration-300 md:p-10 ${
              group.accent ? 'hover:bg-accent-soft/5' : 'hover:bg-surface'
            } ${group.className ?? ''}`}
          >
            <div className="mb-6 flex items-center justify-between">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-text-muted">
                {group.category}
              </p>
              {group.accent && <BookOpen size={14} className="text-accent-soft" />}
            </div>
            <div className="flex flex-wrap gap-3">
              {group.items.map((skill) => (
                <SkillPill key={skill} accent={group.accent}>
                  {skill}
                </SkillPill>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
