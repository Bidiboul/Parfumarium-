# Thème Shopify Parfumarium

Thème Liquid sur mesure reproduisant le design du site parfumarium.fr
(palette ivoire/doré/vert profond, Cormorant Garamond + Jost).

## Installation (prévisualisation privée — sans toucher au site actuel)
1. Admin Shopify → Boutique en ligne → Thèmes
2. « Ajouter un thème » → « Importer un fichier ZIP » → `parfumarium-theme.zip`
3. Sur le thème importé : « Actions » → « Prévisualiser » (URL privée)
4. Personnaliser via « Personnaliser » (textes, images, menus, produits en avant)

## À configurer dans l'admin
- **Menus** (Navigation) : menu principal (Accueil, Collection, À propos, Contact)
  et menu « footer » (Livraison, Retours, CGV, Mentions légales, Confidentialité)
- **Pages** : créer les pages À propos, Contact (modèle `page.contact`),
  et les pages légales (contenu dans les pages du site actuel)
- **Collection best-sellers** : créer une collection et la choisir dans la
  section « Produits en avant » ; taguer les produits `best-seller` / `nouveaute`
  pour afficher les badges
- **Filtres familles** : fonctionnent via les tags produits existants
  (Floraux / Fruités / Chyprés, Gourmands / Sucrés / Addictifs, …)
- **Images accueil** : remplacer l'image du hero et des 4 blocs dans
  « Personnaliser » (images du site : dossier public/home/ du dépôt)

## Bascule finale (jour J)
1. Vérifier la prévisualisation (accueil, collection, fiche, panier, checkout)
2. « Publier » le thème
3. Repointer le DNS de parfumarium.fr vers Shopify (A @ → 23.227.38.65,
   CNAME www → shops.myshopify.com) et rattacher le domaine dans
   Paramètres → Domaines
