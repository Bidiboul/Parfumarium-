const DEFAULT_ITEMS = [
  "Expédiée en 72h",
  "Fabriqué avec soin",
  "60 fragrances d'exception",
  "Un luxe discret",
  "Paiement sécurisé",
  "Inspiré des grandes maisons",
];

/**
 * Bandeau défilant infini (effet ticker premium).
 * Se met en pause au survol. Le contenu est dupliqué pour une boucle continue.
 */
export default function Marquee({
  items = DEFAULT_ITEMS,
}: {
  items?: string[];
}) {
  return (
    <div className="border-y border-champagne/60 bg-cream py-5 text-ink">
      <div className="marquee">
        {[0, 1].map((dup) => (
          <div className="marquee__track" key={dup} aria-hidden={dup === 1}>
            {items.map((item, i) => (
              <span
                key={`${dup}-${i}`}
                className="flex items-center gap-3 font-serif text-lg italic text-ink md:text-2xl"
              >
                {item}
                <span className="text-gold">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
