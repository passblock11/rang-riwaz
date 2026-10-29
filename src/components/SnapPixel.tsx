import Script from "next/script";
import { SNAP_PIXEL_ID } from "@/lib/snaptr";

/**
 * Snap Pixel base code — placed per Snapchat Event Source Setup:
 * header section, loads scevent.min.js and init.
 * PAGE_VIEW is sent via SnapPageViewTracker (pixel + Conversions API, shared event_id).
 */
export function SnapPixel() {
  const pixelId = SNAP_PIXEL_ID;

  return (
    <Script id="snap-pixel" strategy="beforeInteractive">
      {`
(function(e,t,n){if(e.snaptr)return;var a=e.snaptr=function()
{a.handleRequest?a.handleRequest.apply(a,arguments):a.queue.push(arguments)};
a.queue=[];var s='script';r=t.createElement(s);r.async=!0;
r.src=n;var u=t.getElementsByTagName(s)[0];
u.parentNode.insertBefore(r,u);})(window,document,
'https://sc-static.net/scevent.min.js');

snaptr('init', '${pixelId}');
`}
    </Script>
  );
}
