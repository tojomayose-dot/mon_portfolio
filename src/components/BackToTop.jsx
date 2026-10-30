import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function BackToTop({ visible }) {
  const reducedMotion = useReducedMotion();

  const buttonClassName =
    'fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-brand-strong text-white shadow-[0_14px_30px_-12px_rgba(37,99,235,0.9)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-deep';

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
