import {
  CodeXml,
  LayoutTemplate,
  GraduationCap,
  ServerCog,
  ShieldCheck,
  UserRound,
} from 'lucide-react';
import Reveal from './Reveal';

const milestones = [
  { year: '2024 — en cours', label: 'L3 Génie Logiciel', description: 'Esmia Innovation · Antananarivo' },
];

const capabilities = [
  { label: 'Développement web & desktop', Icon: CodeXml },
  { label: 'Architecture backend', Icon: ServerCog },
  { label: 'Interfaces modernes', Icon: LayoutTemplate },
  { label: 'Qualité & maintenabilité', Icon: ShieldCheck },
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section-pastel scroll-mt-24 bg-page py-12 sm:py-20">
      <div className="shell">
        <div className="grid items-center gap-8 lg:grid-cols-[62fr_38fr] lg:gap-20">
          {/* ─── Texte éditorial ─── */}
          <Reveal>
            <p className="eyebrow">
              <span className="flex h-5 w-5 items-center justify-center rounded-[5px] border border-line bg-soft-blue/10 text-ink">
                <UserRound size={11} aria-hidden="true" />
              </span>
              À propos
            </p>

            <h2
              id="about-title"
              className="mt-4 max-w-[36rem] text-[clamp(1.8rem,3vw,2.6rem)] font-bold leading-[1.05] tracking-[-0.025em] text-ink"
            >
              Développer des solutions utiles, fiables et bien pensées<span className="text-ink">.</span>
            </h2>

            <div className="mt-6 max-w-[39rem] space-y-4 text-base leading-relaxed text-muted">
              <p>
                Je suis étudiant en troisième année de{' '}
                <span className="font-medium text-ink">Génie Logiciel</span> et développeur
                full-stack, basé à Antananarivo. J'aime concevoir des applications qui combinent
                performance technique et expérience utilisateur soignée.
              </p>
              <p>
                J'apprends et travaille avec React, Java / Spring Boot, Python et les bases de
                données, en cherchant à construire des solutions fiables, élégantes et utiles.
              </p>
            </div>

            <ul className="mt-6 grid gap-3">
              {capabilities.map(({ label, Icon }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 text-sm text-muted"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center text-ink">
                    <Icon size={16} aria-hidden="true" />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="w-full">
            <div className="border-l border-control pl-6 sm:pl-8">
              <span className="flex h-8 w-8 items-center justify-center text-ink">
                <GraduationCap size={24} aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-xl font-bold tracking-tight text-ink">Ma formation</h3>
              <ol className="mt-5">
                {milestones.map((item) => (
                  <li key={item.year} className="border-l-2 border-line pl-5">
                    <p className="text-xs font-semibold leading-relaxed text-ink">{item.year}</p>
                    <p className="mt-2 text-lg font-semibold text-ink">{item.label}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                  </li>
                ))}
              </ol>
              <div className="mt-7 border-t border-line pt-6">
                <p className="text-sm font-semibold text-ink">Apprendre en construisant</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Je mets ma formation en pratique à travers mes projets web, backend et desktop,
                  avec l’envie de comprendre les systèmes du serveur à l’interface.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
