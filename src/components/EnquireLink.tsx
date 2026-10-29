"use client";

import { trackSnap } from "@/lib/snaptr";

type Props = {
  productName: string;
};

export function EnquireLink({ productName }: Props) {
  return (
    <a
      href="#contact"
      className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-terracotta transition group-hover:gap-3"
      onClick={() => {
        trackSnap("VIEW_CONTENT", {
          item_ids: productName,
          item_category: "festive_decor",
          description: productName,
        });
        trackSnap("START_CHECKOUT", {
          item_ids: productName,
          item_category: "festive_decor",
        });
      }}
    >
      Enquire for price
      <span aria-hidden>→</span>
    </a>
  );
}
