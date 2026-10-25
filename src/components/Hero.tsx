import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden pt-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-gold-soft/30 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-blush/20 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-8 lg:grid-cols-2 lg:items-center lg:gap-6 lg:px-8 lg:pb-24 lg:pt-12">
        <div className="order-2 lg:order-1">
          <p className="mb-4 text-xs font-medium tracking-[0.35em] text-terracotta uppercase">
            Festive home décor
          </p>
          <h1 className="font-display text-4xl leading-[1.15] font-medium text-bronze sm:text-5xl lg:text-[3.25rem]">
            Make every celebration{" "}
            <span className="italic text-terracotta">unforgettable</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-bronze/75 sm:text-lg">
            Lotus diyas, pearl-trimmed tea lights, and artisan pieces that bring the warmth of
            Diwali into your home — each one{" "}
            <span className="font-display italic text-bronze">handcrafted with love</span>.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="#collections"
              className="rounded-full bg-terracotta px-8 py-3.5 text-sm font-medium text-cream shadow-md shadow-terracotta/20 transition hover:bg-terracotta-light"
            >
              View collections
            </Link>
            <Link
              href="#contact"
              className="rounded-full border border-bronze/20 px-8 py-3.5 text-sm font-medium text-bronze transition hover:border-terracotta/40 hover:text-terracotta"
            >
              Custom orders
            </Link>
          </div>
          <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-gold-soft/60 pt-8">
            {[
              { label: "Made by hand", value: "100%" },
              { label: "Festive focus", value: "Diwali & more" },
              { label: "Ships", value: "Across India" },
            ].map((item) => (
              <div key={item.label}>
                <dt className="text-[10px] tracking-widest text-bronze/50 uppercase">{item.label}</dt>
                <dd className="mt-1 font-serif text-lg text-bronze">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative mx-auto max-w-lg">
            <div className="absolute -inset-3 rounded-[2rem] border border-gold/25" aria-hidden />
            <div className="relative overflow-hidden rounded-[1.75rem] shadow-2xl shadow-bronze/15">
              <Image
                src="/images/hero-arch-handcrafted.png"
                alt="Handcrafted lotus diyas displayed in an arched alcove"
                width={800}
                height={1000}
                className="aspect-[4/5] w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
