# Portfolio de Tojo Randrianantenaina

Portfolio React / Vite inspiré de `reference-portfolio.png` : accueil, projets, présentation, compétences filtrables et contact. Le thème clair/sombre, les animations et le menu mobile respectent la préférence de mouvement réduit et la navigation au clavier.

## Développement

```bash
npm install
npm run dev
```

```bash
npm run lint
npm run build
npm run preview
```

## Configuration

Copier `.env.example` en `.env`, puis renseigner :

- `VITE_SITE_URL` : URL publique complète, sans slash final. Elle alimente les balises canonical et les liens de partage. Sans URL, les balises qui exigent un domaine sont omises.
- `VITE_FORMSPREE_ID` : identifiant du formulaire Formspree pour activer l’envoi direct. Sans identifiant, le formulaire valide les champs puis ouvre la messagerie du visiteur avec le message prérempli. Aucun envoi n’est alors confirmé par le site.

Relancer le serveur après un changement de configuration ; reconstruire le site avant de le publier.

## Contenu

- `src/site.js` : nom, coordonnées, liens sociaux et CV.
- `src/data/projects.js` : projets, technologies et liens. `featured` contrôle la sélection initiale ; `details` enrichit la fiche. Ajouter `image: '/projets/nom.webp'` et placer une capture dans `public/projets/` pour remplacer une illustration.
- `src/data/skills.js` : compétences par catégorie.
- `src/components/About.jsx` : présentation et formation issue du CV fourni.
- `public/photo.png`, `public/cv.pdf`, `public/og-image.png` : portrait, CV et image de partage 1200 × 630.

Les aperçus actuels des projets sont des illustrations CSS. Les liens de démonstration et de dépôt non fournis restent absents ; les fiches permettent de contacter Tojo à propos de ces projets.

Voir [AUDIT.md](AUDIT.md) pour les corrections et les éléments restant à renseigner.
