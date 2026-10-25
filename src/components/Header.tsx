"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const INSTAGRAM_URL = "https://www.instagram.com/rang.riwaz.in";

const navLinks = [
  { href: "#collections", label: "Collections" },
  { href: "#about", label: "Our Story" },
  { href: "#craft", label: "Craft" },
  { href: "#contact", label: "Connect" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-gold-soft/40 bg-cream/90 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setMenuOpen(false)}>
          <Image
            src="/images/logo.png"
            alt="Rang Riwaz"
            width={140}
            height={48}
            className="h-10 w-auto object-contain transition-opacity group-hover:opacity-90 sm:h-12"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-sm font-medium tracking-wide text-bronze/80 transition-colors hover:text-terracotta"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-terracotta/30 bg-terracotta px-5 py-2.5 text-sm font-medium text-cream shadow-sm transition hover:bg-terracotta-light"
          >
            Instagram
          </a>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-bronze/15 md:hidden"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-5 bg-bronze transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span className={`block h-0.5 w-5 bg-bronze transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
            <span
              className={`block h-0.5 w-5 bg-bronze transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-gold-soft/30 bg-cream/98 px-5 py-8 md:hidden">
          <nav className="flex flex-col gap-6" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-serif text-2xl text-bronze"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex justify-center rounded-full bg-terracotta px-6 py-3 text-center text-sm font-medium text-cream"
              onClick={() => setMenuOpen(false)}
            >
              Instagram
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
