/**
 * Coordonnées et liens du site, centralisés pour éviter les doublons.
 * L'URL publique du site, elle, vit dans VITE_SITE_URL (voir .env.example),
 * car elle doit être injectée dans le HTML statique au build.
 */
export const EMAIL = 'tojo.randrianantenain@gmail.com';
export const GITHUB_URL = 'https://github.com/tojomayose-dot';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/tojo-randrianantenaina';
export const CV_URL = '/cv.pdf';

export const FULL_NAME = 'Tojo Randrianantenaina';
export const SITE_NAME = 'Tojo';
export const ROLE = 'Développeur Full-Stack';
export const LOCATION = 'Antananarivo, Madagascar';

/* Disponibilité réellement déclarée sur le portfolio : elle alimente le badge
   du hero et les rappels de contact. Ne pas l'afficher si elle n'est plus vraie. */
export const AVAILABILITY = 'Disponible pour un stage ou une opportunité';
export const AVAILABILITY_SHORT = 'Ouvert aux stages et missions freelance';
