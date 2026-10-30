# Analyse du portfolio et de la maquette

Référence visuelle : `reference-portfolio.png`. La palette, la typographie et les exemples de composants à droite de l’image servent de guide de style ; ils ne constituent pas des sections à ajouter au portfolio.

## Corrections réalisées

- Portraits réparés : les deux sections appelaient `/photo.jpg`, supprimé du dépôt. Elles utilisent maintenant le portrait fourni `/photo.png`, avec ses dimensions réelles.
- Accueil rapproché de la référence : titre sur quatre lignes à grande largeur, portrait encadré, cartes flottantes et proportions revues.
- Cartes projets plus compactes, technologies sur fond bleu clair et trois projets sélectionnés par défaut.
- Bouton « Voir tous les projets » fonctionnel : les six projets déjà renseignés deviennent accessibles et filtrables par catégorie.
- Flèches de chaque projet remplacées par de vrais boutons ouvrant une fiche accessible. Fermeture par bouton, clic à l’extérieur ou Échap ; défilement de fond bloqué et focus gérés par le dialogue natif.
- Présentation allégée : liste de capacités, portrait en noir et blanc, carte « Toujours curieux ». Parcours dépliable pour conserver les proportions de la maquette.
- Étapes « BTS SIO SLAM » et « Première expérience dev » remplacées : le CV fourni mentionne uniquement la formation en génie logiciel à Esmia Innovation, depuis 2024.
- Compétences : filtres rectangulaires et douze cartes sur une ligne à grande largeur, grille adaptée aux petits écrans.
- Formulaire : validation conservée, libellé explicite lorsque le bouton ouvre une messagerie, blocage des soumissions pendant l’envoi.
- Thème utilisable même si le navigateur bloque le stockage local.
- Image de partage recréée à partir du style du portfolio et du portrait fourni. Suppression du domaine fictif de repli dans les métadonnées.

## Éléments à renseigner avant publication

- URL publique dans `VITE_SITE_URL`, identifiant Formspree si l’envoi direct est souhaité.
- Captures réelles et liens des projets : seules les illustrations CSS et le lien du dépôt du portfolio sont disponibles dans le projet. Les aperçus ne sont pas présentés comme des captures réelles.
- Coordonnées à harmoniser : le site utilise `tojo.randrianantenain@gmail.com`, le CV indique `tojorandrianantenain@gmail.com`. L’adresse existante du site a été conservée.
- Technologies à confirmer : la maquette et les données du site indiquent React / Spring Boot pour le parking et Java / JavaFX / MySQL pour l’énergie ; le CV indique Java / JSP / Tomcat / PostgreSQL et Python / PyQt6 / SQLite / Matplotlib. Les tags de la maquette ont été conservés.

## Vérification

Compilation de production et ESLint. Contrôles dans un navigateur local sur les filtres, les fiches projets, le parcours, le thème, le menu mobile, la validation du formulaire, les ancres et les fichiers publics. Contrôle des largeurs 320, 390, 768, 1024 et 1440 px. L’envoi réel par Formspree n’a pas été testé, aucun identifiant n’étant configuré.
