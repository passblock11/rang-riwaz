import "server-only";
import { createHash } from "node:crypto";
import { SNAP_PIXEL_ID } from "@/lib/snaptr";
import type { SnapTrackEvent } from "@/lib/snaptr";

const CAPI_BASE = "https://tr.snapchat.com/v3";

export type SnapCapiUserData = {
  client_ip_address?: string;
  client_user_agent?: string;
  sc_cookie1?: string;
  sc_click_id?: string;
  em?: string[];
  ph?: string[];
};

export type SnapCapiEventInput = {
  event_name: SnapTrackEvent;
  event_id: string;
  event_source_url: string;
  custom_data?: Record<string, unknown>;
  user_data?: SnapCapiUserData;
};

export type SnapCapiSendResult =
  | { ok: true; status: number; body: unknown }
  | { ok: false; reason: string; status?: number; body?: unknown };

/** SHA-256 hex digest (Snap expects hashed PII in `em` / `ph` arrays). */
export function sha256Normalize(value: string): string {
  const normalized = value.trim().toLowerCase();
  return createHash("sha256").update(normalized, "utf8").digest("hex");
}

function getAccessToken(): string | undefined {
  return process.env.SNAP_CAPI_ACCESS_TOKEN?.trim();
}

export async function sendSnapConversionEvents(
  events: SnapCapiEventInput[],
): Promise<SnapCapiSendResult> {
  const accessToken = getAccessToken();
  if (!accessToken) {
    return { ok: false, reason: "SNAP_CAPI_ACCESS_TOKEN is not configured" };
  }

  if (events.length === 0) {
    return { ok: false, reason: "No events to send" };
  }

  const pixelId = process.env.SNAP_PIXEL_ID ?? SNAP_PIXEL_ID;
  const url = `${CAPI_BASE}/${pixelId}/events?access_token=${encodeURIComponent(accessToken)}`;

  const data = events.map((event) => ({
    event_name: event.event_name,
    event_time: Math.floor(Date.now() / 1000),
    event_id: event.event_id,
    action_source: "WEB" as const,
    event_source_url: event.event_source_url,
    user_data: event.user_data ?? {},
    custom_data: event.custom_data ?? {},
  }));

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data }),
    cache: "no-store",
  });

  let body: unknown = null;
  try {
    body = await response.json();
  } catch {
    body = null;
  }

  if (!response.ok) {
    return {
      ok: false,
      reason: "Snap CAPI request failed",
      status: response.status,
      body,
    };
  }

  return { ok: true, status: response.status, body };
}
