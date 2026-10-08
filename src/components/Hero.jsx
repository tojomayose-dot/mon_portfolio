import { motion, useScroll, useTransform } from 'framer-motion';
import TechGrid from './TechGrid';
import TypewriterText from './TypewriterText';

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      <TechGrid />
      <div className="hero-orb" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-6xl w-full grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]"
      >
        <div className="text-left">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="mb-6"
          >
            <span className="hero-badge">// étudiant en L3 Génie Logiciel</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.7 }}
            className="text-5xl md:text-6xl xl:text-7xl font-bold text-text leading-[0.95] tracking-tight"
          >
            <TypewriterText text="Tojo RANDRIANANTENAINA" delay={1800} />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.1 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-text-muted"
          >
            Je conçois et développe des solutions numériques, en alliant logique, design et performance pour créer des produits utiles et bien pensés.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.3 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a href="#projects" className="cta-primary px-6 py-3 text-sm md:text-base">
              Voir mes projets
            </a>
            <a href="#contact" className="cta-secondary px-6 py-3 text-sm md:text-base">
              Me contacter
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="section-shell rounded-3xl p-6 md:p-8"
        >
          <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
              Profil
            </span>
            <span className="text-xs text-accent-soft font-mono">Disponible</span>
          </div>

          <div className="space-y-5">
            {[
              { label: 'Domaine', value: 'Génie Logiciel' },
              { label: 'Focus', value: 'Développement web' },
              { label: 'Stack', value: 'React / Java / Python' },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between rounded-2xl border border-border bg-surface/40 px-4 py-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted">
                  {item.label}
                </span>
                <span className="text-sm font-medium text-text">{item.value}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-border bg-surface/40 p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted mb-2">Expérience</p>
              <p className="text-2xl font-semibold text-text">L3</p>
            </div>
            <div className="rounded-2xl border border-border bg-surface/40 p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted mb-2">Approche</p>
              <p className="text-2xl font-semibold text-text">Full-stack</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}