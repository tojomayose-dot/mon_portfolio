import { useEffect, useState } from 'react';

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
      const pageColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--page-bg').trim();
      themeColorMeta.setAttribute('content', pageColor);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((previous) => (previous === 'dark' ? 'light' : 'dark'));
  };

  return { theme, toggleTheme };
}
