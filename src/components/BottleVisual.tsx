import type { BottleTheme } from "@/data/products";

interface BottleVisualProps {
  theme: BottleTheme;
  name: string;
  /** Taille relative : "card" (défaut) ou "hero" pour la page produit */
  variant?: "card" | "hero";
  className?: string;
}

/**
 * Illustration vectorielle d'un flacon de parfum, colorée selon le thème
 * du produit. Sert d'image placeholder élégante — aucun fichier image requis.
 * Pour utiliser de vraies photos, remplacez ce composant par <Image /> de Next.
 */
export default function BottleVisual({
  theme,
  name,
  variant = "card",
  className = "",
}: BottleVisualProps) {
  const uid = name.replace(/[^a-zA-Z0-9]/g, "");

  return (
    <svg
      viewBox="0 0 300 360"
      role="img"
      aria-label={`Flacon du parfum ${name}`}
      className={className}
    >
      <defs>
        <linearGradient id={`bg-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={theme.backdrop} />
          <stop offset="100%" stopColor={theme.backdrop} stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id={`liquid-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={theme.liquidTop} />
          <stop offset="100%" stopColor={theme.liquidBottom} />
        </linearGradient>
        <linearGradient id={`glass-${uid}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="45%" stopColor="#ffffff" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.3" />
        </linearGradient>
        <radialGradient id={`halo-${uid}`} cx="50%" cy="38%" r="55%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Fond doux */}
      <rect width="300" height="360" fill={`url(#bg-${uid})`} />
      <ellipse cx="150" cy="135" rx="120" ry="120" fill={`url(#halo-${uid})`} />

      {/* Ombre portée */}
      <ellipse cx="150" cy="330" rx="70" ry="12" fill={theme.liquidBottom} opacity="0.18" />

      {/* Capuchon */}
      <rect x="128" y="40" width="44" height="46" rx="6" fill={theme.cap} />
      <rect x="128" y="40" width="14" height="46" rx="6" fill="#ffffff" opacity="0.12" />

      {/* Col du flacon */}
      <rect x="138" y="84" width="24" height="18" fill={theme.cap} opacity="0.85" />

      {/* Corps du flacon (verre + jus) */}
      <rect x="86" y="100" width="128" height="206" rx="20" fill={`url(#liquid-${uid})`} />
      <rect x="86" y="100" width="128" height="206" rx="20" fill={`url(#glass-${uid})`} />
      <rect
        x="86"
        y="100"
        width="128"
        height="206"
        rx="20"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.45"
        strokeWidth="1.5"
      />

      {/* Reflet vertical */}
      <rect x="100" y="116" width="14" height="170" rx="7" fill="#ffffff" opacity="0.22" />

      {/* Étiquette minimaliste */}
      <rect x="116" y="196" width="68" height="64" rx="3" fill="#F7F3EC" opacity="0.92" />
      <text
        x="150"
        y="222"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="13"
        letterSpacing="1.5"
        fill={theme.liquidBottom}
      >
        PARFUM
      </text>
      <line x1="128" y1="232" x2="172" y2="232" stroke={theme.cap} strokeWidth="0.8" opacity="0.5" />
      <text
        x="150"
        y="250"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="8"
        letterSpacing="3"
        fill={theme.cap}
      >
        PARFUMARIUM
      </text>
    </svg>
  );
}
