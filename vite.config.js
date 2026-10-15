import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/**
 * Remplace %SITE_URL% dans index.html par l'URL publique du site.
 * Les balises Open Graph et canonical doivent être présentes dans le HTML
 * statique : les crawlers de LinkedIn / Discord / Twitter n'exécutent pas le JS.
 */
function siteUrlPlugin(siteUrl) {
  return {
    name: 'inject-site-url',
    transformIndexHtml: (html) => html.replaceAll('%SITE_URL%', siteUrl),
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const siteUrl = (env.VITE_SITE_URL || 'https://votre-domaine.com').replace(/\/+$/, '')

  return {
    plugins: [react(), tailwindcss(), siteUrlPlugin(siteUrl)],
  }
})
