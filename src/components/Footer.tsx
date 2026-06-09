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
    <footer className="mt-24 bg-ink text-ivory">
      <div className="container-luxe py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          {/* Marque */}
          <div className="md:col-span-4">
            <Link href="/" aria-label="Parfumarium — accueil" className="inline-block">
              <Logo tone="gold" variant="row" size={48} />
            </Link>
            <p className="mt-6 max-w-xs font-sans text-sm leading-relaxed text-champagne/70">
              Un luxe discret, conçu pour le quotidien. Des fragrances raffinées,
              pensées pour sublimer chaque instant — sans le prix du luxe.
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

          {/* Liens navigation */}
          <div className="md:col-span-2">
            <h3 className="mb-5 font-sans text-xs uppercase tracking-luxe text-gold">
              Maison
            </h3>
            <ul className="space-y-3 font-sans text-sm text-champagne/75">
              <li><Link href="/" className="transition-colors hover:text-ivory">Accueil</Link></li>
              <li><Link href="/collection" className="transition-colors hover:text-ivory">Collection</Link></li>
              <li><Link href="/a-propos" className="transition-colors hover:text-ivory">À propos</Link></li>
              <li><Link href="/contact" className="transition-colors hover:text-ivory">Contact</Link></li>
            </ul>
          </div>

          {/* Informations */}
          <div className="md:col-span-2">
            <h3 className="mb-5 font-sans text-xs uppercase tracking-luxe text-gold">
              Informations
            </h3>
            <ul className="space-y-3 font-sans text-sm text-champagne/75">
              <li><Link href="/contact" className="transition-colors hover:text-ivory">Livraison</Link></li>
              <li><Link href="/contact" className="transition-colors hover:text-ivory">Retours &amp; échanges</Link></li>
              <li><Link href="/contact" className="transition-colors hover:text-ivory">Mentions légales</Link></li>
              <li><Link href="/contact" className="transition-colors hover:text-ivory">CGV</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-4">
            <Newsletter variant="inline" />
            <p className="mt-6 font-serif text-lg italic text-champagne/60">
              « Le parfum est une signature invisible. »
            </p>
          </div>
        </div>

        {/* Barre inférieure */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-champagne/15 pt-8 md:flex-row">
          <p className="font-sans text-xs text-champagne/50">
            © {new Date().getFullYear()} Parfumarium. Tous droits réservés.
          </p>
          <p className="font-sans text-xs text-champagne/50">
            Conçu avec soin en France · Paiement sécurisé · Livraison 48h
          </p>
        </div>
      </div>
    </footer>
  );
}
