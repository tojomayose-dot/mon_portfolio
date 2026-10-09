import { BookOpen } from 'lucide-react';

const skillGroups = [
  {
    category: 'Frontend',
    items: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    items: ['Java', 'Spring Boot', 'Python', 'FastAPI'],
  },
  {
    category: 'Bases de données',
    items: ['PostgreSQL', 'MySQL'],
  },
  {
    category: 'Outils',
    items: ['Git', 'GitHub', 'VS Code'],
  },
];

const learning = ['TypeScript', 'Docker', 'CI/CD'];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-32">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-6">
        stack
      </p>

      <h2 className="mb-20 text-5xl font-extrabold tracking-[-0.05em] text-text md:text-6xl">
        Compétences
      </h2>

      {/* ─── Asymmetric Bento Layout ─── */}
      <div className="grid gap-px bg-border md:grid-cols-3">
        {/* Frontend — spans 2 columns, feels dominant */}
        <div className="col-span-2 bg-bg p-8 md:p-10 transition-colors duration-300 hover:bg-surface">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-text-muted mb-6">
            {skillGroups[0].category}
          </p>
          <div className="flex flex-wrap gap-3">
            {skillGroups[0].items.map((skill) => (
              <span
                key={skill}
                className="rounded-full px-4 py-2 font-mono text-sm tracking-wide text-text transition-all duration-300 hover:-translate-y-0.5 hover:text-accent"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Backend — single column */}
        <div className="bg-bg p-8 md:p-10 transition-colors duration-300 hover:bg-surface">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-text-muted mb-6">
            {skillGroups[1].category}
          </p>
          <div className="flex flex-wrap gap-3">
            {skillGroups[1].items.map((skill) => (
              <span
                key={skill}
                className="rounded-full px-4 py-2 font-mono text-sm tracking-wide text-text transition-all duration-300 hover:-translate-y-0.5 hover:text-accent"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Databases — small, compact */}
        <div className="bg-bg p-8 md:p-10 transition-colors duration-300 hover:bg-surface">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-text-muted mb-6">
            {skillGroups[2].category}
          </p>
          <div className="flex flex-wrap gap-3">
            {skillGroups[2].items.map((skill) => (
              <span
                key={skill}
                className="font-mono text-sm tracking-wide text-text transition-all duration-300 hover:-translate-y-0.5 hover:text-accent"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="bg-bg p-8 md:p-10 transition-colors duration-300 hover:bg-surface">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-text-muted mb-6">
            {skillGroups[3].category}
          </p>
          <div className="flex flex-wrap gap-3">
            {skillGroups[3].items.map((skill) => (
              <span
                key={skill}
                className="font-mono text-sm tracking-wide text-text transition-all duration-300 hover:-translate-y-0.5 hover:text-accent"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Learning — accent panel */}
        <div className="bg-bg p-8 md:p-10 transition-colors duration-300 hover:bg-accent-soft/5">
          <div className="flex items-center justify-between mb-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-text-muted">
              En apprentissage
            </p>
            <BookOpen size={14} className="text-accent-soft" />
          </div>
          <div className="flex flex-wrap gap-3">
            {learning.map((item) => (
              <span
                key={item}
                className="font-mono text-sm tracking-wide text-accent-soft transition-all duration-300 hover:-translate-y-0.5"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}