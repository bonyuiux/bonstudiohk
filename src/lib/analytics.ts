// One function for every marketing event. It sends the event to every tag that is
// switched on (GTM dataLayer, GA4, Google Ads, Meta Pixel, TikTok Pixel).
// Use it from client components: track("whatsapp_click", { service: "wedding" }).
import { marketing } from "./marketing-config";
import { getAttribution, sourceLabel } from "./attribution";

type Params = Record<string, string | number | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    ttq?: { track: (event: string, params?: object) => void; page: () => void };
  }
}

export type EventName =
  | "whatsapp_click" // tapped any WhatsApp link
  | "enquiry_submit" // sent the enquiry form (opens WhatsApp)
  | "email_click"
  | "instagram_click"
  | "phone_click"
  | "cta_click" // a "Get in touch" style button that leads to /contact
  | "gallery_view"; // scrolled a portfolio gallery into view

/** Events that count as a lead (conversion) in ad platforms. */
const LEAD_EVENTS: EventName[] = ["whatsapp_click", "enquiry_submit", "phone_click", "email_click"];

export function track(event: EventName, params: Params = {}) {
  if (typeof window === "undefined") return;
  const source = sourceLabel(getAttribution().last) ?? undefined;
  const payload = { page_path: window.location.pathname, lead_source: source, ...params };

  // GTM / any tag manager
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...payload });

  const isLead = LEAD_EVENTS.includes(event);

  // GA4 — custom event, plus the recommended "generate_lead" for leads
  if (window.gtag && marketing.ga4Id) {
    window.gtag("event", event, payload);
    if (isLead) window.gtag("event", "generate_lead", { ...payload, method: event.replace("_click", "").replace("_submit", "") });
  }
  // Google Ads conversion
  if (isLead && window.gtag && marketing.googleAdsId && marketing.googleAdsLeadLabel) {
    window.gtag("event", "conversion", { send_to: `${marketing.googleAdsId}/${marketing.googleAdsLeadLabel}` });
  }
  // Meta Pixel — Contact for clicks, Lead for the form
  if (window.fbq && isLead) {
    window.fbq("track", event === "enquiry_submit" ? "Lead" : "Contact", { content_category: params.service });
  }
  // TikTok Pixel
  if (window.ttq && isLead) {
    window.ttq.track(event === "enquiry_submit" ? "SubmitForm" : "Contact", { content_category: params.service });
  }
}
