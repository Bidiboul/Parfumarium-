"use client";

import { useId } from "react";

type Tone = "gold" | "ink" | "ivory";
type Variant = "full" | "row" | "icon";

interface LogoProps {
  /** Couleur : doré (défaut), noir profond, ou ivoire (sur fond sombre) */
  tone?: Tone;
  /** full = monogramme + mot + filet (vertical) · row = côte à côte · icon = monogramme seul */
  variant?: Variant;
  /** Hauteur du monogramme en px */
  size?: number;
  className?: string;
  /** Afficher le filet décoratif sous le mot (variant full) */
  withRule?: boolean;
}

/**
 * Logo Parfumarium — recréé en vectoriel (fond transparent).
 * Monogramme « P » sérif coiffé d'un bouchon de flacon + mot-symbole.
 * Recolorable en doré / noir / ivoire pour s'adapter à chaque fond.
 */
export default function Logo({
  tone = "gold",
  variant = "row",
  size = 40,
  className = "",
  withRule = true,
}: LogoProps) {
  const id = useId().replace(/:/g, "");

  // Couleur du remplissage selon le ton
  const fill = tone === "gold" ? `url(#g-${id})` : tone === "ink" ? "#161311" : "#F7F3EC";
  // Couleur du texte / filet
  const text =
    tone === "gold" ? "text-gold" : tone === "ink" ? "text-ink" : "text-ivory";
  const ruleColor =
    tone === "gold" ? "#B9975B" : tone === "ink" ? "#161311" : "#E7D8BE";

  const Mark = (
    <svg
      height={size}
      viewBox="0 0 100 132"
      fill="none"
      role="img"
      aria-label="Parfumarium"
      className="shrink-0"
      style={{ width: (size * 100) / 132 }}
    >
      <defs>
        <linearGradient id={`g-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#EBD49B" />
          <stop offset="42%" stopColor="#C9A35E" />
          <stop offset="100%" stopColor="#946F32" />
        </linearGradient>
      </defs>

      {/* Bouchon du flacon */}
      <rect x="41" y="4" width="18" height="13" rx="2.5" fill={fill} />
      {/* Col */}
      <rect x="45" y="17" width="10" height="8" fill={fill} />

      {/* "P" sérif — empattements */}
      <rect x="38" y="25" width="24" height="7" fill={fill} />
      <rect x="34" y="101" width="32" height="8" fill={fill} />
      {/* Stem */}
      <rect x="44" y="29" width="12" height="76" fill={fill} />
      {/* Bowl (boucle du P, ajourée grâce au tracé) */}
      <path
        d="M54 31 H63 C77 31 85 40 85 52 C85 64 77 72 63 72 H54"
        stroke={fill}
        strokeWidth="12"
        strokeLinecap="butt"
        fill="none"
      />
      {/* Reflet subtil */}
      <rect x="44" y="29" width="3.5" height="76" fill="#FFFFFF" opacity="0.18" />
    </svg>
  );

  if (variant === "icon") {
    return <span className={className}>{Mark}</span>;
  }

  if (variant === "row") {
    return (
      <span className={`inline-flex items-center gap-2.5 ${className}`}>
        {Mark}
        <span className="flex flex-col leading-none">
          <span
            className={`font-serif text-2xl tracking-[0.12em] ${text} md:text-[26px]`}
          >
            PARFUMARIUM
          </span>
        </span>
      </span>
    );
  }

  // variant "full" (stacked)
  return (
    <span className={`inline-flex flex-col items-center gap-3 ${className}`}>
      {Mark}
      <span
        className={`font-serif text-3xl tracking-[0.28em] ${text} md:text-4xl`}
      >
        PARFUMARIUM
      </span>
      {withRule && (
        <span className="flex w-full max-w-[260px] items-center gap-3">
          <span
            className="h-px flex-1"
            style={{
              background: `linear-gradient(90deg, transparent, ${ruleColor})`,
            }}
          />
          <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
            <path d="M7 0 L8.5 5.5 L14 7 L8.5 8.5 L7 14 L5.5 8.5 L0 7 L5.5 5.5 Z" fill={ruleColor} />
          </svg>
          <span
            className="h-px flex-1"
            style={{
              background: `linear-gradient(90deg, ${ruleColor}, transparent)`,
            }}
          />
        </span>
      )}
    </span>
  );
}
