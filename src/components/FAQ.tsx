import { useState } from "react";
import { FAQS } from "../data";
import { Reveal } from "./Reveal";
import { cn } from "../utils/cn";

export function FAQ({ items = FAQS }: { items?: readonly { q: string; a: string }[] }) {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-paper py-20 md:py-28" aria-labelledby="faq-heading">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-12 md:px-8">
        <div className="md:col-span-4">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sage">FAQ</p>
            <h2 id="faq-heading" className="font-display mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Questions we actually get asked
            </h2>
            <p className="mt-4 text-muted">
              If yours is not here, WhatsApp it. A human answers — not a chatbot with a menu.
            </p>
          </Reveal>
        </div>
        <div className="md:col-span-8">
          {items.map((item, i) => (
            <Reveal key={item.q} delay={i < 5 ? ((i + 1) as 1 | 2 | 3 | 4 | 5) : undefined}>
              <div className="border-b border-line">
                <button
                  className="flex w-full items-start justify-between gap-6 py-5 text-left"
                  onClick={() => setOpen(open === i ? -1 : i)}
                  aria-expanded={open === i}
                >
                  <span className="font-display text-lg font-semibold md:text-xl">{item.q}</span>
                  <span
                    className={cn(
                      "mt-1 text-sage transition-transform duration-300",
                      open === i && "rotate-45"
                    )}
                  >
                    +
                  </span>
                </button>
                <div className={cn("accordion-body", open === i && "open")}>
                  <p className="min-h-0 overflow-hidden pb-5 text-[15px] leading-relaxed text-muted">
                    {item.a}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
