import { BRANDS } from "../data";

export function BrandMarquee() {
  const loop = [...BRANDS, ...BRANDS];
  return (
    <section className="border-y border-line bg-cream py-8" aria-label="Brands we service">
      <p className="mb-5 text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-sage">
        Every major brand. No orphan machines.
      </p>
      <div className="overflow-hidden">
        <div className="marquee-track flex w-max gap-12 pr-12">
          {loop.map((b, i) => (
            <span
              key={i}
              className="font-display text-xl font-semibold tracking-tight text-forest/70 md:text-2xl"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
