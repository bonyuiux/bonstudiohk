"use client";

import { whatsappUrl } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";
import { WhatsAppIcon } from "./icons";

type Props = {
  label?: string;
  message?: string;
  service?: string;
  location: string; // where on the page, for analytics
  tone?: "solid" | "light" | "outline";
  size?: "sm" | "md";
  full?: boolean;
};

export default function WhatsAppButton({
  label = "WhatsApp us",
  message,
  service,
  location,
  tone = "solid",
  size = "md",
  full,
}: Props) {
  const tones = {
    solid: "bg-accent text-on-deep hover:bg-deep",
    light: "bg-on-deep text-ink hover:bg-surface",
    outline: "border border-current hover:bg-ink hover:text-on-deep hover:border-ink",
  };
  return (
    <a
      href={whatsappUrl(message, { withSource: false })}
      target="_blank"
      rel="noopener"
      data-tracked="manual"
      onClick={(e) => {
        // add page + campaign source at click time (it is only known in the browser)
        e.currentTarget.href = whatsappUrl(message);
        track("whatsapp_click", { link_location: location, service });
      }}
      className={`t-small inline-flex items-center justify-center gap-2 rounded-pill transition-colors duration-300 ${
        size === "sm" ? "h-9 px-4" : "h-12 px-6"
      } ${tones[tone]} ${full ? "w-full" : ""}`}
    >
      <WhatsAppIcon className={size === "sm" ? "h-4 w-4" : "h-[18px] w-[18px]"} />
      {label}
    </a>
  );
}
