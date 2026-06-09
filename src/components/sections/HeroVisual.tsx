"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { formatPrice, type Product } from "@/data/products";

/**
 * Visuel hero : parallaxe douce au scroll + léger tilt à la souris.
 */
export default function HeroVisual({ product }: { product: Product }) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState(0);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setOffset(Math.min(60, y * 0.08));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMove = (e: React.MouseEvent) => {
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    setTilt({ rx: (0.5 - py) * 8, ry: (px - 0.5) * 8 });
  };

  return (
    <div
      ref={wrapRef}
      onMouseMove={handleMove}
      onMouseLeave={() => setTilt({ rx: 0, ry: 0 })}
      className="relative w-full max-w-sm animate-fade-in"
      style={{ transform: `translateY(-${offset}px)` }}
    >
      <div className="absolute inset-0 -z-10 translate-y-6 scale-95 rounded-[2.5rem] bg-gradient-to-b from-champagne/70 to-transparent blur-2xl" />

      <Link
        href={`/produit/${product.slug}`}
        className="tilt-card block overflow-hidden rounded-[2rem] border border-white/60 shadow-card"
        style={{
          transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
        }}
      >
        <div className="relative aspect-[4/5] w-full">
          <Image
            src={product.image}
            alt={`${product.name} — ${product.family}`}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover"
          />
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-white/20" />
        </div>
      </Link>

      {/* Étiquette flottante */}
      <div className="absolute -bottom-5 -left-5 animate-slow-float rounded-2xl border border-ink/8 bg-ivory px-5 py-4 shadow-soft">
        <p className="font-sans text-[10px] uppercase tracking-luxe text-gold">
          Coup de cœur
        </p>
        <p className="mt-1 font-serif text-lg text-ink">{product.name}</p>
        <p className="font-sans text-sm text-amber">
          dès {formatPrice(product.price)}
        </p>
      </div>
    </div>
  );
}
