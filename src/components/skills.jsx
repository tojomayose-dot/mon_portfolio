import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

const skillGroups = [
  {
    category: 'Frontend',
    items: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'],
    span: 'col-span-2',
  },
  {
    category: 'Backend',
    items: ['Java', 'Spring Boot', 'Python', 'FastAPI'],
    span: 'col-span-1',
  },
  {
    category: 'Bases de données',
    items: ['PostgreSQL', 'MySQL'],
    span: 'col-span-1',
  },
  {
    category: 'Outils',
    items: ['Git', 'GitHub', 'VS Code'],
    span: 'col-span-1',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-32">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-mono text-sm tracking-[0.18em] text-[#22D3EE] mb-3 uppercase"
      >
        // stack
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-3xl font-bold tracking-[-0.04em] text-text md:text-4xl"
      >
        Compétences
      </motion.h2>

      <div className="grid auto-rows-[180px] gap-5 md:grid-cols-3">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            viewport={{ once: true }}
            className={`bento-card ${group.span} p-5`}
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted">
              {group.category}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border bg-[#F8FAFC] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-text"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bento-card col-span-1 bg-[#F3E8FF] p-5"
        >
          <div className="flex items-center justify-between">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#0F172A]/70">
              En apprentissage
            </p>
            <BookOpen size={16} className="text-[#7C3AED]" />
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {['TypeScript', 'Docker', 'CI/CD'].map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#D8B4FE] bg-white/80 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-[#0F172A]"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}