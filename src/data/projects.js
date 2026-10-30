import { GITHUB_URL } from '../site';

/* Contenus réels des projets. Les visuels sont des illustrations CSS
   (aucune capture d'application n'est inventée). */
export const projects = [
  {
    title: 'Mada-ID',
    subtitle: 'Certification numérique',
    badge: 'Web / API',
    year: '2026',
    mark: 'MI',
    category: 'backend',
    preview: 'api',
    description:
      'Certification et vérification de documents numériques.',
    details: 'Backend d’API REST pour certifier des diplômes et des actes officiels. Les signatures Ed25519 et les empreintes SHA-256 permettent de vérifier l’intégrité et l’authenticité des documents.',
    tags: ['Python', 'FastAPI', 'PostgreSQL'],
    github: null,
    demo: null,
    featured: true,
  },
  {
    title: 'Système de parking',
    subtitle: 'Application web',
    year: '2026',
    mark: 'PK',
    category: 'web',
    preview: 'parking',
    description:
      'Application de gestion et réservation de places de parking.',
    details: 'Application web de réservation et de libération de places de parking, avec gestion des utilisateurs et des abonnements.',
    tags: ['React', 'Spring Boot', 'PostgreSQL'],
    github: null,
    demo: null,
    featured: true,
  },
  {
    title: "Gestion de l'énergie",
    subtitle: 'Application desktop',
    year: '2026',
    mark: 'EN',
    category: 'desktop',
    preview: 'energy',
    description:
      "Application de suivi et d'analyse de la consommation énergétique.",
    details: "Application desktop de suivi et d’analyse de données énergétiques, avec visualisation interactive de graphiques et architecture MVC pour faciliter la maintenance.",
    tags: ['Java', 'JavaFX', 'MySQL'],
    github: null,
    demo: null,
    featured: true,
  },
  {
    title: 'Gestion de restaurant',
    subtitle: 'Application desktop',
    year: '2025',
    mark: 'GR',
    category: 'desktop',
    preview: 'restaurant',
    description: 'Application complète de gestion des commandes et du service en restaurant.',
    tags: ['Python', 'PyQt6', 'SQLite', 'MVC'],
    github: null,
    demo: null,
    featured: false,
  },
  {
    title: 'Gestion de bibliothèque',
    subtitle: 'Application desktop',
    year: '2025',
    mark: 'GB',
    category: 'desktop',
    preview: 'library',
    description: "Interface de gestion des stocks de livres, des emprunts et des retours.",
    tags: ['Python', 'PyQt6', 'MySQL', 'MVC'],
    github: null,
    demo: null,
    featured: false,
  },
  {
    title: 'Portfolio personnel',
    subtitle: 'Site web',
    year: '2026',
    mark: 'PF',
    category: 'web',
    preview: 'portfolio',
    description: 'Ce portfolio — design éditorial, thème clair/sombre et animations au scroll.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    github: `${GITHUB_URL}/mon_portfolio`,
    demo: null,
    featured: false,
  },
];

export const categoryLabels = {
  web: 'Web',
  backend: 'Backend',
  desktop: 'Desktop',
  mobile: 'Mobile',
};

/* Catégories calculées depuis les projets : une catégorie vide n'est jamais affichée. */
export const projectCategories = [
  { id: 'all', label: 'Tous' },
  ...Object.entries(categoryLabels)
    .filter(([id]) => projects.some((project) => project.category === id))
    .map(([id, label]) => ({ id, label })),
];
