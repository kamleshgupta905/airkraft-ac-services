import { useEffect, useState } from "react";
import { DEFAULT_WA, NAV, SITE, type PageId } from "../data";
import { IconClose, IconMenu, IconPhone, IconWhatsApp, LogoMark } from "./Icons";
import { cn } from "../utils/cn";

export function Header({
  page,
  onNavigate,
}: {
  page: PageId;
  onNavigate: (id: PageId) => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [page]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const darkHero = page === "home" && !scrolled && !open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open || page !== "home"
          ? "bg-cream/90 shadow-[0_1px_0_#d7cfc2] backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <button
          onClick={() => onNavigate("home")}
          className="flex items-center gap-2.5"
          aria-label="Airkraft home"
        >
          <LogoMark className="h-9 w-9" />
          <span className="leading-none">
            <span
              className={cn(
                "font-display block text-[17px] font-extrabold tracking-tight",
                darkHero ? "text-cream" : "text-ink"
              )}
            >
              Airkraft
            </span>
            <span
              className={cn(
                "block text-[10px] font-medium uppercase tracking-[0.22em]",
                darkHero ? "text-sand/80" : "text-sage"
              )}
            >
              Cooling
            </span>
          </span>
        </button>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              aria-current={page === item.id ? "page" : undefined}
              className={cn(
                "nav-link text-[13px] font-medium tracking-wide",
                darkHero ? "text-cream/90" : "text-ink/80",
                page === item.id && "is-active"
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <a
            href={`tel:${SITE.phone}`}
            className={cn(
              "hidden items-center gap-2 text-sm font-medium md:flex",
              darkHero ? "text-cream" : "text-forest"
            )}
          >
            <IconPhone size={16} />
            <span className="tabular-nums">{SITE.phoneDisplay}</span>
          </a>
          <a
            href={DEFAULT_WA}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-forest px-4 py-2.5 text-[13px] font-semibold text-cream transition hover:bg-pine sm:inline-flex"
          >
            <IconWhatsApp size={16} />
            WhatsApp
          </a>
          <button
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-full border lg:hidden",
              darkHero ? "border-cream/30 text-cream" : "border-line text-ink"
            )}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-x-0 top-[72px] bottom-0 bg-cream transition-all duration-500 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        <nav className="flex flex-col gap-1 px-6 py-8" aria-label="Mobile">
          {NAV.map((item, i) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="flex items-baseline justify-between border-b border-line py-4 text-left"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <span className="font-display text-3xl font-semibold text-ink">{item.label}</span>
              <span className="text-xs uppercase tracking-widest text-moss">0{i + 1}</span>
            </button>
          ))}
          <div className="mt-8 flex flex-col gap-3">
            <a
              href={DEFAULT_WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3.5 font-semibold text-white"
            >
              <IconWhatsApp size={18} /> Book on WhatsApp
            </a>
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-forest px-5 py-3.5 font-semibold text-forest"
            >
              <IconPhone size={18} /> Call {SITE.phoneDisplay}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
