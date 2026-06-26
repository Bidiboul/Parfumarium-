import { useLang, type Lang } from "./LanguageProvider";

/** Récupère la bonne langue d'une valeur bilingue { fr, en }. */
export function L(value: { fr: string; en: string }, lang: Lang): string {
  return value[lang];
}

/**
 * Dictionnaire de l'interface (chrome du site) en français et anglais.
 * Le contenu éditorial de l'accueil est dans src/data/homeContent.ts,
 * et le contenu des produits dans src/data/products(.en).ts.
 */
export const dict = {
  fr: {
    nav: { home: "Accueil", collection: "Collection", about: "À propos", contact: "Contact", account: "Mon compte" },
    header: {
      account: "Mon compte",
      search: "Rechercher un parfum",
      menu: "Menu",
      promo: "Livraison offerte dès 60 € · Expédition en 72h",
      searchPlaceholder: "Rechercher un parfum, une note, une famille…",
      searchHint: "Tapez au moins 2 lettres pour lancer la recherche.",
      searchNoResults: (q: string) => `Aucun parfum ne correspond à « ${q} ».`,
      esc: "Échap",
    },
    reassurance: [
      { title: "Expédition en 72h", text: "Préparée avec soin et expédiée rapidement." },
      { title: "Paiement sécurisé", text: "Transactions protégées et chiffrées." },
      { title: "Parfums sélectionnés", text: "Choisis pour leur tenue et leur caractère." },
      { title: "Conseil & boutique", text: "Une équipe disponible, à Vaison-la-Romaine." },
    ],
    bestSellers: { eyebrow: "Les plus convoités", title: "Nos best-sellers", subtitle: "Les fragrances raffinées qui ont conquis nos client·e·s — des parfums longue tenue, pensés pour marquer les esprits.", cta: "Voir toute la collection" },
    testimonials: { eyebrow: "Ils nous font confiance", title: "Ce que disent nos client·e·s", subtitle: "Des fragrances raffinées qui se vivent, et qui se racontent.", satisfied: "Clients satisfaits" },
    newsletter: { eyebrow: "Restons en contact", title: "Recevez nos fragrances en avant-première", text: "Nouveautés, éditions limitées et offres privées. Un rendez-vous olfactif, sans jamais encombrer votre boîte de réception.", placeholder: "Votre adresse e-mail", button: "Je m'inscris", success: "Merci de nous rejoindre. À très vite.", legal: "En vous inscrivant, vous acceptez de recevoir nos communications. Désinscription en un clic.", footerLabel: "La lettre Parfumarium", footerCta: "S'inscrire", footerSuccess: "Merci. Vos prochaines découvertes arrivent bientôt." },
    footer: { shop: "Boutique", maison: "Parfumarium", info: "Informations", contact: "Contact", tagline: "Parfumarium — des fragrances choisies pour leur caractère.", rights: "Tous droits réservés.", bottom: "Conçu avec soin en France · Paiement sécurisé · Expédition 72h", links: { home: "Accueil", catalogue: "Catalogue", contact: "Contact", univers: "Notre univers", rechargeable: "Concept rechargeable", selection: "Nos parfums", livraison: "Livraison", retours: "Retours", cgv: "CGV", mentions: "Mentions légales", confidentialite: "Confidentialité" } },
    collection: { all: "Tous", families: "Familles olfactives", filter: "Filtrer", parfum: "parfum", parfums: "parfums", empty: "Aucun parfum dans cette famille pour le moment." },
    families: { "Floraux / Fruités / Chyprés": "Floraux / Fruités", "Gourmands / Sucrés / Addictifs": "Gourmand", "Frais / Agrumes / Aromatiques": "Frais", "Boisés / Cuir / Oud / Musqués": "Niche" },
    card: { from: "dès", formats: "formats", view: "Voir le parfum", bestSeller: "Best-seller", nouveaute: "Nouveauté" },
    product: { home: "Accueil", collection: "Collection", correspondance: "Correspondance olfactive", pyramid: "Pyramide olfactive", head: "Tête", heart: "Cœur", base: "Fond", edp: "Eau de parfum", contenance: "Contenance", rupture: "Rupture", add: "Ajouter", added: "✓ Ajouté au panier", reassure: ["Expédiée en 72h", "Paiement sécurisé", "Fabriqué avec soin"], expTitle: "Plus qu'un parfum, un moment d'exception", expEyebrow: "L'expérience Parfumarium", expSubtitle: "Chaque détail est pensé pour faire de votre achat une expérience à la hauteur de la fragrance.", experience: [{ title: "Un écrin soigné", text: "Chaque flacon est livré dans un emballage élégant, prêt à offrir ou à s'offrir." }, { title: "Une tenue longue durée", text: "Des concentrations généreuses pour un sillage qui vous accompagne du matin au soir." }, { title: "Paiement 100% sécurisé", text: "Vos paiements sont protégés et traités en toute sécurité." }], relatedEyebrow: "Vous aimerez aussi", relatedTitle: "À découvrir également" },
    spotlight: { label: "Parfum du moment", discover: "Découvrir" },
    cart: { sel: "Votre sélection", title: "Panier", clear: "Vider le panier", emptyTitle: "Votre panier est vide", emptyText: "Laissez-vous tenter par l'une de nos fragrances. L'élégance n'attend que vous.", discoverCollection: "Découvrir la collection", thanksTitle: "Merci pour votre commande", thanksText: "Ceci est une démonstration : aucun paiement n'a été effectué. Votre sélection serait expédiée sous 72h, dans un écrin soigné.", continueDiscover: "Continuer mes découvertes", continueShopping: "Continuer mes achats", summary: "Récapitulatif", remainingA: "Plus que", remainingB: "pour la livraison offerte.", subtotal: "Sous-total", article: "article", articles: "articles", shipping: "Livraison", offered: "Offerte", total: "Total", placeOrder: "Passer la commande", redirecting: "Redirection en cours…", securePay: "Paiement 100% sécurisé · Livraison gérée par Shopify", remove: "Retirer", genericError: "Une erreur est survenue. Veuillez réessayer." },
    account: { eyebrow: "Espace client", title: "Mon compte Parfumarium", subtitle: "Suivez vos commandes et gérez vos informations en toute sécurité.", secure: "Connexion sécurisée", secureText: "Votre espace est protégé et géré par Shopify. Connectez-vous ou créez un compte en quelques secondes.", login: "Se connecter", register: "Créer un compte", encrypted: "Connexion chiffrée · Vos données ne sont jamais stockées sur ce site.", already: "Déjà connecté ?", goOrders: "Accéder à mes commandes", universe: "Tout votre univers, au même endroit", features: [{ title: "Vos commandes", text: "Retrouvez l'historique de toutes vos commandes et leur suivi." }, { title: "Vos informations", text: "Adresse e-mail, mot de passe, numéro de téléphone : modifiables à tout moment." }, { title: "Vos adresses", text: "Enregistrez vos adresses de livraison pour commander plus vite." }] },
    common: { discoverCollection: "Découvrir la collection", explore: "Explorer la collection" },
    legal: { updated: "Dernière mise à jour :", disclaimer: "Ce document est fourni à titre informatif et doit être adapté puis validé selon votre situation. Pour toute question, contactez-nous à l'adresse indiquée dans les mentions légales.", eyebrow: "Informations" },
  },
  en: {
    nav: { home: "Home", collection: "Collection", about: "About", contact: "Contact", account: "My account" },
    header: {
      account: "My account",
      search: "Search a fragrance",
      menu: "Menu",
      promo: "Free shipping from €60 · Dispatched within 72h",
      searchPlaceholder: "Search a fragrance, a note, a family…",
      searchHint: "Type at least 2 letters to start searching.",
      searchNoResults: (q: string) => `No fragrance matches “${q}”.`,
      esc: "Esc",
    },
    reassurance: [
      { title: "Dispatched in 72h", text: "Carefully prepared and shipped quickly." },
      { title: "Secure payment", text: "Protected and encrypted transactions." },
      { title: "Curated fragrances", text: "Chosen for their lasting power and character." },
      { title: "Advice & boutique", text: "A team at your service, in Vaison-la-Romaine." },
    ],
    bestSellers: { eyebrow: "The most coveted", title: "Our best-sellers", subtitle: "The refined fragrances loved by our customers — long-lasting perfumes designed to leave a mark.", cta: "View the full collection" },
    testimonials: { eyebrow: "They trust us", title: "What our customers say", subtitle: "Refined fragrances that are lived, and that are told.", satisfied: "Happy customers" },
    newsletter: { eyebrow: "Stay in touch", title: "Discover our fragrances first", text: "New arrivals, limited editions and private offers. An olfactory rendez-vous, without ever cluttering your inbox.", placeholder: "Your email address", button: "Sign up", success: "Thank you for joining us. See you soon.", legal: "By signing up, you agree to receive our communications. Unsubscribe in one click.", footerLabel: "The Parfumarium letter", footerCta: "Sign up", footerSuccess: "Thank you. Your next discoveries are on their way." },
    footer: { shop: "Shop", maison: "Parfumarium", info: "Information", contact: "Contact", tagline: "Parfumarium — fragrances chosen for their character.", rights: "All rights reserved.", bottom: "Crafted with care in France · Secure payment · 72h dispatch", links: { home: "Home", catalogue: "Catalogue", contact: "Contact", univers: "Our universe", rechargeable: "Refillable concept", selection: "Our fragrances", livraison: "Shipping", retours: "Returns", cgv: "Terms of sale", mentions: "Legal notice", confidentialite: "Privacy" } },
    collection: { all: "All", families: "Olfactory families", filter: "Filter", parfum: "fragrance", parfums: "fragrances", empty: "No fragrance in this family for now." },
    families: { "Floraux / Fruités / Chyprés": "Floral / Fruity", "Gourmands / Sucrés / Addictifs": "Gourmand", "Frais / Agrumes / Aromatiques": "Fresh", "Boisés / Cuir / Oud / Musqués": "Niche" },
    card: { from: "from", formats: "sizes", view: "View fragrance", bestSeller: "Best-seller", nouveaute: "New" },
    product: { home: "Home", collection: "Collection", correspondance: "Olfactory match", pyramid: "Olfactory pyramid", head: "Top", heart: "Heart", base: "Base", edp: "Eau de parfum", contenance: "Size", rupture: "Sold out", add: "Add", added: "✓ Added to cart", reassure: ["Dispatched in 72h", "Secure payment", "Crafted with care"], expTitle: "More than a perfume, an exceptional moment", expEyebrow: "The Parfumarium experience", expSubtitle: "Every detail is designed to make your purchase an experience worthy of the fragrance.", experience: [{ title: "An elegant case", text: "Each bottle is delivered in elegant packaging, ready to gift or to treat yourself." }, { title: "Long-lasting wear", text: "Generous concentrations for a trail that stays with you from morning to evening." }, { title: "100% secure payment", text: "Your payments are protected and processed securely." }], relatedEyebrow: "You may also like", relatedTitle: "Also worth discovering" },
    spotlight: { label: "Fragrance of the moment", discover: "Discover" },
    cart: { sel: "Your selection", title: "Cart", clear: "Empty cart", emptyTitle: "Your cart is empty", emptyText: "Treat yourself to one of our fragrances. Elegance is waiting for you.", discoverCollection: "Discover the collection", thanksTitle: "Thank you for your order", thanksText: "This is a demo: no payment was processed. Your selection would be dispatched within 72h, in elegant packaging.", continueDiscover: "Continue exploring", continueShopping: "Continue shopping", summary: "Summary", remainingA: "Only", remainingB: "away from free shipping.", subtotal: "Subtotal", article: "item", articles: "items", shipping: "Shipping", offered: "Free", total: "Total", placeOrder: "Checkout", redirecting: "Redirecting…", securePay: "100% secure payment · Shipping handled by Shopify", remove: "Remove", genericError: "Something went wrong. Please try again." },
    account: { eyebrow: "Customer area", title: "My Parfumarium account", subtitle: "Track your orders and manage your information securely.", secure: "Secure login", secureText: "Your area is protected and managed by Shopify. Log in or create an account in seconds.", login: "Log in", register: "Create an account", encrypted: "Encrypted connection · Your data is never stored on this site.", already: "Already registered?", goOrders: "Go to my orders", universe: "Your whole world, in one place", features: [{ title: "Your orders", text: "Find the history of all your orders and their tracking." }, { title: "Your information", text: "Email, password, phone number: editable at any time." }, { title: "Your addresses", text: "Save your delivery addresses to order faster." }] },
    common: { discoverCollection: "Discover the collection", explore: "Explore the collection" },
    legal: { updated: "Last updated:", disclaimer: "This document is provided for information and must be adapted and validated according to your situation. For any question, contact us at the address shown in the legal notice.", eyebrow: "Information" },
  },
} as const;

export function useT() {
  const { lang } = useLang();
  return dict[lang];
}
