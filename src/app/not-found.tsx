import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-luxe flex min-h-[80vh] flex-col items-center justify-center pt-[152px] text-center">
      <span className="eyebrow">Erreur 404</span>
      <h1 className="mt-4 font-serif text-5xl text-ink sm:text-6xl">
        Cette fragrance s'est évaporée
      </h1>
      <p className="mt-5 max-w-md font-sans text-warmgray">
        La page que vous cherchez n'existe pas ou a été déplacée. Laissez-vous
        plutôt guider par nos créations.
      </p>
      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="btn-primary">
          Retour à l'accueil
        </Link>
        <Link href="/collection" className="btn-outline">
          Voir la collection
        </Link>
      </div>
    </section>
  );
}
