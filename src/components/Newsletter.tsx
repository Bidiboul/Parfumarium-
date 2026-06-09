"use client";

import { useState, type FormEvent } from "react";

interface NewsletterProps {
  /** Variante "panel" (section claire encadrée) ou "inline" (footer) */
  variant?: "panel" | "inline";
}

/**
 * Bloc d'inscription à la newsletter. Simulation côté client (pas de backend).
 * Branchez votre service d'emailing dans `handleSubmit`.
 */
export default function Newsletter({ variant = "panel" }: NewsletterProps) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // TODO : connecter ici votre service (Mailchimp, Brevo, etc.)
    setDone(true);
    setEmail("");
  };

  if (variant === "inline") {
    return (
      <form onSubmit={handleSubmit} className="w-full">
        <label className="mb-3 block font-sans text-xs uppercase tracking-luxe text-champagne/80">
          La lettre Parfumarium
        </label>
        {done ? (
          <p className="font-serif text-lg text-champagne">
            Merci. Vos prochaines découvertes arrivent bientôt.
          </p>
        ) : (
          <div className="flex items-center gap-2 border-b border-champagne/30 pb-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre adresse e-mail"
              className="w-full bg-transparent font-sans text-sm text-ivory
                placeholder:text-champagne/50 focus:outline-none"
            />
            <button
              type="submit"
              aria-label="S'inscrire"
              className="shrink-0 font-sans text-xs uppercase tracking-luxe text-gold
                transition-colors hover:text-gold-soft"
            >
              S'inscrire
            </button>
          </div>
        )}
      </form>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-16 text-center md:px-16 md:py-20">
      {/* Halo doré décoratif */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-amber/15 blur-3xl" />

      <div className="relative mx-auto max-w-xl">
        <span className="eyebrow">Restons en contact</span>
        <h2 className="mt-4 font-serif text-3xl text-ivory md:text-4xl">
          Recevez nos fragrances en avant-première
        </h2>
        <p className="mx-auto mt-4 max-w-md font-sans text-sm leading-relaxed text-champagne/80">
          Nouveautés, éditions limitées et offres privées. Un rendez-vous
          olfactif, sans jamais encombrer votre boîte de réception.
        </p>

        {done ? (
          <p className="mt-8 font-serif text-xl text-gold">
            Merci de nous rejoindre. À très vite.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre adresse e-mail"
              className="w-full rounded-full border border-champagne/25 bg-white/5 px-6 py-3.5
                font-sans text-sm text-ivory placeholder:text-champagne/50 focus:border-gold
                focus:outline-none focus:ring-1 focus:ring-gold"
            />
            <button type="submit" className="btn-gold shrink-0">
              Je m'inscris
            </button>
          </form>
        )}
        <p className="mt-4 font-sans text-[11px] text-champagne/50">
          En vous inscrivant, vous acceptez de recevoir nos communications. Désinscription en un clic.
        </p>
      </div>
    </div>
  );
}
