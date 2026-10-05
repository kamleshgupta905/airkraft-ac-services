import { DEFAULT_WA, SITE } from "../data";
import { IconPhone, IconWhatsApp } from "./Icons";

export function WhatsAppButton() {
  return (
    <>
      <a
        href={DEFAULT_WA}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp for AC repair"
        className="wa-ring fixed right-4 bottom-24 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition hover:scale-105 md:bottom-6 md:right-6"
      >
        <IconWhatsApp size={28} />
      </a>

      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-0 border-t border-line bg-cream/95 backdrop-blur md:hidden">
        <a
          href={`tel:${SITE.phone}`}
          className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-forest"
        >
          <IconPhone size={16} /> Call now
        </a>
        <a
          href={DEFAULT_WA}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-forest py-3.5 text-sm font-semibold text-cream"
        >
          <IconWhatsApp size={16} /> WhatsApp
        </a>
      </div>
    </>
  );
}
