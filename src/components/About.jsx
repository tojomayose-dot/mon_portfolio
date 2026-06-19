import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <p className="font-mono text-sm text-accent mb-3 tracking-wider">
          // à propos
        </p>

        <div className="grid md:grid-cols-[1fr_2fr] gap-12">
          {/* Colonne gauche : titre */}
          <h2 className="text-3xl md:text-4xl font-bold text-text leading-tight">
            Qui je suis
          </h2>

          {/* Colonne droite : texte */}
          <div className="space-y-5 text-text-muted text-lg leading-relaxed">
            <p>
              Étudiant en <span className="text-text">SIO option SLAM</span> (L3),
              je développe des applications web en m'appuyant sur une stack moderne :
              <span className="text-accent"> React</span>,{' '}
              <span className="text-accent">Java / Spring Boot</span> et{' '}
              <span className="text-accent">Python</span>.
            </p>
            <p>
              Je m'intéresse particulièrement à la conception d'interfaces propres
              et performantes, ainsi qu'à l'architecture de bases de données avec
              PostgreSQL et MySQL.
            </p>
            <p>
              Curieux et rigoureux, j'aime comprendre comment les systèmes
              fonctionnent en profondeur, du backend jusqu'à l'expérience utilisateur.
            </p>
          </div>
        </div>

        {/* Stats / repères rapides en mono */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-10 border-t border-border">
          {[
            { label: 'Formation', value: 'SIO' },
            { label: 'Spécialité', value: 'SLAM' },
            { label: 'Niveau', value: 'L3' },
            { label: 'Stack', value: 'Full-stack' },
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