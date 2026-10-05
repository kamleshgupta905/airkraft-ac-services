import { BrandMarquee } from "../components/BrandMarquee";
import { CTA } from "../components/CTA";
import { FAQ } from "../components/FAQ";
import {
  IconArrow,
  IconCheck,
  IconClock,
  IconFile,
  IconShield,
  IconStar,
  IconWhatsApp,
  SERVICE_ICONS,
} from "../components/Icons";
import { Reveal } from "../components/Reveal";
import {
  DEFAULT_WA,
  IMAGES,
  PRICING,
  PROCESS,
  REASONS,
  SERVICES,
  SITE,
  TESTIMONIALS,
  type PageId,
} from "../data";

export function Home({ onNavigate }: { onNavigate: (id: PageId) => void }) {
  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden bg-ink text-cream">
        <img
          src={IMAGES.hero}
          alt="Airkraft technician servicing a split AC indoor unit in a Delhi home"
          className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/25" />
        <div className="grain absolute inset-0" />

        <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-24 pt-32 md:px-8 md:pb-28">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brass">
            Delhi NCR · Since {SITE.founded}
          </p>
          <h1 className="font-display mt-4 max-w-3xl text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl lg:text-[5.4rem]">
            Your AC is not a mystery.
            <span className="mt-2 block text-sand">It is a machine.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-mist/90 md:text-lg">
            Same-day split, window and cassette repair. Diagnosis before the spare. GST invoice.
            90-day warranty. Book on WhatsApp — {SITE.phoneDisplay}.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={DEFAULT_WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-[15px] font-semibold text-white transition hover:brightness-110"
            >
              <IconWhatsApp size={18} /> Book a technician
            </a>
            <button
              onClick={() => onNavigate("services")}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/30 px-7 py-3.5 text-[15px] font-semibold hover:bg-cream/10"
            >
              See services <IconArrow size={18} />
            </button>
          </div>
          <dl className="mt-14 grid max-w-3xl grid-cols-2 gap-6 border-t border-cream/15 pt-8 sm:grid-cols-4">
            {[
              [SITE.jobs, "Jobs done"],
              [SITE.eta, "Typical ETA"],
              [SITE.warranty, "Repair cover"],
              [`${SITE.rating}★`, `${SITE.reviewCount}+ reviews`],
            ].map(([k, v]) => (
              <div key={v}>
                <dt className="text-[11px] uppercase tracking-[0.18em] text-mist/60">{v}</dt>
                <dd className="font-display mt-1 text-2xl font-bold md:text-3xl">{k}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <BrandMarquee />

      <section className="bg-cream py-20 md:py-28" aria-labelledby="services-preview">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sage">What we do</p>
                <h2 id="services-preview" className="font-display mt-3 max-w-lg text-3xl font-bold tracking-tight md:text-5xl">
                  Repair first. Replace only when the machine is actually done.
                </h2>
              </div>
              <button
                onClick={() => onNavigate("services")}
                className="inline-flex items-center gap-2 text-sm font-semibold text-forest"
              >
                Full service list <IconArrow size={16} />
              </button>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => {
              const Icon = SERVICE_ICONS[i];
              return (
                <Reveal key={s.slug} delay={(Math.min(i, 4) + 1) as 1 | 2 | 3 | 4 | 5}>
                  <article className="group h-full border border-line bg-paper p-7 transition hover:border-forest hover:bg-white">
                    <div className="flex items-start justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-forest text-sand">
                        <Icon size={20} />
                      </span>
                      <span className="text-xs font-semibold text-copper">{s.price}</span>
                    </div>
                    <h3 className="font-display mt-6 text-2xl font-semibold">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{s.blurb}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-forest text-cream">
        <div className="mx-auto grid max-w-7xl md:grid-cols-2">
          <div className="relative min-h-[320px] md:min-h-full">
            <img
              src={IMAGES.workshop}
              alt="AC repair bench and indoor units being serviced in a New Delhi workshop"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="px-5 py-16 md:px-14 md:py-24">
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brass">How we work</p>
              <h2 className="font-display mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                Four steps. No theatre.
              </h2>
            </Reveal>
            <ol className="mt-10 space-y-8">
              {PROCESS.map((p, i) => (
                <Reveal key={p.step} delay={(Math.min(i, 4) + 1) as 1 | 2 | 3 | 4 | 5}>
                  <li className="grid grid-cols-[auto_1fr] gap-5">
                    <span className="font-display text-sm font-bold text-brass">{p.step}</span>
                    <div>
                      <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-mist/80">{p.text}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sage">Why Airkraft</p>
            <h2 className="font-display mt-3 max-w-2xl text-3xl font-bold tracking-tight md:text-5xl">
              Built by people who still carry a manifold gauge, not a sales script.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {REASONS.map((r, i) => (
              <Reveal key={r.title} delay={(Math.min(i, 4) + 1) as 1 | 2 | 3 | 4 | 5}>
                <article className="border-t border-line pt-6">
                  <div className="mb-4 text-sage">
                    {i === 0 && <IconCheck size={22} />}
                    {i === 1 && <IconShield size={22} />}
                    {i === 2 && <IconClock size={22} />}
                    {i === 3 && <IconFile size={22} />}
                  </div>
                  <h3 className="font-display text-2xl font-semibold">{r.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{r.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28" aria-labelledby="pricing">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-12 md:px-8">
          <div className="md:col-span-4">
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sage">Starting prices</p>
              <h2 id="pricing" className="font-display mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                Published rates. Final bill after diagnosis.
              </h2>
              <p className="mt-4 text-muted">
                Visiting charge ₹199, waived on same-visit repair. Gas, PCB and coil work quoted after
                test — never from the gate.
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-8">
            <ul>
              {PRICING.map((p) => (
                <li
                  key={p.job}
                  className="flex items-baseline justify-between gap-4 border-b border-line py-4"
                >
                  <div>
                    <p className="font-medium">{p.job}</p>
                    <p className="text-xs text-muted">{p.note}</p>
                  </div>
                  <p className="font-display shrink-0 text-lg font-semibold text-forest">{p.from}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-cream md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brass">Field notes</p>
            <h2 className="font-display mt-3 max-w-xl text-3xl font-bold tracking-tight md:text-5xl">
              What people say after the room actually cools.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={(Math.min(i, 4) + 1) as 1 | 2 | 3 | 4 | 5}>
                <blockquote className="h-full border border-cream/10 bg-pine/40 p-7">
                  <div className="flex gap-1 text-brass">
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <IconStar key={s} size={14} />
                    ))}
                  </div>
                  <p className="mt-5 text-[17px] leading-relaxed text-mist/95">“{t.text}”</p>
                  <footer className="mt-6 flex items-end justify-between gap-4 text-sm">
                    <div>
                      <cite className="not-italic font-semibold text-cream">{t.name}</cite>
                      <p className="text-mist/60">{t.area}</p>
                    </div>
                    <p className="text-xs text-brass">{t.machine}</p>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img
          src={IMAGES.delhi}
          alt="Aerial view of New Delhi rooftops and neighbourhoods we service"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-forest/80" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-6 px-5 py-24 md:flex-row md:items-end md:justify-between md:px-8">
          <div className="text-cream">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brass">Coverage</p>
            <h2 className="font-display mt-3 max-w-lg text-3xl font-bold md:text-5xl">
              Delhi, Noida, Gurugram, Ghaziabad, Faridabad.
            </h2>
            <p className="mt-4 max-w-md text-mist/85">
              Forty-plus neighbourhoods. Same WhatsApp number. Same warranty.
            </p>
          </div>
          <button
            onClick={() => onNavigate("areas")}
            className="inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 font-semibold text-forest"
          >
            See service areas <IconArrow size={16} />
          </button>
        </div>
      </section>

      <FAQ />
      <CTA />
    </>
  );
}
