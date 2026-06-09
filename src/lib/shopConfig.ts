/**
 * Configuration publique de la boutique (utilisable côté client).
 * ---------------------------------------------------------------
 * Les espaces "compte client" (connexion, commandes, profil) sont
 * gérés et sécurisés par Shopify. On pointe toujours vers le domaine
 * `.myshopify.com` pour que ces pages atteignent Shopify, même si
 * le domaine public (parfumarium.fr) est servi par Vercel.
 *
 * Pour changer de boutique : définir NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN
 * (ex. dans Vercel) — sinon la valeur par défaut ci-dessous est utilisée.
 */

export const SHOP_DOMAIN =
  process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN ?? "a5pryz-q7.myshopify.com";

/** Page « mes commandes / mon profil » (Shopify, sécurisée) */
export const accountUrl = `https://${SHOP_DOMAIN}/account`;
/** Page de connexion (Shopify, sécurisée) */
export const loginUrl = `https://${SHOP_DOMAIN}/account/login`;
/** Page de création de compte (Shopify, sécurisée) */
export const registerUrl = `https://${SHOP_DOMAIN}/account/register`;
