/**
 * Client Shopify Storefront API (mode "headless").
 * ---------------------------------------------------------------
 * Ce module permet de transformer le panier du site en une vraie
 * commande Shopify (paiement + livraison gérés par Shopify).
 *
 * Il s'active automatiquement dès que les variables d'environnement
 * sont renseignées (voir .env.example et SHOPIFY.md). Sans elles, le
 * site reste en mode démonstration.
 *
 * ⚠️ Utilisé UNIQUEMENT côté serveur (route /api/checkout) : le token
 * n'est jamais exposé au navigateur.
 */

const DOMAIN = process.env.SHOPIFY_STORE_DOMAIN;
const TOKEN = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;
const VERSION = process.env.SHOPIFY_API_VERSION || "2024-10";

/** Le mode headless est-il configuré ? */
export function isShopifyConfigured(): boolean {
  return Boolean(DOMAIN && TOKEN);
}

interface GraphQLResponse<T> {
  data?: T;
  errors?: { message: string }[];
}

async function shopifyFetch<T>(
  query: string,
  variables: Record<string, unknown> = {},
): Promise<T> {
  if (!DOMAIN || !TOKEN) {
    throw new Error("Shopify n'est pas configuré (variables d'environnement manquantes).");
  }

  const res = await fetch(
    `https://${DOMAIN}/api/${VERSION}/graphql.json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": TOKEN,
      },
      body: JSON.stringify({ query, variables }),
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error(`Shopify HTTP ${res.status}`);
  }

  const json = (await res.json()) as GraphQLResponse<T>;
  if (json.errors?.length) {
    throw new Error(json.errors.map((e) => e.message).join(" · "));
  }
  if (!json.data) {
    throw new Error("Réponse Shopify vide.");
  }
  return json.data;
}

// ---------------------------------------------------------------------------
// Récupération des identifiants de variantes (par handle + contenance)
// ---------------------------------------------------------------------------

interface ProductVariantsResult {
  product: {
    id: string;
    variants: {
      nodes: {
        id: string;
        sku: string | null;
        selectedOptions: { name: string; value: string }[];
      }[];
    };
  } | null;
}

const PRODUCT_VARIANTS_QUERY = /* GraphQL */ `
  query ProductVariants($handle: String!) {
    product(handle: $handle) {
      id
      variants(first: 20) {
        nodes {
          id
          sku
          selectedOptions {
            name
            value
          }
        }
      }
    }
  }
`;

export interface CheckoutLineInput {
  /** Handle = slug du produit (identique au CSV Shopify) */
  handle: string;
  /** Contenance choisie, ex. "30 ML" */
  volume: string;
  /** SKU éventuel (secours pour le matching) */
  sku?: string;
  quantity: number;
}

interface CartLine {
  merchandiseId: string;
  quantity: number;
}

/**
 * Convertit les lignes du panier (handle + contenance) en lignes Shopify
 * (identifiants de variantes). Ignore les lignes introuvables.
 */
async function resolveCartLines(items: CheckoutLineInput[]): Promise<CartLine[]> {
  const lines: CartLine[] = [];

  for (const item of items) {
    const data = await shopifyFetch<ProductVariantsResult>(
      PRODUCT_VARIANTS_QUERY,
      { handle: item.handle },
    );
    const variants = data.product?.variants.nodes ?? [];
    // Priorité au SKU, sinon on matche sur la contenance (option)
    const match =
      variants.find((v) => item.sku && v.sku === item.sku) ??
      variants.find((v) =>
        v.selectedOptions.some(
          (o) => o.value.replace(/\s/g, "").toUpperCase() ===
            item.volume.replace(/\s/g, "").toUpperCase(),
        ),
      );
    if (match) {
      lines.push({ merchandiseId: match.id, quantity: item.quantity });
    }
  }

  return lines;
}

// ---------------------------------------------------------------------------
// Création du panier Shopify → URL de paiement
// ---------------------------------------------------------------------------

interface CartCreateResult {
  cartCreate: {
    cart: { id: string; checkoutUrl: string } | null;
    userErrors: { message: string }[];
  };
}

const CART_CREATE_MUTATION = /* GraphQL */ `
  mutation CartCreate($lines: [CartLineInput!]!) {
    cartCreate(input: { lines: $lines }) {
      cart {
        id
        checkoutUrl
      }
      userErrors {
        message
      }
    }
  }
`;

/**
 * Crée un panier Shopify et renvoie l'URL de paiement sécurisé.
 * Lance une erreur si aucune ligne valide n'a pu être résolue.
 */
export async function createCheckout(
  items: CheckoutLineInput[],
): Promise<string> {
  const lines = await resolveCartLines(items);
  if (lines.length === 0) {
    throw new Error("Aucun produit correspondant trouvé dans Shopify.");
  }

  const data = await shopifyFetch<CartCreateResult>(CART_CREATE_MUTATION, {
    lines,
  });

  if (data.cartCreate.userErrors.length) {
    throw new Error(data.cartCreate.userErrors.map((e) => e.message).join(" · "));
  }
  const url = data.cartCreate.cart?.checkoutUrl;
  if (!url) {
    throw new Error("Impossible de créer le panier Shopify.");
  }

  // En headless, le domaine public (parfumarium.fr) est servi par Vercel.
  // On force le domaine Shopify (.myshopify.com) sur l'URL de paiement pour
  // éviter que le checkout n'atterrisse sur le site et renvoie une 404.
  try {
    const parsed = new URL(url);
    if (DOMAIN) parsed.host = DOMAIN;
    return parsed.toString();
  } catch {
    return url;
  }
}
