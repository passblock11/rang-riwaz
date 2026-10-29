"use client";

import { useEffect, useRef } from "react";
import { trackSnap } from "@/lib/snaptr";

/** Browser pixel + Conversions API PAGE_VIEW (shared event_id via trackSnap). */
export function SnapPageViewTracker() {
  const sent = useRef(false);

  useEffect(() => {
    if (sent.current) {
      return;
    }
    sent.current = true;
    trackSnap("PAGE_VIEW");
  }, []);

  return null;
}
