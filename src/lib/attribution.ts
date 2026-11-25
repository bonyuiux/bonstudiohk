// Remembers where a visitor came from (UTM tags, ad click IDs, referrer) so a WhatsApp
// enquiry can say which campaign brought them. Stored only in the visitor's browser.

const KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid", "fbclid", "ttclid"] as const;
const FIRST = "bs_first_touch";
const LAST = "bs_last_touch";

export type Touch = Partial<Record<(typeof KEYS)[number], string>> & {
  landing?: string;
  referrer?: string;
  at?: string;
};

function read(key: string): Touch | null {
  try {
    const v = localStorage.getItem(key);
    return v ? (JSON.parse(v) as Touch) : null;
  } catch {
    return null;
  }
}

function write(key: string, t: Touch) {
  try {
    localStorage.setItem(key, JSON.stringify(t));
  } catch {
    /* private mode — ignore */
  }
}

/** Call once per page load. */
export function captureAttribution() {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  const touch: Touch = {};
  for (const k of KEYS) {
    const v = params.get(k);
    if (v) touch[k] = v.slice(0, 100);
  }
  const ref = document.referrer && !document.referrer.includes(window.location.host) ? document.referrer : "";
  const hasCampaign = Object.keys(touch).length > 0;
  if (!hasCampaign && !ref) {
    if (!read(FIRST)) write(FIRST, { landing: window.location.pathname, referrer: "direct", at: new Date().toISOString() });
    return;
  }
  touch.landing = window.location.pathname;
  touch.referrer = ref ? new URL(ref).hostname : undefined;
  touch.at = new Date().toISOString();
  if (!read(FIRST)) write(FIRST, touch);
  write(LAST, touch);
}

export function getAttribution(): { first: Touch | null; last: Touch | null } {
  return { first: read(FIRST), last: read(LAST) ?? read(FIRST) };
}

/** Short human-readable source, e.g. "instagram / social / spring-promo". */
export function sourceLabel(t: Touch | null): string | null {
  if (!t) return null;
  if (t.utm_source) return [t.utm_source, t.utm_medium, t.utm_campaign].filter(Boolean).join(" / ");
  if (t.gclid) return "google ads";
  if (t.fbclid) return "facebook / instagram";
  if (t.ttclid) return "tiktok ads";
  if (t.referrer && t.referrer !== "direct") return t.referrer;
  return null;
}
