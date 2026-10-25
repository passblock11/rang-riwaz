import Image from "next/image";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-y border-gold-soft/40 bg-cream-deep/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-gold-soft/40">
            <Image
              src="/images/brand-festive-decor.jpg"
              alt="Festive handmade decor — aesthetic Diwali diyas and door torans by Rang Riwaz"
              width={984}
              height={1024}
              className="aspect-[4/5] w-full object-cover object-top"
            />
          </div>

          <div>
            <p className="text-xs font-medium tracking-[0.35em] text-terracotta uppercase">Our story</p>
            <h2 className="mt-3 font-display text-3xl text-bronze sm:text-4xl">
              Festive handmade décor
            </h2>
            <p className="mt-2 font-display text-lg italic text-terracotta/90">
              Aesthetic Diwali diyas &amp; door torans
            </p>
            <p className="mt-6 leading-relaxed text-bronze/75">
              Rang Riwaz began with a simple wish: to bring the colours and rituals of Indian
              festivals into homes in a way that feels fresh, refined, and deeply personal. Every
              piece is shaped by hand — from layered lotus petals and pearl-trimmed tea lights to
              vibrant torans that welcome guests at your door.
            </p>
            <p className="mt-4 leading-relaxed text-bronze/75">
              We work in small batches so each diya and décor accent carries the care of true
              craftsmanship. Handcrafted with love, made to brighten your celebrations — whether you
              are dressing your mandir, styling a festive table, or gifting someone you love.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-bronze/80">
              {[
                "Diyas, torans, and coordinated festive sets",
                "Custom colours and quantities for events",
                "Proudly made in India",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
