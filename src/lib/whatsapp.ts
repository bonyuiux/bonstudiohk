import { site } from "@/content/site";
import { getAttribution, sourceLabel } from "./attribution";

/** Build a wa.me link with a pre-filled message. Adds the page and campaign source so you know where the enquiry came from. */
export function whatsappUrl(message?: string, opts: { withSource?: boolean } = {}) {
  let text = message ?? "Hi Bon! I’d like to ask about a photoshoot.";
  if (opts.withSource !== false && typeof window !== "undefined") {
    const src = sourceLabel(getAttribution().last);
    const page = window.location.pathname === "/" ? "home" : window.location.pathname;
    text += `\n\n(sent from bonstudiohk.com · ${page}${src ? ` · ${src}` : ""})`;
  }
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
