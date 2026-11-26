// Copy and photos for every page, exactly as on the original Framer site.
// Galleries are two columns; each photo is cropped to a landscape ("l") or portrait ("p") frame.
import type { PhotoId } from "./photos";

export type Shot = { id: PhotoId; shape: "l" | "p" };
export type Columns = [Shot[], Shot[]];

const l = (id: PhotoId): Shot => ({ id, shape: "l" });
const p = (id: PhotoId): Shot => ({ id, shape: "p" });

export type Slide = { kind: "video" | "photo"; id?: PhotoId; label: string; link: { label: string; href: string } };

export const home = {
  // Big line on the hero. The second line is each slide's label; the button follows the slide.
  tagline: "Photographs of people, unposed.",
  slides: [
    { kind: "video", label: "Couples, Glencoe in Scotland", link: { label: "See portraits", href: "/portrait" } },
    { kind: "photo", id: "dolomites-meadow-leap", label: "Travel, the Dolomites", link: { label: "See portraits", href: "/portrait" } },
    { kind: "photo", id: "bride-veil-coast", label: "Wedding, on the Hong Kong coast", link: { label: "See weddings", href: "/wedding" } },
    { kind: "photo", id: "hk-footbridge-portrait", label: "Hong Kong photoshoot, Central", link: { label: "See Hong Kong sessions", href: "/hong-kong" } },
    { kind: "photo", id: "family-harbourfront", label: "Family, by the harbour", link: { label: "See portraits", href: "/portrait" } },
  ] as Slide[],
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
    intro: "Couples, families, friends, a few dogs. I give you a little direction, then mostly get out of the way, so you end up looking like yourselves.",
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
    intro: "Registry office mornings, pre-wedding walks out to the Lamma pier, the odd full day. I would rather catch your mum wiping her eyes at the back than line everyone up twice.",
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
    intro: "Talks, graduations, gala dinners, volleyball matches, birthdays. I stay out of the speaker’s way and still get the room.",
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
    seoDescription: "Event photography in Hong Kong for corporate functions, school ceremonies, sports and family gatherings, covered end to end by Bon Studio.",
  },
};

export const hongKong = {
  label: "Hong Kong Photoshoot",
  title: "Hong Kong, the way I walk it",
  intro: "You’re here for a few days. I live here. We walk somewhere I know well, the Central harbourfront or a backstreet with good light, and you leave with photos that don’t look like everyone else’s.",
  sessions: [
    { name: "Short City Session", desc: "About an hour in one place. Good for a couple, or someone travelling alone." },
    { name: "Story Walk", desc: "An hour and a half to two hours, two places, at walking pace." },
    { name: "Extended Session", desc: "About three hours. Enough to see more of the city without rushing." },
  ],
  gallery: [
    [p("hk-harbourfront-run"), p("hk-street-couple"), p("hk-promenade-walk")],
    [l("hk-footbridge-portrait"), p("hk-skyline-portrait"), l("hk-shoreline-portrait"), p("hk-red-railing-friends")],
  ] as Columns,
};

export const about = {
  label: "About",
  title: "Hi, I’m Bon.",
  lead: "I run Bon Studio from Hong Kong, and I photograph people.",
  body: "I don’t like stiff poses, and I doubt you do either. My favourite frames happen a second after someone stops performing for the camera: a laugh, a look away, wind getting into a veil. So I pick the light, give you a little direction and wait for that second. Mostly that means couples and families in Hong Kong, travellers passing through, trips to places like the Dolomites and the Faroe Islands, and brands that want pictures that look lived in.",
  photos: ["couple-caravan", "clifftop-traveller"] as [PhotoId, PhotoId],
};

export const servicePage = {
  label: "Service",
  title: "What I shoot",
  photos: ["family-cabin-build", "girl-and-dog"] as [PhotoId, PhotoId],
};

export const contactPage = {
  label: "Contact",
  title: "Say hello",
  intro: "Tell me the date, the place and who’s coming. A rough idea is fine. I reply within a day, usually on WhatsApp.",
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

/** Every photo of a category, in page order (used by the photo browser and the home index). */
export const flat = (c: Columns, c2?: Columns): PhotoId[] => {
  const out: PhotoId[] = [];
  for (const cols of [c, c2]) {
    if (!cols) continue;
    const [a, b] = cols;
    for (let k = 0; k < Math.max(a.length, b.length); k++) {
      if (a[k]) out.push(a[k].id);
      if (b[k]) out.push(b[k].id);
    }
  }
  return out;
};

