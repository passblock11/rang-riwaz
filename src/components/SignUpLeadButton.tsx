"use client";

import { trackSnap } from "@/lib/snaptr";

export function SignUpLeadButton() {
  return (
    <button
      type="button"
      className="mt-6 rounded-full border border-gold-soft/80 px-6 py-3 text-sm font-medium text-bronze transition hover:border-terracotta/40 hover:text-terracotta"
      onClick={() => {
        trackSnap("SIGN_UP", {
          item_category: "festive_decor",
          description: "Festival updates interest",
        });
      }}
    >
      Get festival updates
    </button>
  );
}
