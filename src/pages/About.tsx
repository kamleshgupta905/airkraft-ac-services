import { CTA } from "../components/CTA";
import { IconShield } from "../components/Icons";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { IMAGES, SITE, TEAM } from "../data";

export function About() {
  return (
    <>
      <PageHero
        kicker="About"
        title="A workshop that learned to show up on time."
        lede="Airkraft started in 2014 as two technicians with a van and a rule: do not invent a dead compressor to close a sale. That rule paid better than the sale."
        image={IMAGES.training}
        imageAlt="Hands-on AC repair training and bench work in New Delhi"
      />

      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 md:grid-cols-12 md:px-8">
          <div className="md:col-span-5">
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sage">The short version</p>
              <h2 className="font-display mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                We still think like the person on the ladder.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-7 space-y-5 text-[17px] leading-relaxed text-muted">
            <Reveal>
              <p>
                Delhi NCR summers punish machines and people equally. The market responded with visiting
                charges, mystery “gas khatam” quotes, and a new contractor every April. We built Airkraft
                as the opposite of that — a small bench, logged jobs, and technicians who can read an
                inverter error without calling a friend.
              </p>
            </Reveal>
            <Reveal delay={2}>
              <p>
                Today we run a dispatch desk in New Delhi, a parts shelf that actually has R32 gauges,
                and an AMC book for homes and clinics that do not want to re-explain their cassette every
                May. {SITE.jobs} jobs later, the rule is the same: diagnosis first.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <p>
                We are not a pan-India app. We are a NCR trade. If we cannot reach you today, we say so.
                If the machine should be replaced, we say that too — and we will still install the new
                one if you want us to.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-forest py-16 text-cream">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 md:grid-cols-4 md:px-8">
          {[
            [String(SITE.founded), "Year we started"],
            [SITE.jobs, "Documented jobs"],
            [SITE.warranty, "Workmanship cover"],
            [`${SITE.rating} / 5`, "Customer rating"],
          ].map(([n, l]) => (
            <div key={l}>
              <p className="font-display text-3xl font-bold md:text-5xl">{n}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-mist/60">{l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sage">People</p>
            <h2 className="font-display mt-3 text-3xl font-bold md:text-4xl">Who turns up</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((t, i) => (
              <Reveal key={t.name} delay={(Math.min(i, 4) + 1) as 1 | 2 | 3 | 4 | 5}>
                <article className="border border-line bg-cream p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass">{t.years}</p>
                  <h3 className="font-display mt-3 text-xl font-semibold">{t.name}</h3>
                  <p className="mt-1 text-sm text-muted">{t.role}</p>
                  <p className="mt-4 text-sm text-forest">{t.focus}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2 md:px-8">
          <Reveal>
            <div className="img-zoom aspect-[4/3] overflow-hidden">
              <img
                src={IMAGES.pcb}
                alt="Technician repairing an AC PCB on the bench in New Delhi"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sage">Standards</p>
            <h2 className="font-display mt-3 text-3xl font-bold">What we will not do</h2>
            <ul className="mt-6 space-y-4 text-muted">
              <li className="flex gap-3">
                <IconShield className="mt-0.5 shrink-0 text-sage" size={18} />
                Quote gas without a leak test.
              </li>
              <li className="flex gap-3">
                <IconShield className="mt-0.5 shrink-0 text-sage" size={18} />
                Fit an unbranded PCB and disappear.
              </li>
              <li className="flex gap-3">
                <IconShield className="mt-0.5 shrink-0 text-sage" size={18} />
                Tell you a 4-year-old inverter is scrap so we can sell a new one.
              </li>
              <li className="flex gap-3">
                <IconShield className="mt-0.5 shrink-0 text-sage" size={18} />
                Leave without a GST invoice and a WhatsApp log of the work.
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      <CTA title="Want the same technician next summer?" text="Ask about AMC. We keep the machine file." />
    </>
  );
}
