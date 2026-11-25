// Business details, navigation and shared copy. Edit here — every page reads from this file.
import type { PhotoId } from "./photos";

export const site = {
  name: "Bon Studio",
  url: "https://bonstudiohk.com",
  tagline: "A soft pause in time, carefully preserved.",
  description:
    "Bon Studio is a Hong Kong photographer for calm, natural portraits — couples, families, weddings, events and travel photoshoots across Victoria Harbour, Lamma Island, The Peak and beyond.",
  city: "Hong Kong",
  email: "bonphotograph@gmail.com",
  phoneDisplay: "+852 6576 3288",
  phoneE164: "+85265763288",
  whatsappNumber: "85265763288", // digits only, used for wa.me links
  instagram: { handle: "@bonstudiohk", url: "https://www.instagram.com/bonstudiohk" },
  replyPromise: "I usually reply within 24 hours.",
  founded: 2025,
};

export const nav = {
  work: [
    { label: "Portrait", href: "/portrait" },
    { label: "Wedding", href: "/wedding" },
    { label: "Event", href: "/event" },
    { label: "Hong Kong", href: "/hong-kong" },
  ],
  studio: [
    { label: "About", href: "/about" },
    { label: "Service", href: "/service" },
    { label: "Contact", href: "/contact" },
  ],
};

export type ServiceKey = "portrait" | "wedding" | "event" | "hong-kong" | "commercial";

export const services: {
  key: ServiceKey;
  title: string;
  items: string;
  blurb: string;
  href: string;
  cover: PhotoId;
}[] = [
  {
    key: "portrait",
    title: "Portrait",
    items: "Couples · Family · Pet · Travel",
    blurb: "Relaxed sessions for the people (and animals) you love, in Hong Kong or wherever you travel.",
    href: "/portrait",
    cover: "girl-and-dog",
  },
  {
    key: "wedding",
    title: "Wedding",
    items: "Registry office · Pre-wedding · Full day",
    blurb: "Quiet, honest coverage of the day — from the registry office to the last dance.",
    href: "/wedding",
    cover: "lamma-pier-dance",
  },
  {
    key: "event",
    title: "Event",
    items: "Corporate · School · Sports · Celebrations",
    blurb: "Talks, ceremonies, matches and parties, covered end to end and delivered fast.",
    href: "/event",
    cover: "event-harbour-talk",
  },
  {
    key: "commercial",
    title: "Commercial",
    items: "Brand campaigns · Products · Headshots · Social media",
    blurb: "Natural-light campaigns and product images for brands that want to feel human.",
    href: "/work/commercial",
    cover: "kavu-campaign-2",
  },
];

/** Shoot types offered in the enquiry form. */
export const enquiryTypes = [
  "Couple / portrait",
  "Family or pet",
  "Hong Kong travel photoshoot",
  "Pre-wedding",
  "Wedding / registry office",
  "Event",
  "Commercial / brand",
  "Something else",
];
