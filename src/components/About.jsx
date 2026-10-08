import { motion } from 'framer-motion';

const milestones = [
  { year: '2023', label: 'BTS SIO SLAM' },
  { year: '2024', label: 'Première expérience dev' },
  { year: '2026', label: 'L3 Génie Logiciel' },
];

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-5xl px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, margin: '-100px' }}
        className="section-shell p-6 md:p-10"
      >
        <p className="font-mono text-sm tracking-[0.18em] text-[#22D3EE] mb-3 uppercase">
          // à propos
        </p>

        <div className="grid gap-12 md:grid-cols-[1.1fr_1.9fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-[-0.04em] text-text md:text-4xl">
              Qui je suis
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-relaxed text-text-muted">
            <p>
              Je suis actuellement <span className="text-text">étudiant en L3 Génie Logiciel</span>,
              avec un intérêt particulier pour le développement d'applications modernes,
              l’architecture logicielle et l’expérience utilisateur.
            </p>
            <p>
              J’apprends et travaille avec des technologies comme{' '}
              <span className="text-[#22D3EE]">React</span>,{' '}
              <span className="text-[#22D3EE]">Java / Spring Boot</span>,{' '}
              <span className="text-[#22D3EE]">Python</span> et{' '}
              <span className="text-[#22D3EE]">bases de données</span>, en cherchant à construire
              des solutions fiables, élégantes et utiles.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-[0.9fr_1.8fr]">
          <div className="relative ml-2 pl-8">
            <div className="absolute left-0 top-0 h-full w-px bg-[#22D3EE]/70" />
            <div className="space-y-6">
              {milestones.map((item) => (
                <div key={item.year} className="relative">
                  <span className="absolute -left-[2.1rem] top-1.5 h-3 w-3 rounded-full bg-[#22D3EE] shadow-[0_0_18px_rgba(34,211,238,0.7)]" />
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-muted">{item.year}</p>
                  <p className="mt-2 text-base font-medium text-text">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex h-full items-center">
            <p className="text-lg leading-relaxed text-text-muted">
              Curieux, rigoureux et motivé par les défis techniques, j’aime comprendre en profondeur
              les systèmes, du backend à l’interface, afin de concevoir des projets cohérents,
              performants et bien pensés.
            </p>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-6 border-t border-border pt-10 md:grid-cols-4">
          {[
            { label: 'Formation', value: 'L3' },
            { label: 'Domaine', value: 'Génie Logiciel' },
            { label: 'Focus', value: 'Web' },
            { label: 'Approche', value: 'Full-stack' },
          ].map((stat, i) => (
            <div key={i}>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted mb-2">{stat.label}</p>
              <p className="text-text font-medium">{stat.value}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}