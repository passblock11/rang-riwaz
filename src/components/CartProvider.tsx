"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type CartLine = {
  id: string;
  name: string;
  quantity: number;
};

type CartContextValue = {
  lines: CartLine[];
  totalItems: number;
  addItem: (name: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);

  const addItem = useCallback((name: string) => {
    setLines((prev) => {
      const existing = prev.find((line) => line.name === name);
      if (existing) {
        return prev.map((line) =>
          line.name === name ? { ...line, quantity: line.quantity + 1 } : line,
        );
      }
      return [...prev, { id: name, name, quantity: 1 }];
    });
  }, []);

  const clearCart = useCallback(() => setLines([]), []);

  const totalItems = useMemo(
    () => lines.reduce((sum, line) => sum + line.quantity, 0),
    [lines],
  );

  const value = useMemo(
    () => ({ lines, totalItems, addItem, clearCart }),
    [lines, totalItems, addItem, clearCart],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within CartProvider");
  }
  return ctx;
}
