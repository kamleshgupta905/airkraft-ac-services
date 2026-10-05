import { ContactForm } from "../components/ContactForm";
import { FAQ } from "../components/FAQ";
import { IconClock, IconPhone, IconPin, IconWhatsApp } from "../components/Icons";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { DEFAULT_WA, IMAGES, SITE } from "../data";

export function Contact() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="WhatsApp is the front desk."
        lede="Call if it is an emergency. For everything else — a photo, a pin, a slot — use WhatsApp. Humans between 7 AM and 10 PM. Night call-out for dead machines in occupied rooms."
        image={IMAGES.family}
        imageAlt="Family at home — the reason same-day AC repair matters in Delhi NCR"
      />

      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 md:grid-cols-12 md:px-8">
          <div className="md:col-span-5">
            <Reveal>
              <h2 className="font-display text-3xl font-bold">Reach us</h2>
              <ul className="mt-8 space-y-6">
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest text-sand">
                    <IconWhatsApp size={18} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage">WhatsApp</p>
                    <a
                      href={DEFAULT_WA}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-lg font-semibold text-forest"
                    >
                      {SITE.phoneDisplay}
                    </a>
                    <p className="text-sm text-muted">Preferred. Send brand, fault, photo, landmark.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest text-sand">
                    <IconPhone size={18} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage">Call</p>
                    <a href={`tel:${SITE.phone}`} className="mt-1 block text-lg font-semibold text-forest">
                      {SITE.phoneDisplay}
                    </a>
                    <p className="text-sm text-muted">Best for night emergencies and elderly customers.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest text-sand">
                    <IconClock size={18} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage">Hours</p>
                    <p className="mt-1 text-lg font-semibold">{SITE.hours}</p>
                    <p className="text-sm text-muted">{SITE.emergency}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest text-sand">
                    <IconPin size={18} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage">Dispatch</p>
                    <p className="mt-1 text-lg font-semibold">New Delhi · covering all NCR</p>
                    <p className="text-sm text-muted">Mobile workshop. We come to you.</p>
                  </div>
                </li>
              </ul>
            </Reveal>
          </div>

          <div className="md:col-span-7">
            <Reveal delay={2}>
              <div className="border border-line bg-paper p-6 md:p-10">
                <h2 className="font-display text-2xl font-bold">Book a slot</h2>
                <p className="mt-2 mb-8 text-sm text-muted">
                  This form does not sit in a database. It opens WhatsApp with a ready message.
                </p>
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <FAQ />
    </>
  );
}
