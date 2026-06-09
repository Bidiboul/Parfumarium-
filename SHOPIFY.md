# Brancher Parfumarium sur Shopify (mode « headless »)

Ce guide explique comment connecter le site Next.js à une boutique Shopify
pour gérer **les vrais paiements, la livraison et les commandes**, tout en
gardant le design sur-mesure.

> **Principe** : le site reste la vitrine. Quand un client clique sur
> « Passer la commande », il est redirigé vers la page de paiement
> sécurisée de **Shopify**. Shopify encaisse, gère le stock et les
> expéditions.

---

## Vue d'ensemble

```
  Site Next.js (Vercel)            Shopify
 ┌───────────────────┐         ┌────────────────────┐
 │  Vitrine premium  │         │  Produits / Stock  │
 │  Panier           │ ──API──▶│  Paiement (CB…)    │
 │  « Commander »    │         │  Livraison         │
 └───────────────────┘         └────────────────────┘
        Storefront API + redirection vers le checkout Shopify
```

---

## Étape 1 — Créer la boutique et importer les produits

1. Crée un compte sur **[shopify.com](https://www.shopify.com)** (essai gratuit).
2. Dans l'admin Shopify : **Produits → Importer**.
3. Charge le fichier **`Parfumarium_Shopify_Import_Stock.csv`** (celui que tu
   as déjà). Tes 60 parfums et leurs 4 contenances sont créés automatiquement.
4. Ajoute les images (dossier `Parfumarium_Images_60`) sur chaque produit,
   ou via le second CSV `..._Images_Template.csv` si tes images sont
   hébergées en ligne.

> ✅ Important : les **handles** Shopify (`creamy-milk-590`) sont identiques
> aux `slug` du site, et les contenances aux options. Le branchement est
> donc automatique, rien à renommer.

---

## Étape 2 — Activer l'accès « Storefront API »

1. Dans l'admin : **Paramètres → Applications et canaux de vente →
   Développer des applications** (Develop apps).
2. Clique **« Créer une application »**, donne un nom (ex. `Parfumarium Web`).
3. Onglet **« Configuration de l'API Storefront »** → coche au minimum :
   - `unauthenticated_read_product_listings`
   - `unauthenticated_read_product_inventory`
   - `unauthenticated_write_checkouts`
   - `unauthenticated_read_checkouts`
4. **Installe** l'application.
5. Onglet **« Identifiants API »** → copie le
   **« Jeton d'accès Storefront API »** (Storefront access token).

---

## Étape 3 — Renseigner les clés dans le projet

1. À la racine du projet, copie `.env.example` en **`.env.local`**.
2. Renseigne :

   ```bash
   SHOPIFY_STORE_DOMAIN=ta-boutique.myshopify.com
   SHOPIFY_STOREFRONT_ACCESS_TOKEN=le_token_copié_à_l_étape_2
   ```

3. Relance le site (`npm run dev`). C'est tout !

> Le bouton « Passer la commande » crée désormais un panier Shopify et
> redirige vers le paiement réel. Sans ces clés, il reste en mode démo.

### Sur Vercel (mise en ligne)

Dans ton projet Vercel : **Settings → Environment Variables**, ajoute les
mêmes variables (`SHOPIFY_STORE_DOMAIN`, `SHOPIFY_STOREFRONT_ACCESS_TOKEN`),
puis redéploie. Le token reste **côté serveur**, il n'est jamais exposé au
navigateur.

---

## Comment ça marche techniquement

| Fichier | Rôle |
| ------- | ---- |
| `src/lib/shopify.ts` | Client Storefront API : retrouve les variantes par handle + contenance, crée le panier Shopify, renvoie l'URL de paiement. |
| `src/app/api/checkout/route.ts` | Route serveur appelée par le panier. Renvoie l'URL de checkout Shopify (ou `configured:false` en mode démo). |
| `src/app/panier/page.tsx` | Au clic, appelle l'API puis redirige vers Shopify. |

Le **catalogue affiché** (pages produit, collection) utilise les données
locales `src/data/products.ts`, qui sont **identiques** à ce que tu importes
dans Shopify (même source CSV). Seul le **paiement** passe par Shopify.

---

## Aller plus loin (optionnel)

- **Catalogue 100 % live** : faire lire les prix et le stock directement
  depuis Shopify (au lieu du fichier local) pour une synchro automatique.
  Le client `src/lib/shopify.ts` est prêt à être étendu pour ça.
- **Domaine personnalisé** : brancher `parfumarium.com` sur Vercel.
- **Suivi des commandes / comptes clients** : via le canal Shopify.

Besoin d'aide pour l'une de ces étapes ? Indique où tu bloques.
