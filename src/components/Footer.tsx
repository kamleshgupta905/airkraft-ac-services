import { DEFAULT_WA, NAV, SITE, type PageId } from "../data";
import { IconPhone, IconPin, IconWhatsApp, LogoMark } from "./Icons";

export function Footer({ onNavigate }: { onNavigate: (id: PageId) => void }) {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8 md:py-20">
        <div className="md:col-span-5">
          <div className="flex items-center gap-2.5">
            <LogoMark className="h-10 w-10" />
            <div>
              <p className="font-display text-xl font-bold leading-none">Airkraft</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-brass">Cooling · Delhi NCR</p>
            </div>
          </div>
          <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-mist/80">
            Same-day AC repair without the scare-sell. Split, window, cassette and small VRF —
            diagnosed properly, billed on GST, warranted for 90 days.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={DEFAULT_WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white"
            >
              <IconWhatsApp size={16} /> WhatsApp
            </a>
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-4 py-2.5 text-sm font-semibold"
            >
              <IconPhone size={16} /> {SITE.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="md:col-span-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brass">Pages</p>
          <ul className="mt-4 space-y-2.5 text-sm text-mist/80">
            {NAV.map((n) => (
              <li key={n.id}>
                <button onClick={() => onNavigate(n.id)} className="hover:text-cream">
                  {n.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brass">Work</p>
          <ul className="mt-4 space-y-2.5 text-sm text-mist/80">
            <li>Split AC repair</li>
            <li>Window AC service</li>
            <li>Gas filling</li>
            <li>Installation</li>
            <li>AMC plans</li>
            <li>Cassette & VRF</li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brass">Visit / hours</p>
          <address className="mt-4 not-italic text-sm leading-relaxed text-mist/80">
            <span className="inline-flex items-start gap-2">
              <IconPin size={16} className="mt-0.5 shrink-0 text-brass" />
              Mobile workshop across Delhi NCR.
              <br />
              Dispatch: New Delhi
            </span>
            <p className="mt-3">{SITE.hours}</p>
            <p>{SITE.emergency}</p>
          </address>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-mist/50 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} {SITE.legal}. All rights reserved.</p>
          <p>GST invoices · 90-day repair warranty · Serving Delhi NCR since {SITE.founded}</p>
        </div>
      </div>
    </footer>
  );
}
