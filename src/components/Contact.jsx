import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 max-w-3xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-shell rounded-3xl p-8 md:p-12"
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-sm text-accent mb-3 tracking-wider"
        >
          // contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-text mb-6"
        >
          Travaillons ensemble
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="text-text-muted text-lg mb-12"
        >
          Je suis ouvert aux opportunités de stage, aux missions freelance et aux projets collaboratifs.
          N'hésitez pas à me contacter pour échanger.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-6 mb-16"
        >
          <a
            href="mailto:tojo.randrianantenain@gmail.com"
            className="cta-primary px-6 py-3 gap-2"
          >
            <Mail size={18} />
            <span>Me contacter</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-8"
        >
          <a
            href="https://github.com/tojomayose-dot"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-text-muted hover:text-accent transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/tojo-randrianantenaina"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-text-muted hover:text-accent transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
        </motion.div>
      </motion.div>

      <p className="font-mono text-xs text-text-muted mt-8">
        © 2026 — Tojo RANDRIANANTENAINA
      </p>
    </section>
  );
}
