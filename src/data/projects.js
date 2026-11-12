import { GITHUB_URL } from '../site';

const madaidScreenshots = [
  { src: '/MADAID/Capture d’écran du 2026-11-12 11-13-10.png', alt: 'Tableau de bord de Mada-ID : citoyens, institutions, certificats et dernières activités' },
  { src: '/MADAID/Capture d’écran du 2026-11-12 11-13-15.png', alt: 'Gestion des citoyens et recherche des identités numériques' },
  { src: '/MADAID/Capture d’écran du 2026-11-12 11-13-19.png', alt: 'Gestion des institutions et des organismes certifiés de Mada-ID' },
  { src: '/MADAID/Capture d’écran du 2026-11-12 11-13-38.png', alt: 'Livre de Vie : historique des documents officiels et signatures vérifiées' },
  { src: '/MADAID/Capture d’écran du 2026-11-12 11-13-25.png', alt: 'QR code d’un certificat à scanner avec Mada-ID Wallet' },
  { src: '/MADAID/Capture d’écran du 2026-11-12 11-13-59.png', alt: 'Vérification de l’authenticité d’un document par signature Ed25519' },
  { src: '/MADAID/Capture d’écran du 2026-11-12 11-42-03.png', alt: 'Page d’accueil de la plateforme d’identité numérique Mada-ID' },
  { src: '/MADAID/Capture d’écran du 2026-11-12 11-41-54.png', alt: 'Page de connexion à la plateforme Mada-ID' },
  { src: '/MADAID/Screenshot_20260529-080529.png', alt: 'Vue mobile du Livre de Vie et des documents certifiés', portrait: true },
  { src: '/MADAID/Screenshot_20260529-111416.png', alt: 'Vue mobile du QR code d’un certificat de naissance', portrait: true },
];

const rizicoleScreenshots = [
  { src: '/Laravel/Capture d’écran du 2026-11-12 09-47-35.png', alt: 'Tableau de bord de Rizicole : production, consommation d’eau et rentabilité' },
  { src: '/Laravel/Capture d’écran du 2026-11-12 09-49-39.png', alt: 'Cartographie interactive des parcelles rizicoles et délimitation des contours' },
  { src: '/Laravel/Capture d’écran du 2026-11-12 09-50-04.png', alt: 'Suivi des activités techniques par campagne et par parcelle' },
  { src: '/Laravel/Capture d’écran du 2026-11-12 09-50-17.png', alt: 'Gestion de l’irrigation, des quotas d’eau et du régime hydrique des parcelles' },
  { src: '/Laravel/Capture d’écran du 2026-11-12 09-50-23.png', alt: 'Suivi des finances et de la rentabilité des campagnes agricoles' },
  { src: '/Laravel/Capture d’écran du 2026-11-12 09-47-08.png', alt: 'Page de connexion à la plateforme Rizicole' },
];

/* Captures réelles lorsqu’elles sont disponibles, illustrations CSS sinon. */
export const projects = [
  {
    title: 'Rizicole SaaS',
    subtitle: 'Gestion d’exploitations agricoles',
    badge: 'SaaS',
    year: '2026',
    mark: 'RZ',
    category: 'web',
    image: rizicoleScreenshots[0].src,
    screenshots: rizicoleScreenshots,
    description: 'Plateforme SaaS de gestion des exploitations rizicoles, avec cartographie interactive et suivi des activités agricoles.',
    details: 'Développement d’une application web SaaS dédiée à la gestion des exploitations rizicoles, permettant de centraliser le suivi des parcelles, des campagnes agricoles, de l’irrigation, des stocks, des récoltes et des finances. La plateforme intègre une cartographie interactive pour visualiser et délimiter les parcelles agricoles, ainsi qu’un tableau de bord pour faciliter le suivi des activités et la prise de décision.',
    architecture: 'SaaS multi-tenant avec gestion des rôles et des autorisations.',
    tags: ['React.js', 'Laravel', 'MySQL', 'Leaflet.js'],
    github: null,
    demo: null,
    featured: true,
  },
  {
    title: 'Mada-ID',
    subtitle: 'Certification numérique',
    badge: 'Web / API',
    year: '2026',
    mark: 'MI',
    category: 'backend',
    image: madaidScreenshots[0].src,
    screenshots: madaidScreenshots,
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
