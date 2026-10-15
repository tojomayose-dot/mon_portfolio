import { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from '../site';
import Reveal from './Reveal';

const FORM_ID = 'YOUR_FORM_ID';

const inputClassName =
  'mt-2 w-full border-b border-border bg-transparent px-0 py-3 text-text transition-colors duration-300 focus:border-accent focus:outline-none';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError('');
    if (isSubmitted) setIsSubmitted(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);
    setError('');

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
    } catch (submitError) {
      console.error(submitError);
      setError(`L'envoi a échoué. Réessayez, ou écrivez-moi directement à ${EMAIL}.`);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-32">
      <Reveal>
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
      </Reveal>

      <Reveal delay={0.05}>
        <form onSubmit={handleSubmit} className="mb-14 max-w-3xl space-y-5">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted"
              >
                Nom
              </label>
              <input
                id="name"
                type="text"
                name="name"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={inputClassName}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={inputClassName}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className={`${inputClassName} resize-none`}
            />
          </div>

          <div className="flex flex-col items-start gap-4 pt-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              disabled={isSending}
              aria-busy={isSending}
              className={`inline-flex items-center gap-2 rounded-btn px-6 py-3 font-medium transition-all duration-300 ${
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
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 text-sm text-text-muted transition-all duration-300 hover:-translate-y-0.5 hover:text-accent"
            >
              <Mail size={16} />
              Email direct
            </a>
          </div>

          <p
            role="status"
            aria-live={error ? 'assertive' : 'polite'}
            className={`min-h-5 text-sm ${
              error ? 'text-red-600 dark:text-red-400' : 'text-emerald-600 dark:text-emerald-400'
            }`}
          >
            {error || (isSubmitted ? 'Merci, votre message a bien été envoyé.' : '')}
          </p>
        </form>
      </Reveal>

      <div className="flex items-center gap-6">
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-text-muted transition-all duration-300 hover:-translate-y-0.5 hover:text-accent"
        >
          <FaGithub size={22} />
        </a>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-text-muted transition-all duration-300 hover:-translate-y-0.5 hover:text-accent-soft"
        >
          <FaLinkedin size={22} />
        </a>
      </div>
    </section>
  );
}
