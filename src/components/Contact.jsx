import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const FORM_ID = 'YOUR_FORM_ID';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);

    if (FORM_ID === 'YOUR_FORM_ID') {
      await new Promise((resolve) => setTimeout(resolve, 700));
      setIsSending(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      return;
    }

    try {
      const response = await fetch(`https://formspree.io/f/${FORM_ID}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Erreur Formspree');
      }

      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      setIsSubmitted(false);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-32 text-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-shell p-8 md:p-12"
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-sm tracking-[0.18em] text-[#22D3EE] mb-3 uppercase"
        >
          // contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 text-3xl font-bold tracking-[-0.04em] text-text md:text-4xl"
        >
          Travaillons ensemble
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-10 text-lg text-text-muted"
        >
          Je suis ouvert aux opportunités de stage, aux missions freelance et aux projets collaboratifs.
          N’hésitez pas à me contacter pour échanger.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="mb-10 space-y-4 text-left"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nom"
              required
              className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-text placeholder:text-text-muted focus:border-[#22D3EE] focus:outline-none focus:ring-2 focus:ring-[#22D3EE]/30"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-text placeholder:text-text-muted focus:border-[#22D3EE] focus:outline-none focus:ring-2 focus:ring-[#22D3EE]/30"
            />
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Votre message"
            required
            rows="5"
            className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-text placeholder:text-text-muted focus:border-[#22D3EE] focus:outline-none focus:ring-2 focus:ring-[#22D3EE]/30"
          />

          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              disabled={isSending}
              className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 font-medium transition ${
                isSubmitted
                  ? 'bg-emerald-500 text-white'
                  : 'bg-[#0A0A0A] text-white hover:opacity-95'
              } ${isSending ? 'cursor-not-allowed opacity-70' : ''}`}
            >
              {isSubmitted ? (
                <>
                  Envoyé <span aria-hidden="true">✓</span>
                </>
              ) : (
                <>
                  <Send size={16} />
                  {isSending ? 'Envoi...' : 'Envoyer'}
                </>
              )}
            </button>

            <a
              href="mailto:tojo.randrianantenain@gmail.com"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-5 py-3 text-text transition hover:border-[#22D3EE]"
            >
              <Mail size={16} />
              Email direct
            </a>
          </div>
        </motion.form>

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
            className="text-text-muted transition hover:text-[#22D3EE]"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/tojo-randrianantenaina"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-text-muted transition hover:text-[#A78BFA]"
          >
            <FaLinkedin size={24} />
          </a>
        </motion.div>
      </motion.div>

      <p className="mt-8 font-mono text-xs uppercase tracking-[0.14em] text-text-muted">
        © 2026 — Tojo RANDRIANANTENAINA
      </p>
    </section>
  );
}
