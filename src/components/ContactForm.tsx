"use client";

import { useState, type FormEvent } from "react";
import { useLang } from "@/i18n/LanguageProvider";
import { L } from "@/i18n/dict";

const F = {
  sentTitle: { fr: "Message envoyé", en: "Message sent" },
  sentText: {
    fr: "Merci de nous avoir écrit. Notre équipe vous répondra sous 24 heures ouvrées.",
    en: "Thank you for writing to us. Our team will reply within 24 business hours.",
  },
  name: { fr: "Nom complet", en: "Full name" },
  namePh: { fr: "Votre nom", en: "Your name" },
  email: { fr: "E-mail", en: "Email" },
  subject: { fr: "Sujet", en: "Subject" },
  chooseSubject: { fr: "Choisissez un sujet", en: "Choose a subject" },
  opt1: { fr: "Question sur un parfum", en: "Question about a fragrance" },
  opt2: { fr: "Suivi de commande", en: "Order tracking" },
  opt3: { fr: "Disponibilité d'un parfum", en: "Fragrance availability" },
  opt4: { fr: "Partenariat / Presse", en: "Partnership / Press" },
  opt5: { fr: "Autre", en: "Other" },
  message: { fr: "Message", en: "Message" },
  messagePh: { fr: "Comment pouvons-nous vous aider ?", en: "How can we help you?" },
  send: { fr: "Envoyer le message", en: "Send message" },
};

/** Formulaire de contact (simulation côté client). */
export default function ContactForm() {
  const { lang } = useLang();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="rounded-2xl border border-gold/30 bg-white/60 p-10 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold text-2xl text-ink">✓</span>
        <h3 className="mt-5 font-serif text-2xl text-ink">{L(F.sentTitle, lang)}</h3>
        <p className="mt-3 font-sans text-sm text-warmgray">{L(F.sentText, lang)}</p>
      </div>
    );
  }

  const fieldClass =
    "w-full rounded-xl border border-ink/15 bg-white/70 px-4 py-3 font-sans text-sm text-ink placeholder:text-warmgray/70 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block font-sans text-xs uppercase tracking-luxe text-ink/70">{L(F.name, lang)}</label>
          <input id="name" name="name" type="text" required placeholder={L(F.namePh, lang)} className={fieldClass} />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block font-sans text-xs uppercase tracking-luxe text-ink/70">{L(F.email, lang)}</label>
          <input id="email" name="email" type="email" required placeholder="vous@email.com" className={fieldClass} />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-2 block font-sans text-xs uppercase tracking-luxe text-ink/70">{L(F.subject, lang)}</label>
        <select id="subject" name="subject" className={fieldClass} defaultValue="">
          <option value="" disabled>{L(F.chooseSubject, lang)}</option>
          <option>{L(F.opt1, lang)}</option>
          <option>{L(F.opt2, lang)}</option>
          <option>{L(F.opt3, lang)}</option>
          <option>{L(F.opt4, lang)}</option>
          <option>{L(F.opt5, lang)}</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block font-sans text-xs uppercase tracking-luxe text-ink/70">{L(F.message, lang)}</label>
        <textarea id="message" name="message" required rows={5} placeholder={L(F.messagePh, lang)} className={`${fieldClass} resize-none`} />
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto">{L(F.send, lang)}</button>
    </form>
  );
}
