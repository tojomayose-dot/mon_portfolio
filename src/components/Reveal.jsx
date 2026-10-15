import { motion, useReducedMotion } from 'framer-motion';

/**
 * Reveal — apparition en fondu + glissement au scroll.
 * Respecte `prefers-reduced-motion` : sans animation, affichage immédiat.
 */
export default function Reveal({ children, className = '', delay = 0, y = 24 }) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
