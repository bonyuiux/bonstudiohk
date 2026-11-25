// Copy and photos for every page, exactly as on the original Framer site.
// Galleries are two columns; each photo is cropped to a landscape ("l") or portrait ("p") frame.
import type { PhotoId } from "./photos";

export type Shot = { id: PhotoId; shape: "l" | "p" };
export type Columns = [Shot[], Shot[]];

const l = (id: PhotoId): Shot => ({ id, shape: "l" });
const p = (id: PhotoId): Shot => ({ id, shape: "p" });

export const home = {
  tagline: ["A soft pause in time,", "carefully preserved."],
  aboutLabel: "About",
  aboutGrey: "I captures quiet moments as they naturally unfold—gentle light, honest emotion.",
  // the four highlighted words link to their pages (blue on phones, as on the original)
  aboutBlack: [
    "Hong Kong photographer specializing in natural ",
    { text: "portraits", href: "/portrait" },
    ", ",
    { text: "couples", href: "/portrait" },
    ", ",
    { text: "wedding", href: "/wedding" },
    " and ",
    { text: "travel", href: "/hong-kong" },
    " photoshoots.",
  ] as (string | { text: string; href: string })[],
  gallery: [
    [l("iceland-highlands"), p("sheep-below-cliff"), l("dolomites-meadow-leap"), p("couple-laughing-grass")],
    [p("ferry-deck-portrait"), p("dolomites-lake-couple"), l("couple-sunset-silhouette"), l("family-cabin-build")],
  ] as Columns,
};

export const serviceItems = [
  { name: "Portrait", desc: "Couples / Family / Pet / Travel Portraits" },
  { name: "Wedding", desc: "Registry Office / Pre-Wedding / Full Wedding" },
  { name: "Commercial", desc: "Brand Campaigns / Products / Corporate Headshots / Social Media" },
];

export type CategoryPage = {
  path: string;
  title: string;
  intro: string;
  gallery: Columns;
  gallery2?: Columns; // a second gallery under the first (Event page)
  enquiry: string; // shoot type for the WhatsApp message
  seoTitle: string;
  seoDescription: string;
};

export const categories: Record<"portrait" | "wedding" | "event", CategoryPage> = {
  portrait: {
    path: "/portrait",
    title: "Portrait",
    intro: "For couples, families, and travelers in Hong Kong and beyond — a moment kept in time.",
    gallery: [
      [l("lakeside-arch-portrait"), p("beanie-warm-drink"), l("family-harbourfront"), p("ferry-deck-portrait")],
      [p("dunes-portrait"), p("harbour-promenade-portrait"), l("valley-church-couple"), l("family-cabin-build")],
    ],
    enquiry: "portrait",
    seoTitle: "Portrait Photographer Hong Kong | Couples, Families & Travelers | Bon Studio",
    seoDescription: "Natural portrait photography in Hong Kong for couples, families and travelers. Relaxed photoshoots capturing real moments in beautiful light across the city.",
  },
  wedding: {
    path: "/wedding",
    title: "Wedding",
    intro: "For the quiet moments between two people in love. Photographed in Hong Kong and wherever the story leads.",
    gallery: [
      [l("bride-veil-coast"), p("couple-orange-house"), l("wedding-toast-bw"), p("garden-path-couple")],
      [p("bride-window-light"), p("lamma-pier-dance"), l("football-jersey-couple"), l("wedding-guests-cheer")],
    ],
    enquiry: "wedding",
    seoTitle: "Wedding & Pre-Wedding Photographer Hong Kong | Bon Studio",
    seoDescription: "Wedding and pre-wedding photography in Hong Kong capturing real moments between couples. Natural, light-filled storytelling for your love story.",
  },
  event: {
    path: "/event",
    title: "Event",
    intro: "Corporate, school and sports events, birthdays and family gatherings — covered end to end.",
    gallery: [
      [l("event-harbour-talk"), p("event-ceremony-students"), l("event-group-photo"), p("event-photo-booth")],
      [p("event-podium-speech"), p("event-seminar-speaker"), l("event-gala-dinner"), l("event-team-lineup")],
    ],
    gallery2: [
      [l("event-workshop"), p("volleyball-team-huddle")],
      [p("volleyball-celebration"), l("volleyball-team-photo")],
    ],
    enquiry: "event",
    // the Framer site reused the wedding title here; this one describes the page
    seoTitle: "Event Photographer Hong Kong | Corporate, School & Sports | Bon Studio",
    seoDescription: "Event photography in Hong Kong for corporate functions, school ceremonies, sports and family gatherings — covered end to end by Bon Studio.",
  },
};

export const hongKong = {
  label: "Hong Kong Photoshoot",
  title: "A photoshoot that feels like a walk through the city",
  intro: "Capture your journey through Hong Kong with a local photographer — natural photos for couples, families, and travelers visiting the city.",
  sessions: [
    { name: "Short City Session", desc: "~1 hour • 1 location • ideal for couples or solo travelers" },
    { name: "Story Walk", desc: "~1.5–2 hours • 2 locations • relaxed walking shoot" },
    { name: "Extended Session", desc: "~3 hours • deeper exploration of the city" },
  ],
  gallery: [
    [p("hk-harbourfront-run"), p("hk-street-couple"), p("hk-promenade-walk")],
    [l("hk-footbridge-portrait"), p("hk-skyline-portrait"), l("hk-shoreline-portrait"), p("hk-red-railing-friends")],
  ] as Columns,
};

export const about = {
  label: "About",
  title: "A soft pause in time, carefully preserved.",
  lead: "Bon Studio is a Hong Kong–based photography studio focused on calm, natural portraits.",
  body: "I’m drawn to the in-between moments — when light settles, expressions soften, and things feel quietly alive.With a minimalist and airy approach, I photograph couples, people, and travelers in a way that feels relaxed and unforced. The goal isn’t to stage a moment, but to notice it and keep it.",
  photos: ["couple-caravan", "clifftop-traveller"] as [PhotoId, PhotoId],
};

export const servicePage = {
  label: "Service",
  title: "Moments with the people who matter.",
  photos: ["family-cabin-build", "girl-and-dog"] as [PhotoId, PhotoId],
};

export const contactPage = {
  label: "Contact",
  title: "Let's connect!",
  intro: "Share your idea, your story, or a moment you’d like to remember. Whether it’s a portrait session, a couple shoot, or a visit to Hong Kong — I’d love to hear about it.",
  intro2: "We’d love to hear from you!",
};

/** /work/* pages: hero + large rounded photos in their natural shape. `rows` = left/right pairs, top to bottom. */
export const work: Record<"portrait" | "wedding" | "commercial", { word: string; left: PhotoId[]; right: PhotoId[] }> = {
  portrait: {
    word: "Portrait",
    left: ["couple-laughing-grass", "beanie-warm-drink", "tram-stop-night", "valley-church-couple", "footbridge-portrait-bw"],
    right: ["harbour-promenade-portrait", "christmas-night-portrait", "dunes-portrait", "couple-sunset-silhouette", "dolomites-lake-couple-2"],
  },
  wedding: {
    word: "Wedding",
    left: ["registry-bride-bouquet", "football-jersey-couple", "wedding-rings-detail", "hands-on-sand"],
    right: ["registry-couple-embrace", "bride-beach-dusk", "engagement-ring-hand"],
  },
  commercial: {
    word: "commercial",
    left: ["kavu-campaign-1", "kavu-campaign-3", "keen-uneek-blue", "brand-founders", "brand-team-launch"],
    right: ["kavu-campaign-2", "kavu-campaign-4", "keen-uneek-yellow", "event-harbour-talk", "brand-workshop"],
  },
};
