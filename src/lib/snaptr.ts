/** Snapchat Snap Pixel ID (Event Source Setup). */
export const SNAP_PIXEL_ID =
  process.env.NEXT_PUBLIC_SNAP_PIXEL_ID ?? "a76313d4-b3f8-4bce-aa9a-73068f80dd03";

declare global {
  interface Window {
    snaptr?: SnaptrFn;
  }
}

type SnaptrFn = {
  (command: "init", pixelId: string, userData?: SnapInitUserData): void;
  (command: "track", event: SnapTrackEvent, data?: Record<string, unknown>): void;
  handleRequest?: (...args: unknown[]) => void;
  queue?: unknown[];
};

/** Optional — only pass when you know the visitor's email (Snap hashes it). Never use a fixed admin email. */
export type SnapInitUserData = {
  user_email?: string;
  user_phone_number?: string;
};

export type SnapTrackEvent =
  | "PAGE_VIEW"
  | "VIEW_CONTENT"
  | "ADD_CART"
  | "START_CHECKOUT"
  | "PURCHASE"
  | "SIGN_UP"
  | "SEARCH"
  | "ADD_BILLING"
  | "CUSTOM_EVENT_1";

function createEventId(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
}

function sendConversionsApiEvent(
  event: SnapTrackEvent,
  eventId: string,
  customData?: Record<string, unknown>,
) {
  if (typeof window === "undefined") {
    return;
  }

  void fetch("/api/snap/events", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      event_name: event,
      event_id: eventId,
      event_source_url: window.location.href,
      custom_data: customData ?? {},
    }),
    keepalive: true,
  }).catch(() => {
    /* non-blocking */
  });
}

/**
 * Dual delivery: Snap Pixel (browser) + Conversions API (server).
 * Uses the same event_id for deduplication when both are received.
 */
export function trackSnap(event: SnapTrackEvent, data?: Record<string, unknown>) {
  const eventId = createEventId();
  const pixelPayload = { ...data, event_id: eventId };

  if (typeof window !== "undefined" && typeof window.snaptr === "function") {
    window.snaptr("track", event, pixelPayload);
  }

  sendConversionsApiEvent(event, eventId, data);
}
