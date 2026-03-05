import { create } from "zustand";
import type { Product, ProductSize } from "@/lib/data/products";

export interface CartItem {
  id: string;
  product: Product;
  size?: ProductSize;
  color?: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (payload: {
    product: Product;
    size?: ProductSize;
    color?: string;
    quantity?: number;
  }) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clear: () => void;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  addItem: ({ product, size, color, quantity = 1 }) =>
    set((state) => {
      const existing = state.items.find(
        (item) => item.product.id === product.id && item.size === size && item.color === color
      );
      if (existing) {
        return {
          items: state.items.map((item) =>
            item === existing
              ? { ...item, quantity: Math.min(item.quantity + quantity, 99) }
              : item
          )
        };
      }
      const id = `${product.id}-${size ?? "any"}-${color ?? "any"}-${Date.now()}`;
      return {
        items: [...state.items, { id, product, size, color, quantity }]
      };
    }),
  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id)
    })),
  updateQuantity: (id, quantity) =>
    set((state) => ({
      items: state.items.map((item) => (item.id === id ? { ...item, quantity } : item))
    })),
  clear: () => set({ items: [] })
}));

export function getCartSummary() {
  const { items } = useCartStore.getState();
  const subtotal = items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);
  return { subtotal, itemCount };
}

