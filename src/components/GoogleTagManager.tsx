import Script from "next/script";

/** Google Tag Manager container */
export const GTM_ID = "GTM-WSZNFGDZ";

/**
 * GTM loader + dataLayer (matches your Events Manager snippet).
 * dataLayer is initialized before gtm.js loads.
 */
export function GoogleTagManager() {
  return (
    <>
      <Script id="gtm-datalayer" strategy="beforeInteractive">
        {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
`}
      </Script>
      <Script
        id="gtm-js"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
      />
    </>
  );
}

/** Required GTM fallback when JavaScript is disabled */
export function GoogleTagManagerNoScript() {
  return (
    <noscript>
      <iframe
        title="Google Tag Manager"
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height={0}
        width={0}
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}
