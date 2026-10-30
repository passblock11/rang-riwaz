"use client";

import { useCart } from "@/components/CartProvider";
import { DEMO_ITEM_PRICE_INR, snapItemPayload } from "@/lib/snap-commerce";
import { trackSnap } from "@/lib/snaptr";

type Props = {
  productName: string;
};

export function AddToCartButton({ productName }: Props) {
  const { addItem } = useCart();

  return (
    <button
      type="button"
      className="mt-4 w-full rounded-full border border-bronze/20 bg-cream px-4 py-2.5 text-sm font-medium text-bronze transition hover:border-terracotta/40 hover:text-terracotta"
      onClick={() => {
        addItem(productName);
        trackSnap("ADD_CART", snapItemPayload(productName, 1));
      }}
    >
      Add to cart · ₹{DEMO_ITEM_PRICE_INR}
    </button>
  );
}
