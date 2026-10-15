import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function BackToTop({ visible }) {
  const reducedMotion = useReducedMotion();

  const buttonClassName =
    'fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface/90 text-text shadow-lg shadow-black/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-accent';

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible &&
        (reducedMotion ? (
          <button type="button" aria-label="Retour en haut" onClick={handleClick} className={buttonClassName}>
            <ArrowUp size={18} className="text-accent" />
          </button>
        ) : (
          <motion.button
            type="button"
            aria-label="Retour en haut"
            onClick={handleClick}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className={buttonClassName}
          >
            <ArrowUp size={18} className="text-accent" />
          </motion.button>
        ))}
    </AnimatePresence>
  );
}
