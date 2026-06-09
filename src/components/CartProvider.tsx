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
import type { Product } from "@/data/products";

export interface CartItem {
  slug: string;
  name: string;
  price: number;
  volume: string;
  quantity: number;
  theme: Product["theme"];
}

interface CartState {
  items: CartItem[];
}

type CartAction =
  | { type: "ADD"; product: Product; quantity: number }
  | { type: "REMOVE"; slug: string }
  | { type: "SET_QTY"; slug: string; quantity: number }
  | { type: "CLEAR" }
  | { type: "HYDRATE"; items: CartItem[] };

const STORAGE_KEY = "parfumarium-cart";

function reducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "HYDRATE":
      return { items: action.items };
    case "ADD": {
      const existing = state.items.find((i) => i.slug === action.product.slug);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.slug === action.product.slug
              ? { ...i, quantity: i.quantity + action.quantity }
              : i,
          ),
        };
      }
      return {
        items: [
          ...state.items,
          {
            slug: action.product.slug,
            name: action.product.name,
            price: action.product.price,
            volume: action.product.volume,
            theme: action.product.theme,
            quantity: action.quantity,
          },
        ],
      };
    }
    case "REMOVE":
      return { items: state.items.filter((i) => i.slug !== action.slug) };
    case "SET_QTY":
      return {
        items: state.items.map((i) =>
          i.slug === action.slug
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
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (slug: string) => void;
  setQuantity: (slug: string, quantity: number) => void;
  clear: () => void;
  /** S'incrémente à chaque ajout : utile pour déclencher une animation/toast */
  lastAddedAt: number | null;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { items: [] });
  const [hydrated, setHydrated] = useState(false);
  const [lastAddedAt, setLastAddedAt] = useState<number | null>(null);

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
      addItem: (product, quantity = 1) => {
        dispatch({ type: "ADD", product, quantity });
        setLastAddedAt(Date.now());
      },
      removeItem: (slug) => dispatch({ type: "REMOVE", slug }),
      setQuantity: (slug, quantity) =>
        dispatch({ type: "SET_QTY", slug, quantity }),
      clear: () => dispatch({ type: "CLEAR" }),
    };
  }, [state.items, lastAddedAt]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart doit être utilisé à l'intérieur de <CartProvider>");
  }
  return ctx;
}
