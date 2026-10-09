import { useState } from 'react';
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
    <section id="contact" className="mx-auto max-w-3xl px-6 py-32">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-6">
        contact
      </p>

      <h2 className="mb-6 text-5xl font-extrabold tracking-[-0.05em] text-text md:text-6xl">
        Travaillons<br />ensemble
      </h2>

      <p className="mb-14 max-w-lg text-lg leading-relaxed text-text-muted">
        Je suis ouvert aux opportunités de stage, aux missions freelance et aux projets collaboratifs.
        N'hésitez pas à me contacter pour échanger.
      </p>

      <form onSubmit={handleSubmit} className="mb-14 space-y-5">
        <div className="grid gap-5 md:grid-cols-2">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nom"
            required
            className="w-full border-b border-border bg-transparent px-0 py-3 text-text placeholder:text-text-muted/50 focus:border-accent focus:outline-none transition-colors duration-300"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full border-b border-border bg-transparent px-0 py-3 text-text placeholder:text-text-muted/50 focus:border-accent focus:outline-none transition-colors duration-300"
          />
        </div>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Votre message"
          required
          rows="5"
          className="w-full border-b border-border bg-transparent px-0 py-3 text-text placeholder:text-text-muted/50 focus:border-accent focus:outline-none transition-colors duration-300 resize-none"
        />

        <div className="flex flex-col items-start gap-4 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            disabled={isSending}
            className={`inline-flex items-center gap-2 rounded-xl px-6 py-3 font-medium transition-all duration-300 ${
              isSubmitted
                ? 'bg-emerald-500 text-white'
                : 'bg-text text-bg hover:-translate-y-0.5 hover:opacity-90'
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
            className="inline-flex items-center gap-2 text-sm text-text-muted transition-all duration-300 hover:-translate-y-0.5 hover:text-accent"
          >
            <Mail size={16} />
            Email direct
          </a>
        </div>
      </form>

      <div className="flex items-center gap-6">
        <a
          href="https://github.com/tojomayose-dot"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-text-muted transition-all duration-300 hover:-translate-y-0.5 hover:text-accent"
        >
          <FaGithub size={22} />
        </a>
        <a
          href="https://www.linkedin.com/in/tojo-randrianantenaina"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-text-muted transition-all duration-300 hover:-translate-y-0.5 hover:text-accent-soft"
        >
          <FaLinkedin size={22} />
        </a>
      </div>

      <p className="mt-16 font-mono text-xs uppercase tracking-[0.18em] text-text-muted/40">
        © 2026 — Tojo RANDRIANANTENAINA
      </p>
    </section>
  );
}
