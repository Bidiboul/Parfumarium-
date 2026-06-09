/**
 * Catalogue Parfumarium
 * ---------------------------------------------------------------
 * C'est ICI que vous modifiez, ajoutez ou supprimez des parfums.
 * Chaque produit possède un thème de couleurs (`theme`) utilisé par
 * l'illustration de flacon (composant <BottleVisual />), ce qui évite
 * d'avoir à fournir des fichiers images. Remplacez-le par une vraie
 * image en ajoutant un champ `image` et en l'utilisant dans les cartes.
 */

export type OlfactiveFamily =
  | "Ambré"
  | "Boisé"
  | "Floral"
  | "Frais"
  | "Oriental";

export interface BottleTheme {
  /** Couleur du jus dans le flacon (dégradé haut) */
  liquidTop: string;
  /** Couleur du jus dans le flacon (dégradé bas) */
  liquidBottom: string;
  /** Couleur d'ambiance du fond de la carte */
  backdrop: string;
  /** Couleur du capuchon */
  cap: string;
}

export interface Product {
  /** Identifiant unique utilisé dans l'URL : /produit/[slug] */
  slug: string;
  name: string;
  /** Tagline courte affichée sous le nom */
  tagline: string;
  price: number;
  family: OlfactiveFamily;
  /** Notes olfactives principales (3 idéalement) */
  notes: string[];
  /** Pyramide olfactive détaillée pour la page produit */
  pyramid: {
    head: string[];
    heart: string[];
    base: string[];
  };
  /** Description courte (cartes) */
  shortDescription: string;
  /** Description longue (page produit) */
  description: string;
  volume: string;
  bestSeller?: boolean;
  theme: BottleTheme;
}

export const products: Product[] = [
  {
    slug: "ambre-royal",
    name: "Ambre Royal",
    tagline: "Chaleur dorée & sillage enveloppant",
    price: 39.9,
    family: "Ambré",
    notes: ["Ambre", "Vanille", "Bois de santal"],
    pyramid: {
      head: ["Bergamote dorée", "Cardamome"],
      heart: ["Ambre", "Fleur de vanille"],
      base: ["Bois de santal", "Fève tonka"],
    },
    shortDescription:
      "Une fragrance chaude et enveloppante, pensée pour les soirées élégantes.",
    description:
      "Ambre Royal s'ouvre comme une étoffe précieuse que l'on déploie au crépuscule. L'ambre y règne en majesté, adouci par une vanille crémeuse et soutenu par un bois de santal velouté. Un parfum qui laisse derrière soi une trace mémorable, sans jamais hausser le ton.",
    volume: "100 ml",
    bestSeller: true,
    theme: {
      liquidTop: "#D9A85C",
      liquidBottom: "#9A5E2C",
      backdrop: "#F1E6D2",
      cap: "#7A4E2D",
    },
  },
  {
    slug: "nuit-de-velours",
    name: "Nuit de Velours",
    tagline: "Profond, sensuel, mystérieux",
    price: 44.9,
    family: "Oriental",
    notes: ["Musc", "Jasmin", "Patchouli"],
    pyramid: {
      head: ["Poivre rose", "Mandarine noire"],
      heart: ["Jasmin sambac", "Rose de nuit"],
      base: ["Musc", "Patchouli", "Vanille fumée"],
    },
    shortDescription: "Un parfum profond, sensuel et mystérieux.",
    description:
      "Nuit de Velours est une invitation au secret. Le jasmin s'y dévoile lentement, enlacé par un patchouli sombre et un musc caressant. C'est le parfum des conversations qui s'éternisent et des regards qui en disent long — une élégance nocturne, intime et magnétique.",
    volume: "100 ml",
    bestSeller: true,
    theme: {
      liquidTop: "#6E5A78",
      liquidBottom: "#2C2230",
      backdrop: "#E9E2E6",
      cap: "#211A26",
    },
  },
  {
    slug: "eclat-blanc",
    name: "Éclat Blanc",
    tagline: "Frais, propre, lumineux",
    price: 34.9,
    family: "Frais",
    notes: ["Fleur d'oranger", "Bergamote", "Musc blanc"],
    pyramid: {
      head: ["Bergamote de Calabre", "Citron vert"],
      heart: ["Fleur d'oranger", "Néroli"],
      base: ["Musc blanc", "Bois clair"],
    },
    shortDescription:
      "Une senteur fraîche, propre et lumineuse pour le quotidien.",
    description:
      "Éclat Blanc capture la lumière du matin. La fleur d'oranger y diffuse une fraîcheur soyeuse, rehaussée d'une bergamote pétillante et enveloppée d'un musc blanc d'une propreté absolue. Le parfum idéal pour celles et ceux qui aiment la clarté et la légèreté au quotidien.",
    volume: "100 ml",
    bestSeller: true,
    theme: {
      liquidTop: "#FBF7EE",
      liquidBottom: "#DAD2C0",
      backdrop: "#F4F0E7",
      cap: "#C9BD9F",
    },
  },
  {
    slug: "bois-precieux",
    name: "Bois Précieux",
    tagline: "Boisé, moderne, affirmé",
    price: 42.9,
    family: "Boisé",
    notes: ["Cèdre", "Vétiver", "Poivre noir"],
    pyramid: {
      head: ["Poivre noir", "Pamplemousse"],
      heart: ["Cèdre", "Iris"],
      base: ["Vétiver", "Ambre gris"],
    },
    shortDescription: "Une fragrance boisée, moderne et affirmée.",
    description:
      "Bois Précieux trace une ligne nette et contemporaine. Le cèdre y dialogue avec un vétiver minéral, animé par une pointe de poivre noir vibrant. Une signature boisée, droite et assurée, pour une présence qui se remarque sans en faire trop.",
    volume: "100 ml",
    theme: {
      liquidTop: "#A88A5E",
      liquidBottom: "#4E3B25",
      backdrop: "#EDE6D7",
      cap: "#3C2E1D",
    },
  },
  {
    slug: "rose-imperiale",
    name: "Rose Impériale",
    tagline: "Floral, élégant, délicatement sucré",
    price: 37.9,
    family: "Floral",
    notes: ["Rose", "Litchi", "Vanille douce"],
    pyramid: {
      head: ["Litchi", "Poire juteuse"],
      heart: ["Rose de mai", "Pivoine"],
      base: ["Vanille douce", "Musc rosé"],
    },
    shortDescription: "Un parfum floral, élégant et délicatement sucré.",
    description:
      "Rose Impériale célèbre la fleur reine dans sa version la plus raffinée. Une rose fraîche et juteuse, sublimée par le litchi, repose sur une vanille douce qui en arrondit les contours. Un floral moderne, gracieux et résolument féminin.",
    volume: "100 ml",
    theme: {
      liquidTop: "#E7AEB4",
      liquidBottom: "#B25A6A",
      backdrop: "#F4E6E6",
      cap: "#8E3E50",
    },
  },
  {
    slug: "orage-d-ambre",
    name: "Orage d'Ambre",
    tagline: "Intense, charismatique, sophistiqué",
    price: 46.9,
    family: "Ambré",
    notes: ["Ambre gris", "Cuir", "Fève tonka"],
    pyramid: {
      head: ["Safran", "Bergamote noire"],
      heart: ["Cuir", "Encens"],
      base: ["Ambre gris", "Fève tonka", "Oud"],
    },
    shortDescription: "Une création intense, charismatique et sophistiquée.",
    description:
      "Orage d'Ambre est une tempête maîtrisée. Le cuir y déploie sa noblesse, traversé d'éclats de safran et d'encens, avant de se fondre dans un ambre gris profond et une fève tonka gourmande. Un parfum de caractère, pour les personnalités qui ne passent jamais inaperçues.",
    volume: "100 ml",
    bestSeller: true,
    theme: {
      liquidTop: "#C68B4A",
      liquidBottom: "#5A3115",
      backdrop: "#EDE2CF",
      cap: "#3A2110",
    },
  },
];

/** Récupère un produit par son slug */
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

/** Les best-sellers mis en avant sur l'accueil */
export function getBestSellers(): Product[] {
  return products.filter((p) => p.bestSeller);
}

/** Suggestions : autres parfums de la même famille, sinon les premiers */
export function getRelatedProducts(slug: string, limit = 3): Product[] {
  const current = getProductBySlug(slug);
  if (!current) return products.slice(0, limit);
  const sameFamily = products.filter(
    (p) => p.slug !== slug && p.family === current.family,
  );
  const others = products.filter(
    (p) => p.slug !== slug && p.family !== current.family,
  );
  return [...sameFamily, ...others].slice(0, limit);
}

/** Formatage du prix en euros (format français) */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(price);
}
