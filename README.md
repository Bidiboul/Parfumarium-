# Parfumarium

> L'élégance d'un parfum, sans le prix du luxe.

Site e-commerce premium pour la marque de parfums **Parfumarium**, construit avec **Next.js 14 (App Router)**, **React 18**, **TypeScript** et **Tailwind CSS**. Design responsive, animations douces et expérience d'achat complète (panier persistant).

**Catalogue réel** : 60 parfums issus de l'export Shopify officiel, chacun décliné en **4 contenances** (15 / 30 / 50 / 100 ML) avec photos HD, notes olfactives, famille et correspondance olfactive.

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
│   │   ├── ProductCard.tsx           # Carte produit premium (photo réelle)
│   │   ├── AddToCartButton.tsx       # Sélecteur contenance + quantité + ajout panier
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
│       └── products.ts               # ⭐ Catalogue des 60 parfums (généré depuis Shopify)
│
├── public/
│   └── products/                     # 📸 Photos HD des parfums (<code>.jpg)
│
├── tailwind.config.ts                # ⭐ Palette de couleurs, polices, animations
├── next.config.mjs
├── tsconfig.json
└── package.json
```

---

## 3. Où modifier les produits

**Tout se passe dans `src/data/products.ts`** (les 60 parfums y sont listés) et **`public/products/`** (les photos, nommées `<code>.jpg`).

Le fichier a été **généré depuis l'export Shopify** (`Parfumarium_Shopify_Import_Stock.csv`), mais reste un simple fichier TypeScript que vous pouvez éditer à la main. Chaque parfum suit cette structure :

```ts
{
  slug: "creamy-milk-590",        // identifiant → URL /produit/creamy-milk-590
  name: "Creamy Milk 590",
  code: "590",                     // = nom du fichier image (public/products/590.jpg)
  family: "Gourmand Lacté Vanillé",
  group: "Gourmands / Sucrés / Addictifs",   // sert aux filtres de la collection
  inspiration: "Bianco Latte",     // correspondance olfactive
  gender: "unisex",
  mood: "Doux, cocooning, addictif.",
  shortDescription: "…",           // affiché sur les cartes
  paragraphs: ["…", "…"],          // description longue (page produit)
  notes: { head: [...], heart: [...], base: [...] },
  image: "/products/590.jpg",
  accent: "#9A5E2C",               // teinte de fond pendant le chargement
  price: 19.9,                     // prix le plus bas (« dès … »)
  variants: [                      // 4 contenances
    { volume: "15 ML", price: 19.9, sku: "PARF-590-15ML" },
    { volume: "30 ML", price: 29.9, sku: "PARF-590-30ML" },
    { volume: "50 ML", price: 49.9, sku: "PARF-590-50ML" },
    { volume: "100 ML", price: 79.9, sku: "PARF-590-100ML" },
  ],
  bestSeller: true,                // (optionnel) mis en avant sur l'accueil
},
```

- **Changer une photo** : remplacez le fichier dans `public/products/` (ratio 4:5 recommandé).
- **Mettre en avant un parfum** sur l'accueil : ajoutez `bestSeller: true`.
- **Filtres de la collection** : définis par la liste `groups` (en bas du fichier).

Les fonctions utilitaires (`getBestSellers`, `getRelatedProducts`, `formatPrice`…) gèrent automatiquement l'affichage.

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
- **Newsletter / Contact** : connecter un service réel (Brevo, Mailchimp, Resend, Formspree).
- **Stock & disponibilité** : afficher les quantités en stock (présentes dans le CSV) et gérer les ruptures.
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
