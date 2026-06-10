/**
 * Contenu de la page d'accueil — ÉDITABLE FACILEMENT
 * ---------------------------------------------------------------
 * Ce fichier joue le rôle des « réglages de section » d'un thème.
 * Vous pouvez y modifier tous les TEXTES, TITRES, LIENS et IMAGES
 * de la page d'accueil sans toucher au code des composants.
 *
 * 📷 IMAGES : pour mettre vos propres visuels (peau, fleurs, lumière
 * dorée…), déposez vos fichiers dans `public/home/` puis remplacez
 * les chemins ci-dessous, par ex. : image: "/home/hero.jpg".
 * En attendant, on utilise des photos produits existantes.
 */

export interface HomeBlock {
  title: string;
  text: string;
  image: string;
}

export const home = {
  /** Hero principal (grande image + titre + CTA) */
  hero: {
    image: "/home/hero.jpg",
    eyebrow: "Maison de parfums",
    title: "Élégance intemporelle",
    subtitle:
      "Des fragrances sélectionnées pour leur caractère, leur tenue et leur signature olfactive.",
    ctaLabel: "Acheter maintenant",
    ctaHref: "/collection",
  },

  /** Section éditoriale (phrase de marque) */
  editorial: {
    text: "Parfumarium sélectionne des fragrances pour leur qualité olfactive et leur caractère, afin de proposer une expérience parfum unique.",
    ctaLabel: "Découvrir nos fragrances",
    ctaHref: "/collection",
  },

  /** Les 4 blocs image + titre + texte */
  blocks: [
    {
      title: "La découverte",
      text: "Chez Parfumarium, nous vous guidons à travers différents univers olfactifs pour trouver la fragrance qui vous correspond vraiment.",
      image: "/home/decouverte.jpg",
    },
    {
      title: "Le savoir-faire",
      text: "Une collection de parfums rigoureusement sélectionnés pour leur richesse, leur tenue et leur signature olfactive.",
      image: "/home/savoir-faire.jpg",
    },
    {
      title: "La personnalisation",
      text: "Prenez le temps de sentir, comparer et choisir le parfum qui raconte votre histoire.",
      image: "/home/personnalisation.jpg",
    },
    {
      title: "Le concept rechargeable",
      text: "Un parfum que vous aimez mérite d'être rechargé, pas remplacé.",
      image: "/home/rechargeable.jpg",
    },
  ] as HomeBlock[],

  /** Section « Notre approche » */
  approche: {
    eyebrow: "Notre approche",
    title:
      "Nous collaborons avec des partenaires spécialisés dans la création et la sélection de fragrances de qualité.",
    subtitle:
      "Nos fragrances sont issues d'un savoir-faire dédié à la parfumerie contemporaine.",
    ctaLabel: "Explorer la collection",
    ctaHref: "/collection",
  },
};
