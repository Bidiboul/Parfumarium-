/**
 * Contenu de la page d'accueil — ÉDITABLE (bilingue FR / EN)
 * ---------------------------------------------------------------
 * Chaque texte visible existe en français (fr) et anglais (en).
 * Les images : déposez vos fichiers dans `public/home/` et changez les chemins.
 */

interface Bi {
  fr: string;
  en: string;
}

export interface HomeBlock {
  title: Bi;
  text: Bi;
  image: string;
}

export const home = {
  hero: {
    image: "/home/hero.jpg",
    eyebrow: {
      fr: "Maison de parfums · Vaison-la-Romaine",
      en: "House of fragrances · Vaison-la-Romaine",
    },
    title: {
      fr: "Des fragrances élégantes et intemporelles pour affirmer votre signature olfactive.",
      en: "Elegant, timeless fragrances to assert your olfactory signature.",
    },
    subtitle: {
      fr: "Découvrez une sélection de parfums raffinés, pensés pour durer et marquer les esprits.",
      en: "Discover a selection of refined fragrances, designed to last and to leave a mark.",
    },
    ctaLabel: { fr: "Découvrir la collection", en: "Discover the collection" },
    ctaHref: "/collection",
    ctaSecondaryLabel: { fr: "Voir les best-sellers", en: "See the best-sellers" },
    ctaSecondaryHref: "/#best-sellers",
  },

  spotlight: {
    /** slug du parfum mis en avant (voir src/data/products.ts) */
    productSlug: "crystal-rouge-1035",
  },

  editorial: {
    text: {
      fr: "Parfumarium sélectionne des fragrances pour leur qualité olfactive et leur caractère, afin de proposer une expérience parfum unique.",
      en: "Parfumarium selects fragrances for their olfactory quality and character, to offer a unique perfume experience.",
    },
    ctaLabel: { fr: "Découvrir nos fragrances", en: "Discover our fragrances" },
    ctaHref: "/collection",
  },

  blocks: [
    {
      title: { fr: "La découverte", en: "Discovery" },
      text: {
        fr: "Chez Parfumarium, nous vous guidons à travers différents univers olfactifs pour trouver la fragrance qui vous correspond vraiment.",
        en: "At Parfumarium, we guide you through different olfactory worlds to find the fragrance that truly suits you.",
      },
      image: "/home/decouverte.jpg",
    },
    {
      title: { fr: "Le savoir-faire", en: "The craft" },
      text: {
        fr: "Une collection de parfums rigoureusement sélectionnés pour leur richesse, leur tenue et leur signature olfactive.",
        en: "A collection of perfumes carefully selected for their richness, lasting power and olfactory signature.",
      },
      image: "/home/savoir-faire.jpg",
    },
    {
      title: { fr: "La personnalisation", en: "Personalisation" },
      text: {
        fr: "Prenez le temps de sentir, comparer et choisir le parfum qui raconte votre histoire.",
        en: "Take the time to smell, compare and choose the perfume that tells your story.",
      },
      image: "/home/personnalisation.jpg",
    },
    {
      title: { fr: "Le concept rechargeable", en: "The refillable concept" },
      text: {
        fr: "Un parfum que vous aimez mérite d'être rechargé, pas remplacé.",
        en: "A perfume you love deserves to be refilled, not replaced.",
      },
      image: "/home/rechargeable.jpg",
    },
  ] as HomeBlock[],

  approche: {
    eyebrow: { fr: "Notre approche", en: "Our approach" },
    title: {
      fr: "Nous collaborons avec des partenaires spécialisés dans la création et la sélection de fragrances de qualité.",
      en: "We work with partners specialised in creating and selecting quality fragrances.",
    },
    subtitle: {
      fr: "Nos fragrances sont issues d'un savoir-faire dédié à la parfumerie contemporaine.",
      en: "Our fragrances come from expertise dedicated to contemporary perfumery.",
    },
    ctaLabel: { fr: "Explorer la collection", en: "Explore the collection" },
    ctaHref: "/collection",
  },
};
