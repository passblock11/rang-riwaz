"use client";

import { useCart } from "@/components/CartProvider";
import type { ReactNode } from "react";

/** Keeps fixed checkout bar from covering page content. */
export function CartMain({ children }: { children: ReactNode }) {
  const { totalItems } = useCart();
  return (
    <div className={`flex-1 ${totalItems > 0 ? "pb-40 sm:pb-32" : ""}`}>{children}</div>
  );
}
