import {
  ArrowRight,
  CodeXml,
  LayoutTemplate,
  Lightbulb,
  ServerCog,
  ShieldCheck,
  UserRound,
} from 'lucide-react';
import { useState } from 'react';
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

const stats = [
  { label: 'Formation', value: 'L3' },
  { label: 'Domaine', value: 'Génie Logiciel' },
  { label: 'Focus', value: 'Web' },
  { label: 'Approche', value: 'Full-stack' },
];

export default function About() {
  const [showJourney, setShowJourney] = useState(false);

  return (
    <section id="about" aria-labelledby="about-title" className="scroll-mt-24 bg-surface py-16 sm:py-20">
      <div className="shell">
        <div className="grid items-center gap-14 lg:grid-cols-[62fr_38fr] lg:gap-20">
          {/* ─── Texte éditorial ─── */}
          <Reveal>
            <p className="eyebrow">
              <span className="flex h-5 w-5 items-center justify-center rounded-[5px] border border-brand/25 bg-brand/10 text-brand-ink">
                <UserRound size={11} aria-hidden="true" />
              </span>
              À propos
            </p>

            <h2
              id="about-title"
              className="mt-4 max-w-[36rem] text-[clamp(1.8rem,3vw,2.6rem)] font-extrabold leading-[1.05] tracking-[-0.045em] text-ink"
            >
              Développer des solutions utiles, fiables et bien pensées<span className="text-brand">.</span>
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
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center text-brand-ink">
                    <Icon size={16} aria-hidden="true" />
                  </span>
                  {label}
                </li>
              ))}
            </ul>

            <button type="button" aria-expanded={showJourney} aria-controls="parcours" onClick={() => setShowJourney((value) => !value)} className="btn btn-primary mt-8">
              {showJourney ? 'Masquer mon parcours' : 'En savoir plus sur mon parcours'}
              <ArrowRight size={17} aria-hidden="true" />
            </button>
          </Reveal>

          {/* ─── Portrait réel + panneau décoratif ─── */}
          <Reveal delay={0.1} className="relative mx-auto w-full max-w-[300px]">
            <div
              aria-hidden="true"
              className="absolute -right-2 top-8 h-[82%] w-[64%] rounded-[28px] bg-gradient-to-br from-brand to-brand-strong sm:-right-4"
            />
            <div
              aria-hidden="true"
              className="absolute -left-4 bottom-10 h-28 w-28 rounded-2xl border border-brand/20"
              style={{
                backgroundImage:
                  'linear-gradient(to right, rgba(59,130,246,0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(59,130,246,0.14) 1px, transparent 1px)',
                backgroundSize: '18px 18px',
              }}
            />

            <div className="relative -rotate-2 overflow-hidden rounded-[16px] border border-line bg-page shadow-card">
              <img
                src="/photo.png"
                alt="Portrait de Tojo Randrianantenaina"
                width="1122"
                height="1402"
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover object-center grayscale"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-night/40 via-transparent to-transparent"
              />
            </div>

            <div className="absolute -bottom-5 right-0 max-w-[230px] rounded-xl border border-line bg-surface p-4 shadow-card sm:-right-8 sm:bottom-0">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand/10 text-brand-ink">
                  <Lightbulb size={16} aria-hidden="true" />
                </span>
                <p className="text-sm font-semibold text-ink">Toujours curieux</p>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                J'aime comprendre en profondeur les systèmes, du backend à l'interface.
              </p>
            </div>
          </Reveal>
        </div>

        {/* ─── Parcours : contenu réel relié au bouton ci-dessus ─── */}
        <div id="parcours" hidden={!showJourney} className="mt-20 scroll-mt-28 border-t border-line pt-12 sm:mt-24 sm:pt-14">
          <Reveal>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow">Parcours</p>
                <h3 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-ink">
                  Ma formation
                </h3>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-muted">
                Une formation en génie logiciel, mise en pratique à travers mes projets web,
                backend et desktop.
              </p>
            </div>

            <ol className="mt-8 grid gap-4">
              {milestones.map((item, index) => (
                <li key={item.year} className="relative rounded-card border border-line bg-page p-5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-brand-ink">
                      {item.year}
                    </span>
                    <span
                      aria-hidden="true"
                      className="flex h-6 w-6 items-center justify-center rounded-full border border-brand/25 bg-brand/10 font-mono text-[9px] font-semibold text-brand-ink"
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <p className="mt-4 text-base font-semibold text-ink">{item.label}</p>
                  <p className="mt-2 text-sm text-muted">{item.description}</p>
                </li>
              ))}
            </ol>

            <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-line pt-8 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                    {stat.label}
                  </dt>
                  <dd className="mt-1.5 text-lg font-semibold text-ink">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
