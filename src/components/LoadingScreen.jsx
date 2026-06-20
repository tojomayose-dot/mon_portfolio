import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(onComplete, 800); // laisse le temps à l'anim de sortie
          }, 300);
          return 100;
        }
        // vitesse irrégulière, plus réaliste qu'une progression linéaire
        return prev + Math.floor(Math.random() * 8) + 2;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-50 bg-bg flex items-center justify-center"
        >
          {/* Rideau qui se referme verticalement */}
          <motion.div
            initial={{ scaleY: 1 }}
            animate={isComplete ? { scaleY: 0 } : { scaleY: 1 }}
            className="absolute inset-0 bg-bg origin-top"
          />

          <div className="relative z-10 text-center px-6">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-mono text-text-muted text-sm mb-6 tracking-wider"
            >
              initialisation du portfolio...
            </motion.p>

            {/* Compteur géant */}
            <div className="font-mono text-6xl md:text-8xl font-bold text-text mb-8 tabular-nums">
              {Math.min(progress, 100)}
              <span className="text-accent">%</span>
            </div>

            {/* Barre de progression */}
            <div className="w-64 md:w-80 h-[2px] bg-border mx-auto overflow-hidden">
              <motion.div
                className="h-full bg-accent"
                style={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ ease: "linear" }}
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="font-mono text-xs text-text-muted mt-6"
            >
              {progress < 30 && "chargement des composants"}
              {progress >= 30 && progress < 60 && "compilation des styles"}
              {progress >= 60 && progress < 90 && "rendu de l'interface"}
              {progress >= 90 && "prêt"}
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}