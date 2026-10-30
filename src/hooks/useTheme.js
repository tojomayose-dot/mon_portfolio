import { useEffect, useState } from 'react';

/* Couleur de la barre du navigateur (mobile), synchronisée avec le thème actif */
const THEME_COLORS = {
  light: '#F8FAFC',
  dark: '#080F1E',
};

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.style.colorScheme = theme;
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // Le thème reste utilisable lorsque le stockage est désactivé.
    }

    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (themeColorMeta) {
      themeColorMeta.setAttribute('content', THEME_COLORS[theme]);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((previous) => (previous === 'dark' ? 'light' : 'dark'));
  };

  return { theme, toggleTheme };
}
