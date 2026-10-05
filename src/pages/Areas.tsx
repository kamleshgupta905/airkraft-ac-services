import { CTA } from "../components/CTA";
import { IconPin } from "../components/Icons";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { AREAS, IMAGES, waLink } from "../data";

export function Areas() {
  return (
    <>
      <PageHero
        kicker="Service areas"
        title="If it is Delhi NCR, we already know the parking."
        lede="Same-day coverage across New Delhi, Noida, Greater Noida, Gurugram, Ghaziabad and Faridabad. If you are on the fringe, we still come — we just tell you the window first."
        image={IMAGES.delhiStreet}
        imageAlt="Street and buildings in New Delhi, part of Airkraft’s AC repair coverage"
      />

      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <h2 className="font-display max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
              AC repair near you — neighbourhood by neighbourhood
            </h2>
            <p className="mt-4 max-w-2xl text-muted">
              Search “AC repair near me” and you get ten numbers. This is the list of places we actually
              reach in 45–90 minutes on a normal day.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {AREAS.map((a, i) => (
              <Reveal key={a.city} delay={(Math.min(i, 4) + 1) as 1 | 2 | 3 | 4 | 5}>
                <article className="h-full border border-line bg-paper p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-2xl font-bold">{a.city}</h3>
                      <p className="mt-1 text-xs uppercase tracking-[0.2em] text-sage">PIN {a.pin}</p>
                    </div>
                    <IconPin className="text-brass" />
                  </div>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {a.places.map((p) => (
                      <li key={p}>
                        <a
                          href={waLink(
                            `Hi Airkraft, I need AC repair in ${p}, ${a.city}. Please share the next slot.`
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block border border-line bg-cream px-3 py-1.5 text-sm transition hover:border-forest hover:text-forest"
                        >
                          {p}
                        </a>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img
          src={IMAGES.apartments}
          alt="Apartment facades with outdoor AC units across NCR"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-ink/75" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 md:px-8">
          <h2 className="font-display max-w-xl text-3xl font-bold text-cream md:text-5xl">
            Societies, builder floors, shops, clinics.
          </h2>
          <p className="mt-4 max-w-lg text-mist/85">
            We carry RWA entry IDs, shoe covers, and the patience required for a Gurugram boom-barrier.
            Night work for restaurants and clinics on request.
          </p>
        </div>
      </section>

      <section className="bg-paper py-20">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <h2 className="font-display text-3xl font-bold">Not on the list?</h2>
          <p className="mt-3 text-muted">
            Sohna, Ballabhgarh, Greater Noida West, Bahadurgarh — we cover many of these with a small
            travel add-on. WhatsApp the pin code before you wait.
          </p>
        </div>
      </section>

      <CTA title="Send your landmark." text="We reply with an honest ETA, not a 20-minute fantasy." />
    </>
  );
}
