import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import TiltCard from './TiltCard';

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

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-32">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-mono text-sm tracking-[0.18em] text-[#22D3EE] mb-3 uppercase"
      >
        // projets
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-3xl font-bold tracking-[-0.04em] text-text md:text-4xl"
      >
        Mes réalisations
      </motion.h2>

      <div className="grid gap-6 md:grid-cols-3" style={{ perspective: 1000 }}>
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <TiltCard className="group relative h-full rounded-[20px] border border-border bg-surface p-6 transition-all duration-300 hover:border-[#22D3EE]/70">
              {project.featured && (
                <span className="absolute right-4 top-4 rounded-full bg-[#ECFEFF] px-2.5 py-1 font-mono text-[9px] font-medium uppercase tracking-[0.18em] text-[#0F172A]">
                  À la une
                </span>
              )}

              <div className="h-full flex flex-col">
                <h3 className="text-xl font-semibold text-text transition-colors group-hover:text-[#22D3EE]">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-[#F3F4F6] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-3 pt-4 border-t border-border">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`GitHub ${project.title}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-muted transition hover:border-[#22D3EE] hover:text-[#22D3EE]"
                  >
                    <FaGithub size={16} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Demo ${project.title}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-muted transition hover:border-[#A78BFA] hover:text-[#A78BFA]"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}