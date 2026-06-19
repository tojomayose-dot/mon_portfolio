import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function TechGrid() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();

  // Les lignes s'illuminent progressivement avec le scroll
  const lineOpacity = useTransform(scrollYProgress, [0, 0.3], [0.15, 0.5]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 0.6]);

  const verticalLines = Array.from({ length: 13 }, (_, i) => i * 100);
  const horizontalLines = Array.from({ length: 9 }, (_, i) => i * 100);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Lignes verticales */}
        {verticalLines.map((x, i) => (
          <motion.line
            key={`v-${i}`}
            x1={x}
            y1="0"
            x2={x}
            y2="800"
            stroke="#2A2A2A"
            strokeWidth="1"
            style={{ opacity: lineOpacity }}
          />
        ))}

        {/* Lignes horizontales */}
        {horizontalLines.map((y, i) => (
          <motion.line
            key={`h-${i}`}
            x1="0"
            y1={y}
            x2="1200"
            y2={y}
            stroke="#2A2A2A"
            strokeWidth="1"
            style={{ opacity: lineOpacity }}
          />
        ))}

        {/* Lignes accent cyan qui s'illuminent au scroll */}
        <motion.line
          x1="300" y1="0" x2="300" y2="800"
          stroke="#22D3EE" strokeWidth="1.5"
          style={{ opacity: glowOpacity }}
        />
        <motion.line
          x1="900" y1="0" x2="900" y2="800"
          stroke="#A78BFA" strokeWidth="1.5"
          style={{ opacity: glowOpacity }}
        />
        <motion.line
          x1="0" y1="400" x2="1200" y2="400"
          stroke="#22D3EE" strokeWidth="1.5"
          style={{ opacity: glowOpacity }}
        />

        {/* Point d'intersection lumineux */}
        <motion.circle
          cx="300" cy="400" r="3"
          fill="#22D3EE"
          style={{ opacity: glowOpacity }}
        />
        <motion.circle
          cx="900" cy="400" r="3"
          fill="#A78BFA"
          style={{ opacity: glowOpacity }}
        />
      </svg>

      {/* Vignette pour adoucir les bords */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg" />
    </div>
  );
}