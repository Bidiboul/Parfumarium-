import Link from "next/link";
import Newsletter from "./Newsletter";
import Logo from "./Logo";

const SOCIALS = [
  { label: "Instagram", href: "#" },
  { label: "Pinterest", href: "#" },
  { label: "TikTok", href: "#" },
];

export default function Footer() {
  return (
    <footer className="mt-24 bg-forest text-ivory">
      <div className="container-luxe py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          {/* Marque */}
          <div className="md:col-span-3">
            <Link href="/" aria-label="Parfumarium — accueil" className="inline-block">
              <Logo tone="gold" variant="row" size={48} />
            </Link>
            <p className="mt-6 max-w-xs font-serif text-lg italic leading-relaxed text-champagne/75">
              Parfumarium — des fragrances choisies pour leur caractère.
            </p>
            <div className="mt-6 flex gap-5">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="font-sans text-xs uppercase tracking-luxe text-champagne/70
                    transition-colors hover:text-gold"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Boutique */}
          <div className="md:col-span-2">
            <h3 className="mb-5 font-sans text-xs uppercase tracking-luxe text-gold">
              Boutique
            </h3>
            <ul className="space-y-3 font-sans text-sm text-champagne/75">
              <li><Link href="/" className="transition-colors hover:text-ivory">Accueil</Link></li>
              <li><Link href="/collection" className="transition-colors hover:text-ivory">Catalogue</Link></li>
              <li><Link href="/contact" className="transition-colors hover:text-ivory">Contact</Link></li>
            </ul>
          </div>

          {/* Parfumarium */}
          <div className="md:col-span-2">
            <h3 className="mb-5 font-sans text-xs uppercase tracking-luxe text-gold">
              Parfumarium
            </h3>
            <ul className="space-y-3 font-sans text-sm text-champagne/75">
              <li><Link href="/a-propos" className="transition-colors hover:text-ivory">Notre univers</Link></li>
              <li><Link href="/a-propos" className="transition-colors hover:text-ivory">Concept rechargeable</Link></li>
              <li><Link href="/collection" className="transition-colors hover:text-ivory">Nos parfums</Link></li>
            </ul>
          </div>

          {/* Informations légales */}
          <div className="md:col-span-2">
            <h3 className="mb-5 font-sans text-xs uppercase tracking-luxe text-gold">
              Informations
            </h3>
            <ul className="space-y-3 font-sans text-sm text-champagne/75">
              <li><Link href="/livraison" className="transition-colors hover:text-ivory">Livraison</Link></li>
              <li><Link href="/retours" className="transition-colors hover:text-ivory">Retours</Link></li>
              <li><Link href="/cgv" className="transition-colors hover:text-ivory">CGV</Link></li>
              <li><Link href="/mentions-legales" className="transition-colors hover:text-ivory">Mentions légales</Link></li>
              <li><Link href="/confidentialite" className="transition-colors hover:text-ivory">Confidentialité</Link></li>
            </ul>
          </div>

          {/* Contact + newsletter */}
          <div className="md:col-span-3">
            <h3 className="mb-5 font-sans text-xs uppercase tracking-luxe text-gold">
              Contact
            </h3>
            <a
              href="mailto:parfumarium.contact@gmail.com"
              className="font-sans text-sm text-champagne/75 transition-colors hover:text-ivory"
            >
              parfumarium.contact@gmail.com
            </a>
            <div className="mt-6">
              <Newsletter variant="inline" />
            </div>
          </div>
        </div>

        {/* Barre inférieure */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-champagne/15 pt-8 md:flex-row">
          <p className="font-sans text-xs text-champagne/50">
            © {new Date().getFullYear()} Parfumarium. Tous droits réservés.
          </p>
          <p className="font-sans text-xs text-champagne/50">
            Conçu avec soin en France · Paiement sécurisé · Expédition 72h
          </p>
        </div>
      </div>
    </footer>
  );
}
