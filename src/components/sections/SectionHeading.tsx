import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
}

/** En-tête de section réutilisable (sur-titre, titre H2, sous-titre, filet doré). */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col ${alignment}`}>
      {eyebrow && <span className="eyebrow mb-3">{eyebrow}</span>}
      <h2
        className={`font-serif text-3xl leading-tight text-balance sm:text-4xl md:text-[2.75rem] ${
          light ? "text-ivory" : "text-ink"
        }`}
      >
        {title}
      </h2>
      <span
        className={`gold-rule mt-5 ${align === "center" ? "" : "ml-0"}`}
        aria-hidden
      />
      {subtitle && (
        <p
          className={`mt-5 max-w-2xl font-sans text-base leading-relaxed ${
            light ? "text-champagne/75" : "text-warmgray"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
