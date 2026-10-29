import { cookies, headers } from "next/headers";
import { NextResponse } from "next/server";
import { sendSnapConversionEvents, type SnapCapiUserData } from "@/lib/snap-capi.server";
import type { SnapTrackEvent } from "@/lib/snaptr";

const ALLOWED_EVENTS = new Set<SnapTrackEvent>([
  "PAGE_VIEW",
  "VIEW_CONTENT",
  "ADD_CART",
  "START_CHECKOUT",
  "PURCHASE",
  "SIGN_UP",
  "SEARCH",
  "ADD_BILLING",
  "CUSTOM_EVENT_1",
]);

type ClientPayload = {
  event_name?: SnapTrackEvent;
  event_id?: string;
  event_source_url?: string;
  custom_data?: Record<string, unknown>;
};

function clientIp(forwardedFor: string | null): string | undefined {
  if (!forwardedFor) {
    return undefined;
  }
  const first = forwardedFor.split(",")[0]?.trim();
  return first || undefined;
}

async function buildUserData(): Promise<SnapCapiUserData> {
  const headerStore = await headers();
  const cookieStore = await cookies();

  const userAgent = headerStore.get("user-agent") ?? undefined;
  const ip = clientIp(headerStore.get("x-forwarded-for"));

  const scCookie1 =
    cookieStore.get("_scid")?.value ??
    cookieStore.get("_sctr")?.value ??
    cookieStore.get("sc_at")?.value;

  const referer = headerStore.get("referer");
  let scClickId: string | undefined;
  if (referer) {
    try {
      const clickId = new URL(referer).searchParams.get("ScCid");
      if (clickId) {
        scClickId = clickId;
      }
    } catch {
      /* ignore invalid referer */
    }
  }

  return {
    ...(ip ? { client_ip_address: ip } : {}),
    ...(userAgent ? { client_user_agent: userAgent } : {}),
    ...(scCookie1 ? { sc_cookie1: scCookie1 } : {}),
    ...(scClickId ? { sc_click_id: scClickId } : {}),
  };
}

export async function POST(request: Request) {
  let payload: ClientPayload;
  try {
    payload = (await request.json()) as ClientPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { event_name, event_id, event_source_url, custom_data } = payload;

  if (!event_name || !ALLOWED_EVENTS.has(event_name)) {
    return NextResponse.json({ error: "Unsupported event_name" }, { status: 400 });
  }

  if (!event_id || event_id.length > 128) {
    return NextResponse.json({ error: "event_id is required" }, { status: 400 });
  }

  if (!event_source_url || !event_source_url.startsWith("http")) {
    return NextResponse.json({ error: "Valid event_source_url is required" }, { status: 400 });
  }

  try {
    const parsed = new URL(event_source_url);
    const allowedHosts = new Set(["rang-riwaz.vercel.app", "localhost"]);
    if (!allowedHosts.has(parsed.hostname) && !parsed.hostname.endsWith(".vercel.app")) {
      return NextResponse.json({ error: "event_source_url not allowed" }, { status: 403 });
    }
  } catch {
    return NextResponse.json({ error: "Invalid event_source_url" }, { status: 400 });
  }

  const user_data = await buildUserData();

  if (!user_data.client_user_agent) {
    return NextResponse.json({ error: "Missing client user agent" }, { status: 400 });
  }

  const result = await sendSnapConversionEvents([
    {
      event_name,
      event_id,
      event_source_url,
      custom_data,
      user_data,
    },
  ]);

  if (!result.ok) {
    const status = result.status && result.status >= 400 ? result.status : 502;
    return NextResponse.json(
      { error: result.reason, details: result.body },
      { status: result.reason.includes("not configured") ? 503 : status },
    );
  }

  return NextResponse.json({ ok: true, snap: result.body });
}
