import { BrandMarquee } from "../components/BrandMarquee";
import { CTA } from "../components/CTA";
import { FAQ } from "../components/FAQ";
import { IconCheck, SERVICE_ICONS } from "../components/Icons";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { FAQS, IMAGES, PRICING, SERVICES, waLink } from "../data";

const extraFaqs = [
  {
    q: "Will a wet service fix a machine that is not cooling?",
    a: "Sometimes. A clogged filter and a filthy evaporator can look like a gas problem. We always wash and then measure pressures. If cooling is still short, we quote gas or parts — we do not sell a service as a repair.",
  },
  {
    q: "Do you install copper yourself?",
    a: "Yes. Standard 3-metre kit is in the install price. Extra run is billed per metre, flared and vacuumed, never just ‘connected’.",
  },
  {
    q: "Can you service a machine under brand warranty?",
    a: "If it is still in OEM warranty, we will tell you to call the brand for free cover. We step in for out-of-warranty, expired AMC, or when you need someone today.",
  },
];

export function Services() {
  return (
    <>
      <PageHero
        kicker="Services"
        title="Repair, gas, install, AMC — written in prices, not vibes."
        lede="Every job starts with a diagnosis. You approve the quote on WhatsApp. Then we open the unit. That order is not negotiable."
        image={IMAGES.outdoor}
        imageAlt="Technician repairing an outdoor AC compressor unit on a building wall"
      />

      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl space-y-24 px-5 md:px-8">
          {SERVICES.map((s, i) => {
            const Icon = SERVICE_ICONS[i];
            const reverse = i % 2 === 1;
            const img = [IMAGES.techWork, IMAGES.acUnit, IMAGES.tools, IMAGES.living, IMAGES.panel, IMAGES.apartments][i];
            return (
              <article key={s.slug} id={s.slug} className="grid items-center gap-10 md:grid-cols-12">
                <div className={`md:col-span-6 ${reverse ? "md:order-2" : ""}`}>
                  <Reveal>
                    <div className="img-zoom aspect-[4/3] overflow-hidden">
                      <img src={img} alt={`${s.title} — Airkraft Delhi NCR`} className="h-full w-full object-cover" loading="lazy" />
                    </div>
                  </Reveal>
                </div>
                <div className={`md:col-span-6 ${reverse ? "md:order-1" : ""}`}>
                  <Reveal delay={2}>
                    <div className="flex items-center gap-3 text-sage">
                      <Icon size={22} />
                      <span className="text-xs font-semibold uppercase tracking-[0.22em]">{s.price}</span>
                    </div>
                    <h2 className="font-display mt-4 text-3xl font-bold tracking-tight md:text-4xl">{s.title}</h2>
                    <p className="mt-4 leading-relaxed text-muted">{s.details}</p>
                    <ul className="mt-6 space-y-2">
                      {s.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm">
                          <IconCheck size={16} className="text-sage" /> {item}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={waLink(`Hi Airkraft, I need ${s.title} in Delhi NCR. Please share a slot.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 inline-flex rounded-full bg-forest px-5 py-3 text-sm font-semibold text-cream hover:bg-pine"
                    >
                      WhatsApp this job
                    </a>
                  </Reveal>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="font-display text-3xl font-bold">Rate card</h2>
          <p className="mt-2 max-w-xl text-muted">
            Starting prices for Delhi NCR. PCB, compressor and coil work is quoted after test.
          </p>
          <div className="mt-10 overflow-hidden border border-line">
            <table className="w-full text-left text-sm">
              <thead className="bg-forest text-cream">
                <tr>
                  <th className="px-5 py-3 font-medium">Job</th>
                  <th className="px-5 py-3 font-medium">From</th>
                  <th className="hidden px-5 py-3 font-medium sm:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody>
                {PRICING.map((p) => (
                  <tr key={p.job} className="border-t border-line">
                    <td className="px-5 py-3.5 font-medium">{p.job}</td>
                    <td className="px-5 py-3.5 text-forest">{p.from}</td>
                    <td className="hidden px-5 py-3.5 text-muted sm:table-cell">{p.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <BrandMarquee />
      <FAQ items={[...FAQS, ...extraFaqs]} />
      <CTA title="Tell us the brand and the fault." text="We reply with a slot, not a brochure." />
    </>
  );
}
