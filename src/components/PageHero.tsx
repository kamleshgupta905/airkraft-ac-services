import { Reveal } from "./Reveal";

export function PageHero({
  kicker,
  title,
  lede,
  image,
  imageAlt,
}: {
  kicker: string;
  title: string;
  lede: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative overflow-hidden bg-forest pt-28 pb-16 text-cream md:pt-36 md:pb-24">
      <div className="grain absolute inset-0" />
      <div className="relative mx-auto grid max-w-7xl items-end gap-10 px-5 md:grid-cols-12 md:px-8">
        <div className="md:col-span-7">
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-6 text-[11px] uppercase tracking-[0.22em] text-mist/60">
              <ol className="flex items-center gap-2">
                <li>
                  <a href="#/" className="hover:text-cream">
                    Home
                  </a>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-brass">{kicker}</li>
              </ol>
            </nav>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brass">{kicker}</p>
            <h1 className="font-display mt-4 max-w-xl text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-mist/85 md:text-lg">{lede}</p>
          </Reveal>
        </div>
        <div className="md:col-span-5">
          <Reveal delay={2}>
            <div className="img-zoom aspect-[4/3] overflow-hidden rounded-sm">
              <img src={image} alt={imageAlt} className="h-full w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
