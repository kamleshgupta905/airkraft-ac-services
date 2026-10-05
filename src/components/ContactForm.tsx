import { useState, type FormEvent } from "react";
import { waLink } from "../data";
import { IconWhatsApp } from "./Icons";

const TYPES = ["Split AC", "Window AC", "Cassette", "VRF / ductable", "Not sure"];
const ISSUES = [
  "Not cooling",
  "Water leaking",
  "Noise / vibration",
  "Need gas filling",
  "Installation / shifting",
  "AMC enquiry",
  "Other",
];

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState("");
  const [type, setType] = useState(TYPES[0]);
  const [issue, setIssue] = useState(ISSUES[0]);
  const [note, setNote] = useState("");

  function submit(e: FormEvent) {
    e.preventDefault();
    const msg = [
      "Hi Airkraft, I want to book an AC technician.",
      `Name: ${name || "—"}`,
      `Phone: ${phone || "—"}`,
      `Area: ${area || "—"}`,
      `Machine: ${type}`,
      `Issue: ${issue}`,
      note ? `Note: ${note}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
  }

  const field =
    "w-full rounded-sm border border-line bg-cream px-4 py-3 text-sm outline-none transition focus:border-forest";

  return (
    <form onSubmit={submit} className="grid gap-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-xs font-semibold uppercase tracking-wider text-sage">
          Name
          <input
            className={`${field} mt-1.5 font-medium text-ink`}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            autoComplete="name"
          />
        </label>
        <label className="block text-xs font-semibold uppercase tracking-wider text-sage">
          Phone
          <input
            className={`${field} mt-1.5 font-medium text-ink`}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="10-digit mobile"
            inputMode="tel"
            autoComplete="tel"
          />
        </label>
      </div>
      <label className="block text-xs font-semibold uppercase tracking-wider text-sage">
        Area / landmark
        <input
          className={`${field} mt-1.5 font-medium text-ink`}
          value={area}
          onChange={(e) => setArea(e.target.value)}
          placeholder="e.g. GK-2, Noida 137, DLF 3"
        />
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-xs font-semibold uppercase tracking-wider text-sage">
          AC type
          <select
            className={`${field} mt-1.5 font-medium text-ink`}
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            {TYPES.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
        <label className="block text-xs font-semibold uppercase tracking-wider text-sage">
          Issue
          <select
            className={`${field} mt-1.5 font-medium text-ink`}
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
          >
            {ISSUES.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="block text-xs font-semibold uppercase tracking-wider text-sage">
        Anything else
        <textarea
          className={`${field} mt-1.5 min-h-[96px] resize-y font-medium text-ink`}
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Brand, tonnage, error code, photo coming on WhatsApp…"
        />
      </label>
      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 font-semibold text-white transition hover:brightness-110"
      >
        <IconWhatsApp size={18} /> Send on WhatsApp
      </button>
      <p className="text-xs text-muted">
        Opens WhatsApp with your details filled in. No account, no waiting on a form backend.
      </p>
    </form>
  );
}
