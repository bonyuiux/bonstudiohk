"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { whatsappUrl } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";
import { WhatsAppIcon } from "./icons";

/** Round WhatsApp button that appears after the visitor scrolls a little. Phones and tablets only. */
export default function FloatingWhatsApp() {
  const [show, setShow] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const on = () => setShow(window.scrollY > 500);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  if (pathname === "/contact") return null;
  return (
    <a
      href={whatsappUrl(undefined, { withSource: false })}
      target="_blank"
      rel="noopener"
      aria-label="Chat with Bon Studio on WhatsApp"
      data-tracked="manual"
      onClick={(e) => {
        e.currentTarget.href = whatsappUrl();
        track("whatsapp_click", { link_location: "floating_button" });
      }}
      className={`fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg shadow-black/15 transition-all duration-500 ease-soft lg:hidden ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
