import { NextResponse } from "next/server";
import {
  isShopifyConfigured,
  createCheckout,
  type CheckoutLineInput,
} from "@/lib/shopify";

export const dynamic = "force-dynamic";

/**
 * POST /api/checkout
 * Reçoit les lignes du panier et renvoie l'URL de paiement Shopify.
 *
 * - Si Shopify n'est pas configuré → { configured: false } (mode démo).
 * - Sinon → { configured: true, url: "https://...checkout..." }.
 */
export async function POST(request: Request) {
  // Mode démonstration : pas de Shopify branché
  if (!isShopifyConfigured()) {
    return NextResponse.json({ configured: false });
  }

  try {
    const body = (await request.json()) as { items?: CheckoutLineInput[] };
    const items = body.items ?? [];

    if (items.length === 0) {
      return NextResponse.json(
        { configured: true, error: "Panier vide." },
        { status: 400 },
      );
    }

    const url = await createCheckout(items);
    return NextResponse.json({ configured: true, url });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Erreur inconnue.";
    return NextResponse.json(
      { configured: true, error: message },
      { status: 500 },
    );
  }
}
