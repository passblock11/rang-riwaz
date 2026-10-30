"use client";

import { useCart } from "@/components/CartProvider";
import { InstagramLeadLink } from "@/components/InstagramLeadLink";
import { DEMO_ITEM_PRICE_INR, snapItemPayload } from "@/lib/snap-commerce";
import { trackSnap } from "@/lib/snaptr";

function createTransactionId(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return `demo-${Date.now()}`;
}

export function CheckoutBar() {
  const { lines, totalItems, clearCart } = useCart();

  if (totalItems === 0) {
    return null;
  }

  const itemIds = lines.map((line) => line.name).join(",");
  const totalPrice = lines.reduce(
    (sum, line) => sum + DEMO_ITEM_PRICE_INR * line.quantity,
    0,
  );

  const checkoutPayload = {
    item_ids: itemIds,
    item_category: "festive_decor",
    price: totalPrice,
    currency: "INR",
    number_items: totalItems,
  };

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-gold-soft/60 bg-cream/95 px-4 py-3 shadow-[0_-8px_30px_rgba(74,55,40,0.12)] backdrop-blur-md sm:px-6"
      role="region"
      aria-label="Shopping cart"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-bronze">
          <span className="font-medium">{totalItems}</span> in cart ·{" "}
          <span className="font-serif text-base">₹{totalPrice.toLocaleString("en-IN")}</span>
          <span className="mt-0.5 block text-xs text-bronze/55">
            Demo cart for orders on Instagram — confirm there after checkout.
          </span>
        </p>
        <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
          <InstagramLeadLink
            className="rounded-full bg-terracotta px-5 py-2.5 text-center text-sm font-medium text-cream transition hover:bg-terracotta-light"
            snapPayload={checkoutPayload}
          >
            Checkout on Instagram
          </InstagramLeadLink>
          <button
            type="button"
            className="rounded-full border border-bronze/25 px-5 py-2.5 text-sm font-medium text-bronze transition hover:border-terracotta/40 hover:text-terracotta"
            onClick={() => {
              trackSnap("PURCHASE", {
                ...snapItemPayload(itemIds, totalItems),
                transaction_id: createTransactionId(),
                price: totalPrice,
              });
              clearCart();
            }}
          >
            Complete purchase (demo)
          </button>
        </div>
      </div>
    </div>
  );
}
