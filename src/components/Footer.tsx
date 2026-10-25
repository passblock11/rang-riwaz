import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-gold-soft/50 bg-cream-deep">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Image
              src="/images/logo.png"
              alt="Rang Riwaz — Where tradition meets creativity"
              width={280}
              height={120}
              className="mb-6 h-auto w-52 max-w-full object-contain"
            />
            <p className="max-w-sm text-sm leading-relaxed text-bronze/75">
              Handcrafted festive décor, diyas, and thoughtful details for homes that glow with
              warmth — made locally, made with love.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold text-bronze">Explore</h3>
            <ul className="space-y-2 text-sm text-bronze/75">
              <li>
                <Link href="#collections" className="hover:text-terracotta">Collections</Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-terracotta">Our Story</Link>
              </li>
              <li>
                <Link href="#craft" className="hover:text-terracotta">The Craft</Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-terracotta">Connect</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold text-bronze">Follow</h3>
            <p className="text-sm text-bronze/75">
              <a
                href="https://www.instagram.com/rang.riwaz.in"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-terracotta hover:underline"
              >
                @rang.riwaz.in
              </a>
            </p>
            <p className="mt-4 text-xs tracking-widest text-bronze/50 uppercase">
              Handcrafted with love
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-gold-soft/40 pt-8 text-center text-xs text-bronze/50 sm:flex-row sm:text-left">
          <p>© 2026 Rang Riwaz. All rights reserved.</p>
          <p className="tracking-[0.2em] uppercase">Where tradition meets creativity</p>
        </div>
      </div>
    </footer>
  );
}
