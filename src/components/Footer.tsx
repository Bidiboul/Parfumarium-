"use client";

import Link from "next/link";
import Newsletter from "./Newsletter";
import Logo from "./Logo";
import { useT } from "@/i18n/dict";

const SOCIALS = [
  { label: "Instagram", href: "#" },
  { label: "Pinterest", href: "#" },
  { label: "TikTok", href: "#" },
];

export default function Footer() {
  const t = useT().footer;

  return (
    <footer className="mt-24 bg-forest text-ivory">
      <div className="container-luxe py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-3">
            <Link href="/" aria-label="Parfumarium" className="inline-block">
              <Logo tone="gold" variant="row" size={48} />
            </Link>
            <p className="mt-6 max-w-xs font-serif text-lg italic leading-relaxed text-champagne/75">
              {t.tagline}
            </p>
            <div className="mt-6 flex gap-5">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} className="font-sans text-xs uppercase tracking-luxe text-champagne/70 transition-colors hover:text-gold">
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="mb-5 font-sans text-xs uppercase tracking-luxe text-gold">{t.shop}</h3>
            <ul className="space-y-3 font-sans text-sm text-champagne/75">
              <li><Link href="/" className="transition-colors hover:text-ivory">{t.links.home}</Link></li>
              <li><Link href="/collection" className="transition-colors hover:text-ivory">{t.links.catalogue}</Link></li>
              <li><Link href="/contact" className="transition-colors hover:text-ivory">{t.links.contact}</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="mb-5 font-sans text-xs uppercase tracking-luxe text-gold">{t.maison}</h3>
            <ul className="space-y-3 font-sans text-sm text-champagne/75">
              <li><Link href="/a-propos" className="transition-colors hover:text-ivory">{t.links.univers}</Link></li>
              <li><Link href="/a-propos" className="transition-colors hover:text-ivory">{t.links.rechargeable}</Link></li>
              <li><Link href="/collection" className="transition-colors hover:text-ivory">{t.links.selection}</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="mb-5 font-sans text-xs uppercase tracking-luxe text-gold">{t.info}</h3>
            <ul className="space-y-3 font-sans text-sm text-champagne/75">
              <li><Link href="/livraison" className="transition-colors hover:text-ivory">{t.links.livraison}</Link></li>
              <li><Link href="/retours" className="transition-colors hover:text-ivory">{t.links.retours}</Link></li>
              <li><Link href="/cgv" className="transition-colors hover:text-ivory">{t.links.cgv}</Link></li>
              <li><Link href="/mentions-legales" className="transition-colors hover:text-ivory">{t.links.mentions}</Link></li>
              <li><Link href="/confidentialite" className="transition-colors hover:text-ivory">{t.links.confidentialite}</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="mb-5 font-sans text-xs uppercase tracking-luxe text-gold">{t.contact}</h3>
            <a href="mailto:parfumarium.contact@gmail.com" className="font-sans text-sm text-champagne/75 transition-colors hover:text-ivory">
              parfumarium.contact@gmail.com
            </a>
            <div className="mt-6">
              <Newsletter variant="inline" />
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-champagne/15 pt-8 md:flex-row">
          <p className="font-sans text-xs text-champagne/50">
            © {new Date().getFullYear()} Parfumarium. {t.rights}
          </p>
          <p className="font-sans text-xs text-champagne/50">{t.bottom}</p>
        </div>
      </div>
    </footer>
  );
}
