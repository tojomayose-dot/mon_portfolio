import { useRef, useState } from 'react';
import { BriefcaseBusiness, Mail, MapPin, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {
  AVAILABILITY_SHORT,
  EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  LOCATION,
} from '../site';
import Reveal from './Reveal';

/* ID de formulaire Formspree (https://formspree.io) injecté via VITE_FORMSPREE_ID.
   Sans configuration, le formulaire bascule sur un repli `mailto:` — jamais de faux succès. */
const FORMSPREE = import.meta.env.VITE_FORMSPREE_ID?.trim();
const FORM_ENDPOINT = FORMSPREE
  ? FORMSPREE.startsWith('http')
    ? FORMSPREE
    : `https://formspree.io/f/${FORMSPREE}`
  : null;

const EMPTY_FORM = { name: '', email: '', message: '' };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(form) {
  const errors = {};

  if (!form.name.trim()) {
    errors.name = 'Indiquez votre nom.';
  } else if (form.name.trim().length < 2) {
    errors.name = 'Le nom doit contenir au moins 2 caractères.';
  }

  if (!form.email.trim()) {
    errors.email = 'Indiquez votre adresse email.';
  } else if (!EMAIL_PATTERN.test(form.email.trim())) {
    errors.email = 'Saisissez une adresse email valide.';
  }

  if (!form.message.trim()) {
    errors.message = 'Écrivez votre message.';
  } else if (form.message.trim().length < 10) {
    errors.message = 'Le message doit contenir au moins 10 caractères.';
  }

  return errors;
}

export default function Contact() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const fieldRefs = {
    name: nameRef,
    email: emailRef,
    message: messageRef,
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));

    if (errors[name]) {
      setErrors((previous) => {
        const next = { ...previous };
        delete next[name];
        return next;
      });
    }

    if (status.type !== 'idle') {
      setStatus({ type: 'idle', message: '' });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSending) return;
    const nextErrors = validate(formData);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus({
        type: 'error',
        message: 'Veuillez corriger les champs indiqués avant de continuer.',
      });
      const firstInvalid = ['name', 'email', 'message'].find((field) => nextErrors[field]);
      fieldRefs[firstInvalid]?.current?.focus();
      return;
    }

    setErrors({});

    // Repli sans backend : le client mail s'ouvre, mais l'envoi n'est pas confirmé.
    if (!FORM_ENDPOINT) {
      const subject = `Contact portfolio — ${formData.name.trim() || 'Nouveau message'}`;
      const body = `${formData.message}\n\n— ${formData.name.trim()} (${formData.email.trim()})`;
      setStatus({
        type: 'mailto',
        message:
          "Votre messagerie s'ouvre avec le message pré-rempli. L'envoi n'est pas confirmé tant que vous ne l'avez pas envoyé.",
      });
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      return;
    }

    setIsSending(true);
    setStatus({ type: 'idle', message: '' });

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error('Erreur Formspree');
      }

      setStatus({
        type: 'sent',
        message: 'Merci, votre message a bien été envoyé.',
      });
      setFormData(EMPTY_FORM);
    } catch (submitError) {
      console.error(submitError);
      setStatus({
        type: 'error',
        message: `L'envoi a échoué. Réessayez, ou écrivez-moi directement à ${EMAIL}.`,
      });
    } finally {
      setIsSending(false);
    }
  };

  const describedBy = (field) => (errors[field] ? `contact-${field}-error` : undefined);

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="on-night relative scroll-mt-24 overflow-hidden bg-night py-16 text-night-text sm:py-20"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="hero-halo absolute inset-0 opacity-55" />
        <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-brand/10 blur-3xl" />
      </div>

      <div className="shell relative">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          {/* ─── Colonne éditoriale ─── */}
          <Reveal>
            <p className="eyebrow">
              <span className="flex h-5 w-5 items-center justify-center rounded-[5px] border border-brand/30 bg-brand/15 text-brand-light">
                <Mail size={11} aria-hidden="true" />
              </span>
              Contact
            </p>

            <h2
              id="contact-title"
              className="mt-4 text-[clamp(1.9rem,3vw,2.6rem)] font-extrabold leading-[1.02] tracking-[-0.045em] text-white"
            >
              Travaillons <span className="text-brand">ensemble</span>
            </h2>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-night-muted">
              Une question, une opportunité de stage ou une mission freelance ? N'hésitez pas à
              me contacter : je serais ravi d'échanger sur votre projet.
            </p>

            <ul className="mt-7 space-y-3 text-sm text-night-muted">
              <li className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-brand-light">
                  <MapPin size={15} aria-hidden="true" />
                </span>
                {LOCATION}
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-brand-light">
                  <BriefcaseBusiness size={15} aria-hidden="true" />
                </span>
                {AVAILABILITY_SHORT}
              </li>
            </ul>

            <div className="mt-8 flex items-center gap-2.5">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Profil GitHub de Tojo (nouvel onglet)"
                className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-white/15 bg-white/[0.03] text-night-muted transition-colors hover:border-white/35 hover:text-white"
              >
                <FaGithub size={18} aria-hidden="true" />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Profil LinkedIn de Tojo (nouvel onglet)"
                className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-white/15 bg-white/[0.03] text-night-muted transition-colors hover:border-white/35 hover:text-white"
              >
                <FaLinkedin size={18} aria-hidden="true" />
              </a>
              <a
                href={`mailto:${EMAIL}`}
                aria-label={`Envoyer un email à ${EMAIL}`}
                className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-white/15 bg-white/[0.03] text-night-muted transition-colors hover:border-white/35 hover:text-white"
              >
                <Mail size={18} aria-hidden="true" />
              </a>
            </div>

            <a
              href={`mailto:${EMAIL}`}
              className="mt-5 inline-block break-words text-sm text-brand-light underline decoration-brand/40 underline-offset-4 transition-colors hover:text-white"
            >
              {EMAIL}
            </a>
          </Reveal>

          {/* ─── Formulaire ─── */}
          <Reveal delay={0.08}>
            <form
              id="contact-form"
              onSubmit={handleSubmit}
              noValidate
              aria-labelledby="contact-form-title"
              aria-describedby="contact-form-help"
              className="rounded-card border border-white/10 bg-night-surface/90 p-5 shadow-[0_30px_80px_-45px_rgba(0,0,0,0.95)] backdrop-blur-md sm:p-7"
            >
              <h3 id="contact-form-title" className="text-lg font-semibold text-white">
                Un projet, une opportunité ?
              </h3>
              <p id="contact-form-help" className="mt-2 text-sm leading-relaxed text-night-muted">
                {FORM_ENDPOINT
                  ? 'Écrivez-moi directement avec ce formulaire.'
                  : 'Préparez votre message ici, puis envoyez-le depuis votre messagerie.'}
              </p>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="text-xs font-semibold text-white">
                    Nom <span className="text-brand-light" aria-hidden="true">*</span>
                  </label>
                  <input
                    ref={nameRef}
                    id="contact-name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Votre nom"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={describedBy('name')}
                    className="field"
                  />
                  {errors.name && (
                    <p id="contact-name-error" className="mt-1.5 text-xs text-danger-light">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-email" className="text-xs font-semibold text-white">
                    Email <span className="text-brand-light" aria-hidden="true">*</span>
                  </label>
                  <input
                    ref={emailRef}
                    id="contact-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    inputMode="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="votre.email@exemple.com"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={describedBy('email')}
                    className="field"
                  />
                  {errors.email && (
                    <p id="contact-email-error" className="mt-1.5 text-xs text-danger-light">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="contact-message" className="text-xs font-semibold text-white">
                  Message <span className="text-brand-light" aria-hidden="true">*</span>
                </label>
                <textarea
                  ref={messageRef}
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Votre message..."
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={describedBy('message')}
                  className="field resize-y"
                />
                {errors.message && (
                  <p id="contact-message-error" className="mt-1.5 text-xs text-danger-light">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSending}
                aria-busy={isSending}
                className={`btn btn-primary mt-6 w-full ${isSending ? 'cursor-not-allowed opacity-70' : ''}`}
              >
                <Send size={16} aria-hidden="true" />
                {isSending ? 'Envoi...' : FORM_ENDPOINT ? 'Envoyer le message' : 'Ouvrir ma messagerie'}
              </button>

              <p className="mt-3 text-xs leading-relaxed text-night-muted">
                Les champs marqués d'un <span className="text-brand-light">*</span> sont
                obligatoires.
                {!FORM_ENDPOINT && ' Votre messagerie s’ouvrira avec votre message prérempli.'}
              </p>

              <div
                role={status.type === 'error' ? 'alert' : 'status'}
                aria-live={status.type === 'error' ? 'assertive' : 'polite'}
                className={`mt-3 min-h-5 text-sm leading-relaxed ${
                  status.type === 'error'
                    ? 'text-danger-light'
                    : status.type === 'sent'
                      ? 'text-emerald-300'
                      : status.type === 'mailto'
                        ? 'text-brand-light'
                        : 'text-night-muted'
                }`}
              >
                {status.type === 'error' && status.message.includes(EMAIL) ? (
                  <>
                    L'envoi a échoué. Réessayez, ou écrivez-moi directement à{' '}
                    <a href={`mailto:${EMAIL}`} className="underline underline-offset-2">
                      {EMAIL}
                    </a>
                    .
                  </>
                ) : (
                  status.message
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
