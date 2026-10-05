import { DEFAULT_WA, SITE } from "../data";
import { IconPhone, IconWhatsApp } from "./Icons";
import { Reveal } from "./Reveal";

export function CTA({
  title = "AC down. Heat does not wait.",
  text = "Send a photo of the indoor unit and your area. You get a slot, a name, and a quote before anyone opens a panel.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-forest text-cream">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-16 md:flex-row md:items-center md:px-8 md:py-20">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brass">Same-day slots</p>
          <h2 className="font-display mt-3 max-w-xl text-3xl font-bold tracking-tight md:text-5xl">{title}</h2>
          <p className="mt-4 max-w-lg text-mist/80">{text}</p>
        </Reveal>
        <Reveal delay={2}>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href={DEFAULT_WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 font-semibold text-white transition hover:brightness-110"
            >
              <IconWhatsApp size={18} /> WhatsApp {SITE.phoneDisplay}
            </a>
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/30 px-6 py-3.5 font-semibold transition hover:bg-cream/10"
            >
              <IconPhone size={18} /> Call now
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
