// Copy and photo order for each portfolio / service page. Reorder photo IDs to reorder the gallery.
import type { PhotoId } from "./photos";
import type { ServiceKey } from "./site";

export type GalleryPageContent = {
  path: string;
  service: ServiceKey;
  eyebrow: string;
  title: string;
  intro: string;
  seoTitle: string;
  seoDescription: string;
  enquiryType: string; // pre-selects the enquiry form + WhatsApp message
  photos: PhotoId[];
  layout?: "masonry" | "grid";
  packages?: { name: string; detail: string }[];
  ctaTitle?: string;
};

export const homeGallery: PhotoId[] = [
  "dolomites-meadow-leap",
  "ferry-deck-portrait",
  "lamma-pier-dance",
  "couple-laughing-grass",
  "hk-harbourfront-run",
  "girl-and-dog",
  "dolomites-lake-couple",
  "bride-veil-coast",
  "couple-sunset-silhouette",
  "hk-skyline-portrait",
  "family-cabin-build",
  "clifftop-traveller",
];

export const pages: Record<string, GalleryPageContent> = {
  portrait: {
    path: "/portrait",
    service: "portrait",
    eyebrow: "Portrait",
    title: "Portraits that feel like you, on a good day.",
    intro: "For couples, families, friends and travellers in Hong Kong and beyond — a relaxed session, gentle direction and a moment kept in time.",
    seoTitle: "Portrait Photographer in Hong Kong — Couples, Family & Pet Photoshoots",
    seoDescription: "Natural portrait photography in Hong Kong for couples, families, pets and travellers. Relaxed, unposed sessions in calm, airy light by Bon Studio.",
    enquiryType: "Couple / portrait",
    photos: ["lakeside-arch-portrait", "dunes-portrait", "beanie-warm-drink", "harbour-promenade-portrait", "family-harbourfront", "ferry-deck-portrait", "valley-church-couple", "family-cabin-build", "girl-and-dog", "couple-caravan"],
  },
  wedding: {
    path: "/wedding",
    service: "wedding",
    eyebrow: "Wedding",
    title: "For the quiet moments between two people in love.",
    intro: "Registry office, pre-wedding and full-day coverage — photographed in Hong Kong and wherever the story leads.",
    seoTitle: "Wedding & Pre-Wedding Photographer in Hong Kong",
    seoDescription: "Hong Kong wedding, registry office and pre-wedding photography with a calm, documentary feel. Lamma Island, the harbour, the countryside and overseas.",
    enquiryType: "Wedding / registry office",
    photos: ["bride-veil-coast", "bride-window-light", "couple-orange-house", "lamma-pier-dance", "wedding-toast-bw", "garden-path-couple", "football-jersey-couple", "wedding-guests-cheer", "registry-couple-embrace", "bride-beach-dusk"],
  },
  event: {
    path: "/event",
    service: "event",
    eyebrow: "Event",
    title: "Your event, covered end to end.",
    intro: "Corporate talks and dinners, school ceremonies, sports days, birthdays and family gatherings — the people, the atmosphere and every key moment.",
    seoTitle: "Event Photographer in Hong Kong — Corporate, School & Sports",
    seoDescription: "Event photography in Hong Kong for corporate functions, seminars, school ceremonies, sports and private celebrations. Natural, unobtrusive coverage.",
    enquiryType: "Event",
    photos: ["event-harbour-talk", "event-podium-speech", "event-ceremony-students", "event-seminar-speaker", "event-group-photo", "event-photo-booth", "event-gala-dinner", "event-team-lineup", "event-workshop", "volleyball-celebration", "volleyball-team-huddle", "volleyball-team-photo"],
    ctaTitle: "Planning an event?",
  },
  "hong-kong": {
    path: "/hong-kong",
    service: "hong-kong",
    eyebrow: "Hong Kong Photoshoot",
    title: "A photoshoot that feels like a walk through the city.",
    intro: "Visiting Hong Kong? Explore it with a local photographer — natural photos for couples, families and solo travellers, from the harbour to the backstreets.",
    seoTitle: "Hong Kong Photoshoot for Travellers & Couples — Local Photographer",
    seoDescription: "Book a Hong Kong vacation photoshoot with a local photographer. Relaxed walking sessions at Victoria Harbour, Central, The Peak and hidden streets.",
    enquiryType: "Hong Kong travel photoshoot",
    photos: ["hk-harbourfront-run", "hk-footbridge-portrait", "hk-skyline-portrait", "hk-street-couple", "hk-shoreline-portrait", "hk-red-railing-friends", "hk-promenade-walk", "tram-stop-night", "harbour-promenade-portrait"],
    packages: [
      { name: "Short City Session", detail: "About 1 hour · 1 location · ideal for couples or solo travellers" },
      { name: "Story Walk", detail: "About 1.5–2 hours · 2 locations · a relaxed walking shoot" },
      { name: "Extended Session", detail: "About 3 hours · a deeper exploration of the city" },
    ],
    ctaTitle: "Visiting Hong Kong soon?",
  },
  "work/portrait": {
    path: "/work/portrait",
    service: "portrait",
    eyebrow: "Work · Portrait",
    title: "Portrait",
    intro: "Couples, travellers and people in their own light.",
    seoTitle: "Portrait Portfolio",
    seoDescription: "Selected portrait and couple photography by Bon Studio, Hong Kong.",
    enquiryType: "Couple / portrait",
    photos: ["couple-laughing-grass", "harbour-promenade-portrait", "beanie-warm-drink", "christmas-night-portrait", "tram-stop-night", "dunes-portrait", "valley-church-couple", "couple-sunset-silhouette", "footbridge-portrait-bw", "dolomites-lake-couple-2"],
  },
  "work/wedding": {
    path: "/work/wedding",
    service: "wedding",
    eyebrow: "Work · Wedding",
    title: "Wedding",
    intro: "Registry days, small ceremonies and the details in between.",
    seoTitle: "Wedding Portfolio",
    seoDescription: "Selected wedding, registry office and engagement photography by Bon Studio, Hong Kong.",
    enquiryType: "Wedding / registry office",
    photos: ["registry-bride-bouquet", "registry-couple-embrace", "bride-beach-dusk", "football-jersey-couple", "wedding-rings-detail", "engagement-ring-hand", "hands-on-sand"],
  },
  "work/commercial": {
    path: "/work/commercial",
    service: "commercial",
    eyebrow: "Work · Commercial",
    title: "Commercial",
    intro: "Brand campaigns, products, people and launches — natural light, real feeling.",
    seoTitle: "Commercial & Brand Photography Portfolio",
    seoDescription: "Brand campaign, product and corporate photography in Hong Kong by Bon Studio — KAVU, KEEN and more.",
    enquiryType: "Commercial / brand",
    photos: ["kavu-campaign-1", "kavu-campaign-2", "kavu-campaign-3", "kavu-campaign-4", "keen-uneek-blue", "keen-uneek-yellow", "brand-founders", "brand-workshop", "brand-team-launch", "event-harbour-talk"],
    layout: "grid",
  },
};
