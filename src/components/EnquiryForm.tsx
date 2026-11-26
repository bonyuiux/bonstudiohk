"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { whatsappUrl } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";

/** Name, phone, email, message → opens WhatsApp with the message ready, then shows /thankyou. */
export default function EnquiryForm() {
  const router = useRouter();
  const [error, setError] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = (k: string) => String(f.get(k) ?? "").trim();
    if (!v("name")) {
      setError("Please enter your name.");
      return;
    }
    setError("");
    const text = [`Hi Bon! I’m ${v("name")}.\n`, v("phone") && `Phone: ${v("phone")}`, v("email") && `Email: ${v("email")}`, v("message") && `\n${v("message")}`]
      .filter(Boolean)
      .join("\n");
    const url = whatsappUrl(text);
    track("enquiry_submit", { link_location: "contact_form" });
    // (a "noopener" feature string would make window.open return null, so detach the opener by hand)
    const win = window.open(url, "_blank");
    if (win) {
      win.opener = null;
      router.push("/thankyou");
    } else window.location.href = url;
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <label>
        <span className="t-small muted">Name</span>
        <input name="name" autoComplete="name" placeholder="Your name" />
      </label>
      <label>
        <span className="t-small muted">Phone number</span>
        <input name="phone" type="tel" autoComplete="tel" placeholder="+852 1234 5678" />
      </label>
      <label>
        <span className="t-small muted">Email</span>
        <input name="email" type="email" autoComplete="email" placeholder="example@email.com" />
      </label>
      <label>
        <span className="t-small muted">Message</span>
        <textarea name="message" placeholder="Tell me a little about your shoot." />
      </label>
      {error && (
        <p role="alert" className="t-small" style={{ color: "var(--brown)" }}>
          {error}
        </p>
      )}
      <div>
        <button type="submit" className="btn">
          Send via WhatsApp
        </button>
      </div>
    </form>
  );
}
