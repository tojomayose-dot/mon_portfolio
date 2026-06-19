import { motion } from 'framer-motion';
import TechGrid from './TechGrid';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <TechGrid />

      <div className="relative z-10 max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-sm text-accent mb-4 tracking-wider"
        >
          // étudiant en développement logiciel
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-text mb-6 tracking-tight"
        >
          Tojo RANDRIANANTENAINA
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg text-text-muted max-w-xl mx-auto mb-10"
        >
          Je conçois et développe des applications web — du backend à l'interface.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-accent text-bg font-medium rounded-lg hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-shadow"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-border text-text font-medium rounded-lg hover:border-accent transition-colors"
          >
            Me contacter
          </a>
        </motion.div>
      </div>
    </section>
  );
}