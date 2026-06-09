# Parfumarium

> L'élégance d'un parfum, sans le prix du luxe.

Site e-commerce premium pour la marque de parfums fictive **Parfumarium**, construit avec **Next.js 14 (App Router)**, **React 18**, **TypeScript** et **Tailwind CSS**. Design responsive, animations douces et expérience d'achat complète (panier persistant).

---

## 1. Comment lancer le projet

Pré-requis : **Node.js 18.17+** et **npm**.

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement
npm run dev
# → ouvre http://localhost:3000

# 3. Build de production
npm run build
npm start
```

Aucune variable d'environnement n'est nécessaire : le site fonctionne immédiatement.

---

## 2. Les fichiers principaux créés

```
parfumarium/
├── src/
│   ├── app/                          # Pages (App Router)
│   │   ├── layout.tsx                # Layout global : polices, SEO, Header/Footer/Panier
│   │   ├── globals.css               # Styles globaux + classes utilitaires (boutons, etc.)
│   │   ├── page.tsx                  # 🏠 Page d'accueil
│   │   ├── collection/page.tsx       # 🛍️  Page collection / boutique (avec filtres)
│   │   ├── produit/[slug]/page.tsx   # 🧴 Page détail produit (générée par produit)
│   │   ├── a-propos/page.tsx         # ℹ️  Page à propos
│   │   ├── contact/page.tsx          # ✉️  Page contact (formulaire + FAQ)
│   │   ├── panier/page.tsx           # 🛒 Page panier (récap + simulation commande)
│   │   └── not-found.tsx             # Page 404 personnalisée
│   │
│   ├── components/
│   │   ├── Header.tsx                # En-tête fixe : logo, nav, icône panier, menu mobile
│   │   ├── Footer.tsx                # Pied de page complet + newsletter
│   │   ├── CartProvider.tsx          # Contexte panier (état + persistance localStorage)
│   │   ├── CartToast.tsx             # Notification d'ajout au panier
│   │   ├── ProductCard.tsx           # Carte produit premium réutilisable
│   │   ├── BottleVisual.tsx          # Illustration SVG du flacon (placeholder élégant)
│   │   ├── AddToCartButton.tsx       # Sélecteur quantité + ajout panier
│   │   ├── CollectionGrid.tsx        # Grille filtrable par famille olfactive
│   │   ├── ContactForm.tsx           # Formulaire de contact
│   │   ├── Newsletter.tsx            # Bloc newsletter (2 variantes)
│   │   ├── FadeIn.tsx                # Animation d'apparition au scroll
│   │   ├── PageHero.tsx              # En-tête des pages internes
│   │   └── sections/                 # Sections de la page d'accueil
│   │       ├── Hero.tsx
│   │       ├── BestSellers.tsx
│   │       ├── Story.tsx
│   │       ├── WhyChoose.tsx
│   │       ├── Sensorial.tsx
│   │       ├── Testimonials.tsx
│   │       └── SectionHeading.tsx
│   │
│   └── data/
│       └── products.ts               # ⭐ Catalogue des parfums (source unique de vérité)
│
├── tailwind.config.ts                # ⭐ Palette de couleurs, polices, animations
├── next.config.mjs
├── tsconfig.json
└── package.json
```

---

## 3. Où modifier les produits

**Tout se passe dans `src/data/products.ts`.**

Chaque parfum est un objet du tableau `products`. Pour ajouter un parfum, copiez un bloc existant et adaptez les champs :

```ts
{
  slug: "mon-parfum",          // identifiant unique → URL /produit/mon-parfum
  name: "Mon Parfum",
  tagline: "Une accroche courte",
  price: 39.9,
  family: "Ambré",             // Ambré | Boisé | Floral | Frais | Oriental
  notes: ["Note 1", "Note 2", "Note 3"],
  pyramid: {
    head: ["..."], heart: ["..."], base: ["..."],
  },
  shortDescription: "Phrase d'accroche (cartes).",
  description: "Description longue (page produit).",
  volume: "100 ml",
  bestSeller: true,            // (optionnel) affiché sur l'accueil
  theme: {                     // couleurs du flacon SVG
    liquidTop: "#D9A85C", liquidBottom: "#9A5E2C",
    backdrop: "#F1E6D2", cap: "#7A4E2D",
  },
},
```

> Les visuels sont des **illustrations SVG générées** à partir du `theme` (aucune image à fournir). Pour utiliser de vraies photos, ajoutez un champ `image` au produit et remplacez `<BottleVisual />` par le composant `<Image />` de Next.js dans `ProductCard.tsx`, `Hero.tsx` et la page produit.

Les fonctions utilitaires en bas du fichier (`getBestSellers`, `getRelatedProducts`, `formatPrice`…) gèrent automatiquement l'affichage.

---

## 4. Où modifier les couleurs et les textes

### Couleurs
**`tailwind.config.ts` → `theme.extend.colors`.** Toute l'identité visuelle y est centralisée :

| Variable      | Rôle                        | Valeur     |
| ------------- | --------------------------- | ---------- |
| `ink`         | Noir profond chaud          | `#161311`  |
| `ivory`       | Blanc cassé / ivoire (fond) | `#F7F3EC`  |
| `champagne`   | Beige champagne             | `#E7D8BE`  |
| `gold`        | Doré subtil (accents)       | `#B9975B`  |
| `warmgray`    | Gris chaud (textes)         | `#8C857B`  |
| `amber`       | Marron ambré                | `#7A4E2D`  |
| `sand`        | Sable clair (sections)      | `#EFE7D8`  |

Changez une valeur ici et toute l'interface se met à jour.

### Polices
Définies dans `src/app/layout.tsx` (via `next/font`) :
- **Titres** : *Cormorant Garamond* (serif élégante)
- **Textes** : *Jost* (sans-serif moderne)

### Textes
- **Slogans / sections d'accueil** : dans les composants de `src/components/sections/`.
- **Header / Footer / Newsletter** : composants du même nom.
- **Styles de boutons réutilisables** (`.btn-primary`, `.btn-outline`, `.btn-gold`, `.eyebrow`) : dans `src/app/globals.css`.

---

## 5. Prochaines améliorations possibles

- **Paiement réel** : intégrer Stripe / PayPal sur la page panier (actuellement une simulation).
- **Backend & CMS** : déplacer le catalogue vers une base de données ou un CMS headless (Sanity, Contentful) pour gérer les produits sans toucher au code.
- **Photos produits** : remplacer les flacons SVG par de vraies photographies HD (champ `image` + `next/image`).
- **Newsletter / Contact** : connecter un service réel (Brevo, Mailchimp, Resend, Formspree).
- **Recherche & tri** : barre de recherche et tri par prix/nouveautés sur la collection.
- **Comptes clients** : authentification, historique de commandes, liste de souhaits.
- **Avis vérifiés** : système de notation et d'avis clients dynamiques.
- **Internationalisation (i18n)** et multidevise.
- **Analytics & SEO avancé** : sitemap.xml, données structurées JSON-LD produit, balises Open Graph dynamiques.

---

## Stack technique

- **Next.js 14** (App Router, génération statique)
- **React 18** + **TypeScript**
- **Tailwind CSS 3**
- Panier persistant via **React Context** + **localStorage**
- Animations au scroll via **IntersectionObserver** (respect de `prefers-reduced-motion`)

---

*Parfumarium — Un luxe discret, conçu pour le quotidien.*
