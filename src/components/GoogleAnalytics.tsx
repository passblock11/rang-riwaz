import Script from "next/script";

/** Google Analytics 4 measurement ID (Admin → Data streams → Web). */
export const GA_MEASUREMENT_ID = "G-VCL7S7F8KT";

/**
 * Google tag (gtag.js) for GA4.
 * dataLayer + gtag() are initialized in GoogleTagManager — this loads gtag.js and config only.
 */
export function GoogleAnalytics() {
  return (
    <>
      <Script
        id="google-analytics-gtag"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script id="google-analytics-config" strategy="afterInteractive">
        {`gtag('config', '${GA_MEASUREMENT_ID}');`}
      </Script>
    </>
  );
}
