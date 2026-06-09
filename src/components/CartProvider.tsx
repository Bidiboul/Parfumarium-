"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
  type ReactNode,
} from "react";
import type { Product, Variant } from "@/data/products";

export interface CartItem {
  /** Clé de ligne = slug + contenance (sku) */
  sku: string;
  slug: string;
  name: string;
  image: string;
  volume: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

type CartAction =
  | { type: "ADD"; product: Product; variant: Variant; quantity: number }
  | { type: "REMOVE"; sku: string }
  | { type: "SET_QTY"; sku: string; quantity: number }
  | { type: "CLEAR" }
  | { type: "HYDRATE"; items: CartItem[] };

const STORAGE_KEY = "parfumarium-cart";

function reducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "HYDRATE":
      return { items: action.items };
    case "ADD": {
      const existing = state.items.find((i) => i.sku === action.variant.sku);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.sku === action.variant.sku
              ? { ...i, quantity: i.quantity + action.quantity }
              : i,
          ),
        };
      }
      return {
        items: [
          ...state.items,
          {
            sku: action.variant.sku,
            slug: action.product.slug,
            name: action.product.name,
            image: action.product.image,
            volume: action.variant.volume,
            price: action.variant.price,
            quantity: action.quantity,
          },
        ],
      };
    }
    case "REMOVE":
      return { items: state.items.filter((i) => i.sku !== action.sku) };
    case "SET_QTY":
      return {
        items: state.items.map((i) =>
          i.sku === action.sku
            ? { ...i, quantity: Math.max(1, action.quantity) }
            : i,
        ),
      };
    case "CLEAR":
      return { items: [] };
    default:
      return state;
  }
}

interface CartContextValue {
  items: CartItem[];
  count: number;
  total: number;
  addItem: (product: Product, variant: Variant, quantity?: number) => void;
  removeItem: (sku: string) => void;
  setQuantity: (sku: string, quantity: number) => void;
  clear: () => void;
  /** S'incrémente à chaque ajout : utile pour déclencher le toast */
  lastAddedAt: number | null;
  lastAdded: CartItem | null;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { items: [] });
  const [hydrated, setHydrated] = useState(false);
  const [lastAddedAt, setLastAddedAt] = useState<number | null>(null);
  const [lastAdded, setLastAdded] = useState<CartItem | null>(null);

  // Chargement depuis localStorage au montage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const items = JSON.parse(raw) as CartItem[];
        if (Array.isArray(items)) dispatch({ type: "HYDRATE", items });
      }
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  // Sauvegarde à chaque changement
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
    } catch {
      /* ignore */
    }
  }, [state.items, hydrated]);

  const value = useMemo<CartContextValue>(() => {
    const count = state.items.reduce((sum, i) => sum + i.quantity, 0);
    const total = state.items.reduce((sum, i) => sum + i.quantity * i.price, 0);
    return {
      items: state.items,
      count,
      total,
      lastAddedAt,
      lastAdded,
      addItem: (product, variant, quantity = 1) => {
        dispatch({ type: "ADD", product, variant, quantity });
        setLastAdded({
          sku: variant.sku,
          slug: product.slug,
          name: product.name,
          image: product.image,
          volume: variant.volume,
          price: variant.price,
          quantity,
        });
        setLastAddedAt(Date.now());
      },
      removeItem: (sku) => dispatch({ type: "REMOVE", sku }),
      setQuantity: (sku, quantity) =>
        dispatch({ type: "SET_QTY", sku, quantity }),
      clear: () => dispatch({ type: "CLEAR" }),
    };
  }, [state.items, lastAddedAt, lastAdded]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart doit être utilisé à l'intérieur de <CartProvider>");
  }
  return ctx;
}
