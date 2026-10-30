import { Moon, Sun } from 'lucide-react';

/**
 * Interrupteur de thème : les deux icônes restent visibles, l'état actif
 * est signalé par le fond clair et `aria-checked`.
 */
export default function ThemeToggle({ theme, toggleTheme }) {
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Activer le thème clair' : 'Activer le thème sombre'}
      title="Basculer entre le thème clair et sombre"
      onClick={toggleTheme}
      className="relative flex h-11 w-[74px] items-center rounded-full border border-white/15 bg-white/[0.05] p-1 transition-colors duration-300 hover:border-white/35"
    >
      <span
        aria-hidden="true"
        className={`absolute left-1 top-1 h-[34px] w-[32px] rounded-full bg-white shadow-sm transition-transform duration-300 ease-out ${
          isDark ? 'translate-x-[32px]' : 'translate-x-0'
        }`}
      />
      <span
        aria-hidden="true"
        className={`relative z-10 flex h-[34px] w-[32px] items-center justify-center transition-colors ${
          isDark ? 'text-night-muted' : 'text-night'
        }`}
      >
        <Sun size={14} strokeWidth={2.2} />
      </span>
      <span
        aria-hidden="true"
        className={`relative z-10 ml-[2px] flex h-[34px] w-[32px] items-center justify-center transition-colors ${
          isDark ? 'text-night' : 'text-night-muted'
        }`}
      >
        <Moon size={14} strokeWidth={2.2} />
      </span>
    </button>
  );
}
