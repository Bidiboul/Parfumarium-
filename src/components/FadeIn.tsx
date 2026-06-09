"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  /** Délai d'apparition en ms (effet cascade) */
  delay?: number;
  className?: string;
  /** Balise HTML rendue (div par défaut) */
  as?: keyof JSX.IntrinsicElements;
}

/**
 * Révèle son contenu en fondu + léger glissement vers le haut
 * lorsqu'il entre dans le viewport. Animation premium et discrète.
 */
export default function FadeIn({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: FadeInProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Component = Tag as any;

  return (
    <Component
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </Component>
  );
}
