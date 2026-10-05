import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function I({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    />
  );
}

export function IconSnowflake(p: IconProps) {
  return (
    <I {...p}>
      <path d="M12 2v20M4.9 6.5l14.2 11M4.9 17.5l14.2-11" />
      <path d="M12 6.2l-2-1.6M12 6.2l2-1.6M12 17.8l-2 1.6M12 17.8l2 1.6" />
      <path d="M7.4 8.4l-2.4.4M7.4 8.4l-.4-2.4M16.6 15.6l2.4-.4M16.6 15.6l.4 2.4" />
      <path d="M7.4 15.6l-2.4-.4M7.4 15.6l-.4 2.4M16.6 8.4l2.4.4M16.6 8.4l.4-2.4" />
    </I>
  );
}

export function IconSplit(p: IconProps) {
  return (
    <I {...p}>
      <rect x="3" y="5" width="18" height="8" rx="1.5" />
      <path d="M6 9h.5M8 9h8" />
      <path d="M7 13v1.5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V13" />
      <path d="M9 19h6" />
    </I>
  );
}

export function IconWindow(p: IconProps) {
  return (
    <I {...p}>
      <rect x="4" y="3" width="16" height="18" rx="1.5" />
      <path d="M4 9h16M12 9v12" />
      <path d="M8 6h.5M10.5 6h5" />
    </I>
  );
}

export function IconGas(p: IconProps) {
  return (
    <I {...p}>
      <path d="M8 10a4 4 0 1 1 8 0c0 3-4 5-4 8" />
      <path d="M10 20h4" />
      <path d="M12 3v2M7.5 5.5l1.2 1.2M16.5 5.5l-1.2 1.2" />
    </I>
  );
}

export function IconInstall(p: IconProps) {
  return (
    <I {...p}>
      <path d="M4 20h16" />
      <path d="M8 20V9l4-4 4 4v11" />
      <path d="M10 13h4M10 16h4" />
    </I>
  );
}

export function IconCalendar(p: IconProps) {
  return (
    <I {...p}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
      <path d="M8 14h.5M12 14h.5M16 14h.5M8 17h.5M12 17h.5" />
    </I>
  );
}

export function IconBuilding(p: IconProps) {
  return (
    <I {...p}>
      <path d="M4 20V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v14" />
      <path d="M15 10h3a2 2 0 0 1 2 2v8" />
      <path d="M4 20h16" />
      <path d="M8 8h.5M11.5 8h.5M8 11.5h.5M11.5 11.5h.5M8 15h.5M11.5 15h.5" />
    </I>
  );
}

export function IconBolt(p: IconProps) {
  return (
    <I {...p}>
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />
    </I>
  );
}

export function IconShield(p: IconProps) {
  return (
    <I {...p}>
      <path d="M12 3 5 6v6c0 4.5 3.2 7.4 7 8.5 3.8-1.1 7-4 7-8.5V6l-7-3z" />
      <path d="M9 12l2 2 4-4" />
    </I>
  );
}

export function IconClock(p: IconProps) {
  return (
    <I {...p}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 8v4.5l3 2" />
    </I>
  );
}

export function IconFile(p: IconProps) {
  return (
    <I {...p}>
      <path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
      <path d="M14 3v5h5M9 13h6M9 17h4" />
    </I>
  );
}

export function IconWhatsApp(p: IconProps) {
  return (
    <svg
      width={p.size ?? 24}
      height={p.size ?? 24}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...p}
    >
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.5 2 2.02 6.48 2.02 12c0 1.77.46 3.45 1.32 4.95L2 22l5.2-1.32A9.93 9.93 0 0 0 12.04 22c5.52 0 10.01-4.48 10.01-10 0-2.67-1.04-5.17-2.99-7.09zm-7.01 15.24c-1.66 0-3.24-.5-4.53-1.36l-.32-.2-3.09.79.82-3.01-.21-.33a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.42 5.83c0 4.55-3.7 8.48-8.9 8.48zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.8-.79.97-.15.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29z" />
    </svg>
  );
}

export function IconPhone(p: IconProps) {
  return (
    <I {...p}>
      <path d="M7 3h3l1.5 4-2 1.5a12 12 0 0 0 6 6L17 12.5l4 1.5v3c0 1.2-1 2.5-2.3 2.8C10.2 21.5 2.5 13.8 3.2 5.3 3.5 4 4.8 3 6 3h1z" />
    </I>
  );
}

export function IconPin(p: IconProps) {
  return (
    <I {...p}>
      <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.2" />
    </I>
  );
}

export function IconArrow(p: IconProps) {
  return (
    <I {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </I>
  );
}

export function IconCheck(p: IconProps) {
  return (
    <I {...p}>
      <path d="M5 12.5 9.5 17 19 7" />
    </I>
  );
}

export function IconStar(p: IconProps) {
  return (
    <svg
      width={p.size ?? 16}
      height={p.size ?? 16}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...p}
    >
      <path d="M12 2.6 14.7 9h6.6l-5.3 4 2 6.5L12 15.8 5.9 19.5l2-6.5L2.7 9h6.6L12 2.6z" />
    </svg>
  );
}

export function IconMenu(p: IconProps) {
  return (
    <I {...p}>
      <path d="M4 7h16M4 12h16M4 17h10" />
    </I>
  );
}

export function IconClose(p: IconProps) {
  return (
    <I {...p}>
      <path d="M6 6l12 12M18 6 6 18" />
    </I>
  );
}

export function IconWrench(p: IconProps) {
  return (
    <I {...p}>
      <path d="M14.5 6.5a4 4 0 0 0-5.6 5.6L3 18v3h3l5.9-5.9a4 4 0 0 0 5.6-5.6L15 12l-3-3 2.5-2.5z" />
    </I>
  );
}

export function IconFan(p: IconProps) {
  return (
    <I {...p}>
      <circle cx="12" cy="12" r="2" />
      <path d="M12 10c2-4 6-5 8-3-1 3-4 5-8 5" />
      <path d="M13.7 13c2 4 .8 8-2 9-2-3-1.5-6.5 2-9z" />
      <path d="M10.3 13C6 14 3 11.5 3 8c4 0 6.5 2 7.3 5z" />
    </I>
  );
}

export function IconMail(p: IconProps) {
  return (
    <I {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </I>
  );
}

export const SERVICE_ICONS = [
  IconSplit,
  IconWindow,
  IconGas,
  IconInstall,
  IconCalendar,
  IconBuilding,
] as const;

export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <circle cx="20" cy="20" r="19" fill="#14352c" />
      <circle cx="20" cy="20" r="16.2" fill="none" stroke="#c9a36a" strokeWidth="1" />
      <path
        d="M20 8.5 10.5 28h3.6l1.7-3.5h8.4L25.9 28h3.6L20 8.5zm0 6.4 2.6 5.4h-5.2L20 14.9z"
        fill="#c9a36a"
      />
    </svg>
  );
}
