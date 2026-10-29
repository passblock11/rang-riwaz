import { InstagramLeadLink } from "@/components/InstagramLeadLink";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-cream-deep/80 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl rounded-3xl border border-gold-soft/60 bg-cream px-8 py-12 text-center shadow-sm sm:px-14 sm:py-16">
          <p className="text-xs font-medium tracking-[0.35em] text-terracotta uppercase">Connect</p>
          <h2 className="mt-3 font-display text-3xl text-bronze sm:text-4xl">Let&apos;s create something beautiful</h2>
          <p className="mt-4 text-bronze/70">
            DM us on Instagram with your occasion, quantity, and colour preferences — we&apos;ll reply with
            availability and pricing.
          </p>

          <div className="mt-10 flex justify-center">
            <InstagramLeadLink className="inline-flex items-center justify-center rounded-full bg-terracotta px-8 py-3.5 text-sm font-medium text-cream shadow-md shadow-terracotta/20 transition hover:bg-terracotta-light">
              Message @rang.riwaz.in
            </InstagramLeadLink>
          </div>
        </div>
      </div>
    </section>
  );
}
