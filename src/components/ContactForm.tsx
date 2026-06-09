"use client";

import { useState, type FormEvent } from "react";

/**
 * Formulaire de contact. Simulation côté client (pas de backend).
 * Branchez votre endpoint / service d'email dans `handleSubmit`.
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO : envoyer les données vers votre backend / service (Formspree, Resend, etc.)
    setSent(true);
  };

  if (sent) {
    return (
      <div className="rounded-2xl border border-gold/30 bg-white/60 p-10 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold text-2xl text-ink">
          ✓
        </span>
        <h3 className="mt-5 font-serif text-2xl text-ink">Message envoyé</h3>
        <p className="mt-3 font-sans text-sm text-warmgray">
          Merci de nous avoir écrit. Notre équipe vous répondra sous 24 heures
          ouvrées.
        </p>
      </div>
    );
  }

  const fieldClass =
    "w-full rounded-xl border border-ink/15 bg-white/70 px-4 py-3 font-sans text-sm text-ink placeholder:text-warmgray/70 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block font-sans text-xs uppercase tracking-luxe text-ink/70">
            Nom complet
          </label>
          <input id="name" name="name" type="text" required placeholder="Votre nom" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block font-sans text-xs uppercase tracking-luxe text-ink/70">
            E-mail
          </label>
          <input id="email" name="email" type="email" required placeholder="vous@email.com" className={fieldClass} />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-2 block font-sans text-xs uppercase tracking-luxe text-ink/70">
          Sujet
        </label>
        <select id="subject" name="subject" className={fieldClass} defaultValue="">
          <option value="" disabled>
            Choisissez un sujet
          </option>
          <option>Question sur un parfum</option>
          <option>Suivi de commande</option>
          <option>Retour ou échange</option>
          <option>Partenariat / Presse</option>
          <option>Autre</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block font-sans text-xs uppercase tracking-luxe text-ink/70">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Comment pouvons-nous vous aider ?"
          className={`${fieldClass} resize-none`}
        />
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        Envoyer le message
      </button>
    </form>
  );
}
