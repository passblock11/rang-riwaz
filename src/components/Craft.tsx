const steps = [
  {
    title: "Design",
    body: "Festive motifs inspired by arches, lotus diyas, door torans, and the warmth of celebration.",
  },
  {
    title: "Handcraft",
    body: "Layered fabrics, careful pearl placement, and finishing by hand — never mass-produced.",
  },
  {
    title: "Illuminate",
    body: "Finished with tea lights that cast a warm, golden glow for pooja and celebrations.",
  },
];

export function Craft() {
  return (
    <section id="craft" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium tracking-[0.35em] text-terracotta uppercase">The craft</p>
            <h2 className="mt-3 font-display text-3xl text-bronze sm:text-4xl">From our hands to your home</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-bronze/70">
            A quiet, intentional process — so what you display feels as special as the festival
            itself.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative rounded-2xl border border-gold-soft/60 bg-cream p-8 pt-10"
            >
              <span
                className="absolute -top-3 left-8 flex h-8 w-8 items-center justify-center rounded-full bg-terracotta font-serif text-sm text-cream"
                aria-hidden
              >
                {index + 1}
              </span>
              <h3 className="font-serif text-xl font-semibold text-bronze">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-bronze/70">{step.body}</p>
            </div>
          ))}
        </div>

        <blockquote className="mt-16 border-l-2 border-terracotta/40 pl-6 sm:pl-8">
          <p className="font-display text-2xl italic text-bronze sm:text-3xl">
            &ldquo;Make them unforgettable.&rdquo;
          </p>
          <footer className="mt-3 text-sm text-bronze/60">— The spirit behind every Rang Riwaz piece</footer>
        </blockquote>
      </div>
    </section>
  );
}
