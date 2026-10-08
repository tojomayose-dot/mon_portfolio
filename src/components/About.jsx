import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, margin: "-100px" }}
        className="section-shell rounded-3xl p-6 md:p-10"
      >
        <p className="font-mono text-sm text-accent mb-3 tracking-wider">
          // à propos
        </p>

        <div className="grid md:grid-cols-[1fr_2fr] gap-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text leading-tight">
            Qui je suis
          </h2>

          <div className="space-y-5 text-text-muted text-lg leading-relaxed">
            <p>
              Je suis actuellement <span className="text-text">étudiant en L3 Génie Logiciel</span>,
              avec un intérêt particulier pour le développement d'applications modernes,
              l'architecture logicielle et l'expérience utilisateur.
            </p>
            <p>
              J'apprends et travaille avec des technologies comme{' '}
              <span className="text-accent">React</span>,{' '}
              <span className="text-accent">Java / Spring Boot</span>,{' '}
              <span className="text-accent">Python</span> et{' '}
              <span className="text-accent">bases de données</span>, en cherchant à construire
              des solutions à la fois fonctionnelles, fiables et bien pensées.
            </p>
            <p>
              Curieux, rigoureux et motivé par les défis techniques, j'aime comprendre
              profondément les systèmes, du backend à l'interface, afin de concevoir des projets
              cohérents et performants.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-10 border-t border-border">
          {[
            { label: 'Formation', value: 'L3' },
            { label: 'Domaine', value: 'Génie Logiciel' },
            { label: 'Focus', value: 'Web' },
            { label: 'Approche', value: 'Full-stack' },
          ].map((stat, i) => (
            <div key={i}>
              <p className="font-mono text-xs text-text-muted mb-1">{stat.label}</p>
              <p className="text-text font-medium">{stat.value}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}