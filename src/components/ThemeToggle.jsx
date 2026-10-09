import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="relative flex h-7 w-14 items-center rounded-full border border-border bg-surface px-1 transition-colors duration-300 hover:border-accent"
      aria-label="Changer de thème"
    >
      <div
        className={`flex h-5 w-5 items-center justify-center rounded-full bg-accent transition-transform duration-300 ${
          theme === 'dark' ? 'translate-x-0' : 'translate-x-6'
        }`}
      >
        {theme === 'dark' ? (
          <Moon size={11} className="text-bg" />
        ) : (
          <Sun size={11} className="text-bg" />
        )}
      </div>
    </button>
  );
}