"use client";

import { whatsappUrl } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";
import { WhatsAppIcon } from "./icons";

type Props = {
  label?: string;
  message?: string;
  service?: string;
  location: string; // where on the page, for analytics
  tone?: "solid" | "outline" | "line";
  size?: "sm" | "md";
  full?: boolean;
};

/** Opens WhatsApp with a pre-filled message (plus page + campaign source) and records a lead. */
export default function WhatsAppButton({ label = "WhatsApp us", message, service, location, tone = "solid", size = "md", full }: Props) {
  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.href = whatsappUrl(message);
    track("whatsapp_click", { link_location: location, service });
  };
  const common = { href: whatsappUrl(message, { withSource: false }), target: "_blank", rel: "noopener", "data-tracked": "manual", onClick };

  if (tone === "line") {
    return (
      <a {...common} className="t-body group inline-flex items-center gap-4 transition-opacity hover:opacity-70">
        <span aria-hidden className="h-px w-12 bg-current opacity-50 transition-all duration-500 ease-soft group-hover:w-16 group-hover:opacity-100" />
        <span>{label}</span>
        <WhatsAppIcon className="h-4 w-4 opacity-70" />
      </a>
    );
  }
  const tones = {
    solid: "bg-accent text-on-deep hover:bg-deep",
    outline: "border border-current/40 hover:border-current",
  };
  return (
    <a
      {...common}
      className={`t-small inline-flex items-center justify-center gap-2 rounded-pill transition-colors duration-300 ${
        size === "sm" ? "h-10 px-4" : "h-12 px-6"
      } ${tones[tone]} ${full ? "w-full" : ""}`}
    >
      <WhatsAppIcon className={size === "sm" ? "h-4 w-4" : "h-[18px] w-[18px]"} />
      {label}
    </a>
  );
}
