"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "./CartProvider";
import Logo from "./Logo";
import SearchDialog from "./SearchDialog";

const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/collection", label: "Collection" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const { count } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Ferme le menu mobile et la recherche au changement de page
  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? "border-b border-ink/8 bg-white/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-luxe flex h-[88px] items-center justify-between">
        {/* Logo */}
        <Link href="/" aria-label="Parfumarium — accueil" className="group">
          <Logo tone="gold" variant="row" size={42} className="transition-opacity group-hover:opacity-80" />
        </Link>

        {/* Navigation desktop */}
        <nav className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`group relative font-sans text-[13px] uppercase tracking-luxe transition-colors duration-300 ${
                isActive(link.href) ? "text-amber" : "text-ink hover:text-amber"
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1.5 left-0 h-px bg-gold transition-all duration-500 ${
                  isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Recherche */}
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            aria-label="Rechercher un parfum"
            className="flex h-11 w-11 items-center justify-center rounded-full border
              border-transparent text-ink transition-all duration-300 hover:border-gold/40
              hover:text-amber"
          >
            <svg width="21" height="21" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" />
              <path d="m20 20-3.2-3.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          {/* Compte */}
          <Link
            href="/compte"
            aria-label="Mon compte"
            className="flex h-11 w-11 items-center justify-center rounded-full border
              border-transparent text-ink transition-all duration-300 hover:border-gold/40
              hover:text-amber"
          >
            <svg width="21" height="21" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="8" r="3.6" stroke="currentColor" strokeWidth="1.5" />
              <path d="M5 20c0-3.4 3.1-5.5 7-5.5s7 2.1 7 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </Link>

          <Link
            href="/panier"
            aria-label={`Panier, ${count} article${count > 1 ? "s" : ""}`}
            className="relative flex h-11 w-11 items-center justify-center rounded-full
              border border-transparent text-ink transition-all duration-300
              hover:border-gold/40 hover:text-amber"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 8h12l-1 12H7L6 8Z"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinejoin="round"
              />
              <path
                d="M9 8a3 3 0 0 1 6 0"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
            {count > 0 && (
              <span
                className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center
                  justify-center rounded-full bg-gold px-1 font-sans text-[11px]
                  font-medium text-ink"
              >
                {count}
              </span>
            )}
          </Link>

          {/* Burger mobile */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            className="flex h-11 w-11 items-center justify-center rounded-full text-ink md:hidden"
          >
            <span className="relative block h-3.5 w-6">
              <span
                className={`absolute left-0 block h-px w-full bg-ink transition-all duration-300 ${
                  menuOpen ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-px w-full bg-ink transition-all duration-300 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-px w-full bg-ink transition-all duration-300 ${
                  menuOpen ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        className={`overflow-hidden border-t border-ink/8 bg-ivory/95 backdrop-blur-md transition-[max-height,opacity] duration-500 md:hidden ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container-luxe flex flex-col py-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`border-b border-ink/5 py-4 font-sans text-sm uppercase tracking-luxe ${
                isActive(link.href) ? "text-amber" : "text-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/compte"
            className={`py-4 font-sans text-sm uppercase tracking-luxe ${
              isActive("/compte") ? "text-amber" : "text-ink"
            }`}
          >
            Mon compte
          </Link>
        </nav>
      </div>

      {/* Recherche */}
      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
