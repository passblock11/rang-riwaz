import type { Metadata } from "next";
import { Cormorant_Garamond, Lato, Playfair_Display } from "next/font/google";
import { CartMain } from "@/components/CartMain";
import { CartProvider } from "@/components/CartProvider";
import { CheckoutBar } from "@/components/CheckoutBar";
import { Footer } from "@/components/Footer";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { GoogleTagManager, GoogleTagManagerNoScript } from "@/components/GoogleTagManager";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { SnapPageViewTracker } from "@/components/SnapPageViewTracker";
import { SnapPixel } from "@/components/SnapPixel";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const ogImage = {
  url: "/og-image.jpg",
  width: 749,
  height: 630,
  alt: "Rang Riwaz — handcrafted lotus diyas and festive home décor",
  type: "image/jpeg",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "shopping",
  keywords: siteConfig.keywords,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.shortDescription,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.shortDescription,
    images: [ogImage.url],
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "512x512" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  other: {
    "instagram:site": siteConfig.instagramHandle,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      className={`${lato.variable} ${cormorant.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-foreground">
        <GoogleTagManager />
        <GoogleTagManagerNoScript />
        <GoogleAnalytics />
        <SnapPixel />
        <SnapPageViewTracker />
        <JsonLd />
        <CartProvider>
          <Header />
          <CartMain>{children}</CartMain>
          <Footer />
          <CheckoutBar />
        </CartProvider>
      </body>
    </html>
  );
}
