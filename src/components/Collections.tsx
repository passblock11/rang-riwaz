import Image from "next/image";
import { AddToCartButton } from "@/components/AddToCartButton";
import { EnquireLink } from "@/components/EnquireLink";

const products = [
  {
    name: "Pearl Lotus Diya",
    description: "Velvet petals, sage leaves, and a pearl ring around a golden tea-light cup.",
    image: "/images/product-lotus-closeup.png",
  },
  {
    name: "Diwali Glow Set",
    description: "A cluster of matching lotus holders — perfect for entryways and festive tables.",
    image: "/images/product-four-lotus.png",
  },
  {
    name: "Soft Light Trio",
    description: "Layered lotus forms with warm candlelight for calm, intimate spaces.",
    image: "/images/product-lotus-trio-soft.png",
  },
  {
    name: "Signature Pair",
    description: "Two statement lotus diyas styled for gifting and centerpiece displays.",
    image: "/images/product-unforgettable.png",
  },
  {
    name: "Ruby Pearl Trio",
    description: "Rich red petals with pearl tips on silk — a classic puja and table arrangement.",
    image: "/images/product-red-lotus-trio.jpg",
  },
];

export function Collections() {
  return (
    <section id="collections" className="scroll-mt-24 bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium tracking-[0.35em] text-terracotta uppercase">Collections</p>
          <h2 className="mt-3 font-display text-3xl text-bronze sm:text-4xl">
            Light up the little <span className="italic">moments</span>
          </h2>
          <p className="mt-4 text-bronze/70">
            Thoughtfully designed pieces that blend tradition with a modern, clean aesthetic for
            your home.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.name}
              className="group overflow-hidden rounded-2xl bg-cream-deep/60 ring-1 ring-gold-soft/50 transition hover:shadow-xl hover:shadow-bronze/10"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={600}
                  height={750}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-bronze">{product.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-bronze/70">{product.description}</p>
                <EnquireLink productName={product.name} />
                <AddToCartButton productName={product.name} />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 overflow-hidden rounded-3xl bg-maroon">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[320px] lg:min-h-full">
              <Image
                src="/images/hero-diwali-shine.png"
                alt="Lotus diyas on maroon — Make this diwali shine"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center px-8 py-12 text-cream sm:px-12">
              <p className="font-display text-3xl leading-snug sm:text-4xl">
                <span className="font-sans text-lg font-normal tracking-wide not-italic">Make this</span>
                <br />
                <span className="italic">diwali shine</span>
              </p>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/80">
                Bulk gifting, wedding favours, and custom colour palettes available on request.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex w-fit rounded-full border border-gold/50 px-6 py-3 text-sm font-medium text-gold-soft transition hover:bg-gold/10"
              >
                Plan your order
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
