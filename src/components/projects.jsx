import { motion } from 'framer-motion';
import TiltCard from './TiltCard';

const projects = [
  {
    title: 'Application Web',
    description: 'Projet full-stack avec React et Spring Boot',
    tags: ['React', 'Spring Boot', 'PostgreSQL'],
  },
  {
    title: 'API REST',
    description: 'API construite avec FastAPI et Python',
    tags: ['Python', 'FastAPI', 'MySQL'],
  },
  {
    title: 'Portfolio',
    description: 'Ce portfolio — design sombre et animations soignées',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 max-w-5xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-mono text-sm text-accent mb-3 tracking-wider"
      >
        // projets
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-text mb-16"
      >
        Mes réalisations
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6" style={{ perspective: 1000 }}>
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <TiltCard className="group p-6 rounded-xl border border-border bg-surface/50 hover:border-accent/50 transition-all duration-300">
              <h3 className="text-xl font-semibold text-text mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-text-muted text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-md bg-border/50 text-text-muted text-xs font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}