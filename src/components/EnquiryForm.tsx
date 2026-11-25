"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { whatsappUrl } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";

/**
 * The original "Contact Us" form (Name, Phone number, Email, Message → Submit).
 * Instead of emailing, it writes a WhatsApp message from the answers, opens WhatsApp and shows /thankyou.
 */
export default function EnquiryForm() {
  const router = useRouter();
  const [error, setError] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = (k: string) => String(f.get(k) ?? "").trim();
    if (!v("name")) {
      setError("Please add your name.");
      return;
    }
    setError("");
    const text = [`Hi Bon Studio! I'm ${v("name")}.`, v("phone") && `Phone: ${v("phone")}`, v("email") && `Email: ${v("email")}`, v("message") && `\n${v("message")}`]
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
        <span className="t-14">Name</span>
        <input name="name" autoComplete="name" placeholder="Your Name" />
      </label>
      <label>
        <span className="t-14">Phone number</span>
        <input name="phone" type="tel" autoComplete="tel" placeholder="+852 1234 5678" />
      </label>
      <label>
        <span className="t-14">Email</span>
        <input name="email" type="email" autoComplete="email" placeholder="example@email.com" />
      </label>
      <label>
        <span className="t-14">Message</span>
        <textarea name="message" placeholder="Your message" />
      </label>
      {error && (
        <p role="alert" className="form__error t-14">
          {error}
        </p>
      )}
      <button type="submit" className="btn btn--block">
        Submit
      </button>
    </form>
  );
}
