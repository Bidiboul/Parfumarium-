"use client";

import { useEffect, type ReactNode } from "react";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  /** Côté d'ouverture */
  side?: "left" | "right";
  title?: string;
  children: ReactNode;
}

/**
 * Tiroir latéral générique (slide-in) avec fond assombri, blocage du
 * défilement et fermeture au clavier (Échap). Utilisé pour le menu mobile
 * et le filtre par famille de la collection.
 */
export default function Drawer({
  open,
  onClose,
  side = "right",
  title,
  children,
}: DrawerProps) {
  // Blocage du scroll + fermeture Échap
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const translate = open
    ? "translate-x-0"
    : side === "right"
      ? "translate-x-full"
      : "-translate-x-full";

  return (
    <div
      className={`fixed inset-0 z-[80] ${open ? "" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      {/* Fond */}
      <button
        type="button"
        aria-label="Fermer"
        onClick={onClose}
        className={`absolute inset-0 cursor-default bg-ink/45 backdrop-blur-sm transition-opacity duration-500 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Panneau */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={`absolute inset-y-0 ${
          side === "right" ? "right-0" : "left-0"
        } flex w-[84%] max-w-sm flex-col bg-ivory shadow-card-hover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${translate}`}
      >
        {/* En-tête */}
        <div className="flex items-center justify-between border-b border-champagne px-6 py-5">
          <span className="font-serif text-xl text-ink">{title}</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer"
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:text-amber"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Contenu */}
        <div className="flex-1 overflow-y-auto">{children}</div>
      </aside>
    </div>
  );
}
