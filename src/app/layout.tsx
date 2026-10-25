import type { Metadata } from "next";
import { Cormorant_Garamond, Lato, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
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

export const metadata: Metadata = {
  title: "Rang Riwaz | Handcrafted Festive Home Décor",
  description:
    "Where tradition meets creativity. Handmade Diwali diyas, door torans, and festive home décor crafted with love for every celebration.",
  keywords: [
    "Rang Riwaz",
    "handcrafted",
    "Diwali decor",
    "diyas",
    "festive home decor",
    "handmade",
  ],
  openGraph: {
    title: "Rang Riwaz",
    description: "Handcrafted festive home décor — where tradition meets creativity.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${lato.variable} ${cormorant.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-foreground">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
