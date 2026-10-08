import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative w-14 h-7 rounded-full border border-border bg-surface flex items-center px-1 transition-colors"
      aria-label="Changer de thème"
    >
      {/* Track */}
      <motion.div
        animate={{ x: theme === 'dark' ? 0 : 24 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className="w-5 h-5 rounded-full bg-accent flex items-center justify-center"
      >
        {theme === 'dark' ? (
          <Moon size={11} className="text-bg" />
        ) : (
          <Sun size={11} className="text-bg" />
        )}
      </motion.div>
    </motion.button>
  );
}