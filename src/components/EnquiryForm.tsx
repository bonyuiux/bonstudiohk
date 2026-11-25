"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { enquiryTypes } from "@/content/site";
import { whatsappUrl } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";
import { WhatsAppIcon } from "./icons";

/**
 * Enquiry form that sends to WhatsApp: it writes a tidy message from the answers and
 * opens WhatsApp with it, so every lead lands in one inbox. No server or database needed.
 */
export default function EnquiryForm({ defaultType }: { defaultType?: string }) {
  const router = useRouter();
  const [error, setError] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") ?? "").trim();
    const type = String(f.get("type") ?? "");
    const date = String(f.get("date") ?? "").trim();
    const place = String(f.get("place") ?? "").trim();
    const message = String(f.get("message") ?? "").trim();
    if (!name) {
      setError("Please add your name so I know who I’m talking to.");
      return;
    }
    setError("");
    const lines = [
      `Hi Bon Studio! I'm ${name}.`,
      `I'm interested in: ${type}`,
      date && `Date: ${date}`,
      place && `Place: ${place}`,
      message && `\n${message}`,
    ].filter(Boolean);
    const url = whatsappUrl(lines.join("\n"));
    track("enquiry_submit", { service: type, link_location: "enquiry_form" });
    // (a "noopener" feature string would make window.open return null, so detach the opener by hand)
    const win = window.open(url, "_blank");
    if (win) {
      win.opener = null;
      router.push("/thankyou");
    }
    else window.location.href = url; // pop-up blocked: go straight to WhatsApp
  }

  // Quiet underlined fields: no boxes, the line is the field.
  const field =
    "mt-2 block w-full border-0 border-b border-line bg-transparent px-0 py-3 t-body text-ink placeholder:text-muted/60 transition-colors focus:border-ink focus:outline-none";

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-x-6 gap-y-8 sm:grid-cols-2">
      <label className="t-small text-muted sm:col-span-1">
        Your name
        <input name="name" autoComplete="name" required className={field} placeholder="Chris Wong" />
      </label>
      <label className="t-small text-muted sm:col-span-1">
        Type of shoot
        <select name="type" defaultValue={defaultType ?? enquiryTypes[0]} className={`${field} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 16 16%22><path d=%22M4 6l4 4 4-4%22 fill=%22none%22 stroke=%22%23a39788%22 stroke-width=%221.5%22/></svg>')] bg-[length:16px] bg-[right_0_center] bg-no-repeat pr-8 [&>option]:bg-surface`}>
          {enquiryTypes.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      <label className="t-small text-muted">
        Date <span className="text-muted/70">(if you know it)</span>
        <input name="date" className={field} placeholder="e.g. mid-March, a weekend" />
      </label>
      <label className="t-small text-muted">
        Place <span className="text-muted/70">(optional)</span>
        <input name="place" className={field} placeholder="e.g. The Peak, Lamma Island" />
      </label>
      <label className="t-small text-muted sm:col-span-2">
        Tell me about it
        <textarea name="message" rows={5} className={`${field} resize-y`} placeholder="Who’s in the photos, the feeling you’re after, anything else…" />
      </label>
      {error && (
        <p role="alert" className="t-small text-accent sm:col-span-2">
          {error}
        </p>
      )}
      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="t-small text-muted">This opens WhatsApp with your message ready to send.</p>
        <button type="submit" className="t-small inline-flex h-12 items-center justify-center gap-2 rounded-pill bg-ink px-8 text-paper transition-colors hover:bg-accent">
          <WhatsAppIcon className="h-[18px] w-[18px]" />
          Send on WhatsApp
        </button>
      </div>
    </form>
  );
}
