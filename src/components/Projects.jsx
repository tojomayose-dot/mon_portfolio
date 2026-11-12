import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, LayoutGrid, Lock, X } from 'lucide-react';
import { categoryLabels, projectCategories, projects } from '../data/projects';
import Reveal from './Reveal';

/* Aperçus conceptuels en CSS pour les projets sans capture réelle. */
function PreviewContent({ variant, mark }) {
  if (variant === 'api') {
    return (
      <div className="flex h-full gap-2.5 p-3">
        <div className="flex w-[23%] flex-col gap-1.5 rounded-lg border border-white/[0.06] bg-white/[0.025] p-2">
          <span className="h-1.5 w-8 rounded-full bg-brand/70" />
          <span className="h-1 w-full rounded-full bg-white/10" />
          <span className="h-1 w-4/5 rounded-full bg-white/10" />
          <span className="h-1 w-3/5 rounded-full bg-white/10" />
          <span className="mt-auto h-5 w-full rounded border border-brand/20 bg-brand/10" />
        </div>
        <div className="flex flex-1 flex-col gap-1.5">
          <div className="flex items-center justify-between rounded-lg border border-white/[0.07] bg-white/[0.03] px-2 py-1.5">
            <span className="rounded bg-emerald-400/15 px-1.5 py-0.5 font-mono text-[6px] font-bold text-emerald-300">
              POST
            </span>
            <span className="h-1 w-1/2 rounded-full bg-white/10" />
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </div>
          <div className="flex items-center justify-between rounded-lg border border-white/[0.07] bg-white/[0.03] px-2 py-1.5">
            <span className="rounded bg-brand/15 px-1.5 py-0.5 font-mono text-[6px] font-bold text-brand-light">
              GET
            </span>
            <span className="h-1 w-2/5 rounded-full bg-white/10" />
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          </div>
          <div className="relative mt-auto flex items-center justify-between overflow-hidden rounded-lg border border-brand/20 bg-brand/[0.08] px-2.5 py-2">
            <div>
              <p className="font-mono text-[6px] uppercase tracking-[0.14em] text-brand-light">
                Signature vérifiée
              </p>
              <p className="mt-1 font-mono text-[9px] font-semibold text-white">{mark} · Ed25519</p>
            </div>
            <Lock size={16} className="text-brand-light/80" />
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'parking') {
    return (
      <div className="h-full p-3">
        <div className="mb-2 flex items-center justify-between">
          <span className="font-mono text-[7px] uppercase tracking-[0.14em] text-night-muted">
            Plan des places
          </span>
          <span className="flex items-center gap-2 text-[6px] text-night-muted">
            <span className="inline-flex items-center gap-1">
              <i className="h-1.5 w-1.5 rounded-full bg-brand" /> libre
            </span>
            <span className="inline-flex items-center gap-1">
              <i className="h-1.5 w-1.5 rounded-full bg-white/25" /> occupée
            </span>
          </span>
        </div>
        <div className="grid grid-cols-4 gap-1.5">
          {[0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0].map((occupied, index) => (
            <div
              key={index}
              className={`flex h-7 items-center justify-center rounded-md border ${
                occupied
                  ? 'border-white/10 bg-white/[0.05]'
                  : index === 5
                    ? 'border-brand bg-brand/25'
                    : 'border-brand/20 bg-brand/[0.07]'
              }`}
            >
              <span
                className={`h-2 w-3.5 rounded-sm ${
                  occupied ? 'bg-white/15' : index === 5 ? 'bg-brand-light/80' : 'bg-brand/40'
                }`}
              />
            </div>
          ))}
        </div>
        <div className="mt-2 flex items-center justify-between rounded-md border border-white/[0.07] bg-white/[0.03] px-2 py-1.5">
          <span className="h-1 w-1/3 rounded-full bg-white/10" />
          <span className="rounded bg-brand px-2 py-0.5 text-[6px] font-semibold text-white">
            Réserver
          </span>
        </div>
      </div>
    );
  }

  if (variant === 'energy') {
    return (
      <div className="flex h-full gap-2.5 p-3">
        <div className="flex flex-1 flex-col">
          <span className="font-mono text-[7px] uppercase tracking-[0.14em] text-night-muted">
            Consommation
          </span>
          <div className="mt-auto flex h-[62%] items-end gap-1.5">
            {[38, 58, 44, 76, 52, 88, 64, 72, 46, 82].map((height, index) => (
              <span
                key={index}
                style={{ height: `${height}%` }}
                className={`flex-1 rounded-t-sm ${
                  index === 7 ? 'bg-brand' : 'bg-brand/25'
                }`}
              />
            ))}
          </div>
          <div className="mt-1.5 h-px w-full bg-white/10" />
        </div>
        <div className="flex w-[34%] flex-col items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.025] p-2">
          <div
            className="relative h-14 w-14 rounded-full"
            style={{
              background:
                'conic-gradient(#3B82F6 0deg 236deg, rgba(139,92,246,0.8) 236deg 300deg, rgba(255,255,255,0.08) 300deg 360deg)',
            }}
          >
            <span className="absolute inset-2 rounded-full bg-night-surface" />
            <span className="absolute inset-0 flex items-center justify-center font-mono text-[8px] font-semibold text-white">
              MVC
            </span>
          </div>
          <span className="mt-2 h-1 w-3/4 rounded-full bg-white/10" />
        </div>
      </div>
    );
  }

  if (variant === 'restaurant') {
    return (
      <div className="h-full p-3">
        <div className="mb-2 flex items-center justify-between">
          <span className="font-mono text-[7px] uppercase tracking-[0.14em] text-night-muted">
            Commandes en cours
          </span>
          <span className="rounded bg-brand/15 px-1.5 py-0.5 font-mono text-[6px] text-brand-light">
            Service
          </span>
        </div>
        <div className="space-y-1.5">
          {[0, 1, 2, 3].map((row) => (
            <div
              key={row}
              className="flex items-center gap-2 rounded-md border border-white/[0.07] bg-white/[0.03] px-2 py-1.5"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded bg-brand/15 font-mono text-[7px] font-semibold text-brand-light">
                {String(row + 1).padStart(2, '0')}
              </span>
              <span className="h-1 flex-1 rounded-full bg-white/10" />
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  row === 0 ? 'bg-emerald-400' : row === 1 ? 'bg-brand' : 'bg-white/20'
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (variant === 'library') {
    return (
      <div className="h-full p-3">
        <span className="font-mono text-[7px] uppercase tracking-[0.14em] text-night-muted">
          Rayons
        </span>
        <div className="mt-2 space-y-2">
          {[0, 1, 2].map((shelf) => (
            <div key={shelf} className="border-b border-white/10 pb-1.5">
              <div className="flex items-end gap-1">
                {[26, 34, 22, 30, 18, 28, 24, 32].map((height, index) => (
                  <span
                    key={index}
                    style={{ height }}
                    className={`w-2.5 rounded-t-sm ${
                      (shelf + index) % 4 === 0
                        ? 'bg-brand/70'
                        : (shelf + index) % 3 === 0
                          ? 'bg-violet/60'
                          : 'bg-white/10'
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="h-full p-3">
      <div className="flex items-center justify-between rounded-md border border-white/[0.07] bg-white/[0.03] px-2 py-1">
        <span className="h-1.5 w-1.5 rounded-full bg-brand" />
        <span className="h-1 w-1/3 rounded-full bg-white/10" />
        <span className="h-1 w-8 rounded-full bg-white/10" />
      </div>
      <div className="mt-2 grid h-[calc(100%_-_1.75rem)] grid-cols-[1.2fr_0.8fr] gap-2">
        <div className="flex flex-col justify-center rounded-md border border-white/[0.06] bg-white/[0.025] p-2">
          <span className="h-2 w-4/5 rounded bg-white/25" />
          <span className="mt-1.5 h-1.5 w-full rounded bg-white/10" />
          <span className="mt-1 h-1.5 w-2/3 rounded bg-white/10" />
          <span className="mt-2 h-4 w-14 rounded bg-brand" />
        </div>
        <div className="rounded-md border border-brand/20 bg-gradient-to-br from-brand/20 to-violet/10" />
      </div>
    </div>
  );
}

function ProjectPreview({ project }) {
  if (project.image) {
    return (
      <div className="aspect-[2/1] overflow-hidden rounded-[10px] bg-page">
        <img
          src={project.image}
          alt={`Aperçu du projet ${project.title}`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={`Illustration conceptuelle du projet ${project.title}, sans capture réelle`}
      className="relative aspect-[2/1] overflow-hidden rounded-[10px] bg-night"
    >
      <div aria-hidden="true" className="hero-halo absolute inset-0 opacity-80" />
      <span className="absolute right-3 top-3 z-20 rounded-full border border-white/15 bg-night/55 px-2 py-1 font-mono text-[8px] uppercase tracking-[0.16em] text-night-muted backdrop-blur">
        Illustration
      </span>
      <div
        aria-hidden="true"
        className="absolute inset-x-5 bottom-0 top-6 overflow-hidden rounded-t-xl border border-white/10 bg-night-surface shadow-2xl shadow-black/50 transition-transform duration-500 group-hover:-translate-y-1"
      >
        <div className="flex items-center gap-1.5 border-b border-white/[0.07] px-3 py-2">
          <span className="h-1.5 w-1.5 rounded-full bg-brand/70" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
          <span className="ml-2 truncate font-mono text-[7px] uppercase tracking-[0.16em] text-night-muted">
            {project.mark} · {project.subtitle}
          </span>
        </div>
        <div className="h-[calc(100%_-_25px)]">
          <PreviewContent variant={project.preview} mark={project.mark} />
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, onSelect }) {
  const visibleTags = project.tags.slice(0, 4);
  const hiddenTags = project.tags.slice(4);
  const hasLink = Boolean(project.github || project.demo);

  return (
    <article
      className="card group flex h-full flex-col overflow-hidden p-3 transition duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-card-hover"
    >
      <ProjectPreview project={project} />

      <div className="flex flex-1 flex-col px-2 pb-2 pt-4">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h3
                className={`text-lg font-bold tracking-[-0.025em] text-ink ${
                  hasLink ? 'transition-colors duration-200 group-hover:text-brand-ink' : ''
                }`}
              >
                {project.title}
              </h3>
              {project.badge && (
                <span className="inline-flex items-center rounded-full bg-brand/10 px-2.5 py-0.5 text-[10px] font-semibold text-brand-ink">
                  {project.badge}
                </span>
              )}
            </div>
          </div>

          <button
            type="button"
            onClick={() => onSelect(project)}
            aria-label={`Voir les détails du projet ${project.title}`}
            aria-haspopup="dialog"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-page text-ink transition-colors hover:bg-brand-strong hover:text-white"
          >
            <ArrowUpRight size={19} aria-hidden="true" />
          </button>
        </div>

        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{project.description}</p>

        <ul className="mt-auto flex flex-wrap gap-2 pt-4" aria-label={`Technologies du projet ${project.title}`}>
          {visibleTags.map((tag) => (
            <li key={tag} className="tag">
              {tag}
            </li>
          ))}
          {hiddenTags.length > 0 && (
            <li
              className="tag"
              title={hiddenTags.join(', ')}
              aria-label={`Autres technologies : ${hiddenTags.join(', ')}`}
            >
              +{hiddenTags.length}
            </li>
          )}
        </ul>
      </div>
    </article>
  );
}

function ProjectGallery({ project }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeScreenshot = project.screenshots[activeIndex];

  return (
    <div>
      <figure>
        <div className="aspect-video overflow-hidden rounded-[10px] border border-line bg-page">
          <img src={activeScreenshot.src} alt={activeScreenshot.alt} decoding="async" className="h-full w-full object-contain" />
        </div>
        <figcaption className="mt-2 text-sm leading-relaxed text-muted" aria-live="polite">
          {activeScreenshot.alt}
        </figcaption>
      </figure>
      <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-6" role="group" aria-label="Captures du projet">
        {project.screenshots.map((screenshot, index) => (
          <button
            key={screenshot.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Afficher la capture ${index + 1} : ${screenshot.alt}`}
            aria-pressed={activeIndex === index}
            className={`min-h-11 overflow-hidden rounded-lg border-2 p-1 transition-colors ${activeIndex === index ? 'border-brand-strong' : 'border-line hover:border-brand/50'}`}
          >
            <img src={screenshot.src} alt="" loading="lazy" decoding="async" className="aspect-video w-full rounded object-contain" />
          </button>
        ))}
      </div>
    </div>
  );
}

function ProjectDetails({ project, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    if (!dialog.open) dialog.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="project-detail-title"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) dialogRef.current.close();
      }}
      className={`project-dialog m-auto max-h-[85dvh] w-[calc(100%_-_2rem)] ${project.screenshots?.length ? 'max-w-4xl' : 'max-w-xl'} overflow-y-auto rounded-card border border-line bg-surface p-0 text-ink shadow-2xl`}
    >
      <div className="p-5 sm:p-7">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="eyebrow">{categoryLabels[project.category]} · {project.year}</p>
            <h2 id="project-detail-title" className="mt-2 text-2xl font-bold tracking-tight">{project.title}</h2>
          </div>
          <button type="button" onClick={() => dialogRef.current.close()} aria-label="Fermer les détails" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line hover:bg-page">
            <X size={20} aria-hidden="true" />
          </button>
        </div>
        {project.screenshots?.length ? <ProjectGallery project={project} /> : <ProjectPreview project={project} />}
        <p className="mt-5 text-base leading-relaxed text-muted">{project.details || project.description}</p>
        {project.architecture && <p className="mt-3 text-sm leading-relaxed text-muted"><span className="font-semibold text-ink">Architecture : </span>{project.architecture}</p>}
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies utilisées">
          {project.tags.map((tag) => <li key={tag} className="tag">{tag}</li>)}
        </ul>
        <div className="mt-7 flex flex-wrap gap-3">
          {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">Code sur GitHub <ArrowUpRight size={16} aria-hidden="true" /><span className="sr-only"> (nouvel onglet)</span></a>}
          {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Voir la démo <ArrowUpRight size={16} aria-hidden="true" /><span className="sr-only"> (nouvel onglet)</span></a>}
          {!project.github && !project.demo && <a href="#contact" onClick={() => dialogRef.current.close()} className="btn btn-primary">Échanger sur ce projet <ArrowRight size={16} aria-hidden="true" /></a>}
        </div>
      </div>
    </dialog>
  );
}

export default function Projects() {
  const reducedMotion = useReducedMotion();
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const visibleProjects = projects.filter((project) =>
    showAll ? activeCategory === 'all' || project.category === activeCategory : project.featured,
  );

  return (
    <section id="projects" aria-labelledby="projects-title" className="scroll-mt-24 bg-page py-16 sm:py-20">
      <div className="shell">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">
              <span className="flex h-5 w-5 items-center justify-center rounded-[5px] border border-brand/25 bg-brand/10 text-brand-ink">
                <LayoutGrid size={11} aria-hidden="true" />
              </span>
              Mes réalisations
            </p>
            <h2 id="projects-title" className="mt-3 text-[clamp(1.8rem,3vw,2.6rem)] font-extrabold leading-[1.08] tracking-[-0.045em] text-ink">
              {showAll ? 'Tous mes projets' : 'Projets sélectionnés'}
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
              Des applications concrètes qui répondent à des problématiques réelles.
            </p>
          </Reveal>
          <button
            type="button"
            aria-expanded={showAll}
            aria-controls="project-list project-filters"
            onClick={() => { setShowAll((value) => !value); setActiveCategory('all'); }}
            className="inline-flex min-h-11 shrink-0 items-center gap-2 self-start text-sm font-semibold text-brand-ink hover:text-brand-strong sm:self-auto"
          >
            {showAll ? 'Voir la sélection' : 'Voir tous les projets'}
            <ArrowRight size={16} aria-hidden="true" />
          </button>
        </div>

        <div id="project-filters" hidden={!showAll} className="mt-7">
          <div role="group" aria-label="Filtrer les projets par catégorie" className="flex flex-wrap gap-2">
            {projectCategories.map((category) => (
              <button key={category.id} type="button" aria-pressed={activeCategory === category.id} onClick={() => setActiveCategory(category.id)} className={`min-h-11 rounded-[10px] border px-4 py-2 text-sm font-medium transition-colors ${activeCategory === category.id ? 'border-brand-strong bg-brand-strong text-white' : 'border-line bg-surface text-muted hover:text-brand-ink'}`}>
                {category.label}
              </button>
            ))}
          </div>
        </div>
        <p className="sr-only" role="status">{visibleProjects.length} projets affichés.</p>
        <motion.ul id="project-list" layout={!reducedMotion} className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {visibleProjects.map((project) => (
              <motion.li key={project.title} layout={!reducedMotion} initial={reducedMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={reducedMotion ? undefined : { opacity: 0, scale: 0.98 }} transition={{ duration: reducedMotion ? 0 : 0.28 }} className="h-full">
                <ProjectCard project={project} onSelect={setSelectedProject} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
      {selectedProject && <ProjectDetails project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  );
}
