import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function BackToTop({ visible }) {
  const reducedMotion = useReducedMotion();

  const buttonClassName =
    'fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-line bg-surface text-ink shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:bg-soft-rose';

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible &&
        (reducedMotion ? (
          <button type="button" aria-label="Retour en haut" onClick={handleClick} className={buttonClassName}>
            <ArrowUp size={18} aria-hidden="true" />
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
            <ArrowUp size={18} aria-hidden="true" />
          </motion.button>
        ))}
    </AnimatePresence>
  );
}
