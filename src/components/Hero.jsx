import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight, Download, MapPin, Sparkles } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import TypewriterText from './TypewriterText';

const techStack = ['React', 'TypeScript', 'Node', 'Python', 'Postgres', 'UI/UX'];

export default function Hero() {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const smoothX = useSpring(cursorX, { stiffness: 300, damping: 20, mass: 0.2 });
  const smoothY = useSpring(cursorY, { stiffness: 300, damping: 20, mass: 0.2 });

  useEffect(() => {
    const handlePointerMove = (event) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
    };

    window.addEventListener('pointermove', handlePointerMove);
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, [cursorX, cursorY]);

  return (
    <section className="relative mx-auto max-w-7xl cursor-none px-6 pb-20 pt-28 md:pt-32">
      <motion.div
        aria-hidden="true"
        className="cursor-follower"
        style={{ x: smoothX, y: smoothY }}
      />

      <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_1.35fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-xl"
        >
          <span className="hero-badge">
            <span className="inline-block h-2 w-2 rounded-full bg-[#22D3EE]" />
            Disponible pour travailler
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-[0.94] tracking-[-0.06em] text-text md:text-6xl xl:text-[5.25rem]">
            Bonjour, je suis
            <span className="mt-2 block">
              <TypewriterText text="Tojo" className="inline-block" delay={300} />
            </span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-text-muted">
            Je conçois des produits numériques réfléchis, en alliant interfaces élégantes,
            pensée produit solide et développement rigoureux pour transformer les idées en expériences abouties.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <a href="#projects" className="cta-primary px-6 py-3 text-sm md:text-base">
              Voir les projets
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="grid auto-rows-[150px] grid-cols-2 gap-5"
        >
          <div className="bento-card group col-span-2 row-span-2 overflow-hidden p-3">
            <img
              src="/photo.jpg"
              alt="Tojo Randrianantenaina"
              className="h-full w-full rounded-[18px] object-cover"
            />
          </div>

          <div className="bento-card flex flex-col justify-between p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted">Profil</p>
            <div>
              <h2 className="text-xl font-semibold text-text">Tojo Randrianantenaina</h2>
              <div className="mt-3 flex items-center gap-2 text-sm text-text-muted">
                <MapPin size={14} className="text-[#22D3EE]" />
                Antananarivo, Madagascar
              </div>
            </div>
            <span className="mt-4 inline-flex w-fit items-center rounded-full bg-[#ECFEFF] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-[#0F172A]">
              Ouvert aux missions
            </span>
          </div>

          <div className="bento-card bg-[#DFFBFF] p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#0F172A]/70">Stack</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {techStack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#9BEAF3] bg-white/80 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[#0F172A]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="bento-card flex flex-col items-center justify-center gap-3 p-4">
            <div className="flex items-center gap-4 text-text">
              <a href="https://github.com/tojomayose-dot" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-[#22D3EE] transition-colors">
                <FaGithub size={22} />
              </a>
              <a href="https://www.linkedin.com/in/tojo-randrianantenaina" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-[#A78BFA] transition-colors">
                <FaLinkedin size={22} />
              </a>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted">Réseaux</p>
          </div>

          <a href="#projects" className="bento-card block bg-[#F3E8FF] p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#0F172A]/70">En cours de création</p>
              <Sparkles size={14} className="text-[#7C3AED]" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-[#0F172A]">Portfolio v2</h3>
            <div className="mt-4 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[#0F172A]/75">
              Explorer
              <ArrowUpRight size={14} />
            </div>
          </a>

          <a href="/cv.pdf" download className="bento-card flex flex-col justify-between bg-[#ECFEFF] p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#0F172A]/70">CV</p>
              <Download size={15} className="text-[#0F172A]" />
            </div>
            <div>
              <p className="mt-6 text-2xl font-semibold text-[#0F172A]">Résumé</p>
              <p className="mt-2 text-xs uppercase tracking-[0.16em] text-[#0F172A]/70">Télécharger</p>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}