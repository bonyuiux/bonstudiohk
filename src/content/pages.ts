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
  tagline: "Framing memories in the making.",
  slides: [
    { kind: "video", label: "Couples in Glencoe, Scotland", link: { label: "View portraits", href: "/portrait" } },
    { kind: "photo", id: "dolomites-meadow-leap", label: "A trip to the Dolomites", link: { label: "View portraits", href: "/portrait" } },
    { kind: "photo", id: "bride-veil-coast", label: "A wedding by the Hong Kong coast", link: { label: "View weddings", href: "/wedding" } },
    { kind: "photo", id: "hk-footbridge-portrait", label: "A day in Central, Hong Kong", link: { label: "View Hong Kong sessions", href: "/hong-kong" } },
    { kind: "photo", id: "family-harbourfront", label: "Family time by the harbour", link: { label: "View portraits", href: "/portrait" } },
  ] as Slide[],
  gallery: [
    [l("iceland-highlands"), p("sheep-below-cliff"), l("dolomites-meadow-leap"), p("couple-laughing-grass")],
    [p("ferry-deck-portrait"), p("dolomites-lake-couple"), l("couple-sunset-silhouette"), l("family-cabin-build")],
  ] as Columns,
};

/** Home sections below the hero. */
export const homeSections = {
  // full-width statement after the gallery (the sidebar ends there)
  statement: {
    lead: "I capture quiet moments as they unfold, finding beauty in the little things along the way.",
    line: "A Hong Kong-based photographer specialising in portraits, couples, weddings and travel photography.",
  },
  contact: {
    title: "Have something in mind?",
    intro: "Tell me a little about the shoot, when and where you’d like to take the photos. The form opens WhatsApp with your message ready to send.",
  },
};

/** /service page: the longer service list. */
export const serviceItemsLong = [
  { name: "Portrait", desc: "Couples, families, friends, pets and travel portraits." },
  { name: "Wedding", desc: "Registry office weddings, pre-wedding sessions and full-day wedding photography." },
  { name: "Commercial", desc: "Brand campaigns, product photography, corporate portraits and social media content." },
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
    intro: "Couples, families, friends and the occasional dog. I’ll help with poses when needed, but most of the time we’ll just spend some time together and see what happens.",
    gallery: [
      [l("lakeside-arch-portrait"), p("beanie-warm-drink"), l("family-harbourfront"), p("ferry-deck-portrait")],
      [p("dunes-portrait"), p("harbour-promenade-portrait"), l("valley-church-couple"), l("family-cabin-build")],
    ],
    enquiry: "portrait",
    seoTitle: "Portrait Photographer Hong Kong | Couples & Family Photography | Bon Studio",
    seoDescription: "Portrait photography in Hong Kong for couples, families, friends and travellers. Relaxed photoshoots in natural light around the city.",
  },
  wedding: {
    path: "/wedding",
    title: "Wedding",
    intro: "From registry office ceremonies to pre-wedding shoots and full wedding days. I photograph the people, the little moments and everything happening around you, so you can look back on the day as it really was.",
    gallery: [
      [l("bride-veil-coast"), p("couple-orange-house"), l("wedding-toast-bw"), p("garden-path-couple")],
      [p("bride-window-light"), p("lamma-pier-dance"), l("football-jersey-couple"), l("wedding-guests-cheer")],
    ],
    enquiry: "wedding",
    seoTitle: "Wedding Photographer Hong Kong | Pre-Wedding & Wedding Photography | Bon Studio",
    seoDescription: "Wedding and pre-wedding photography in Hong Kong, from registry office ceremonies to full wedding days. Get in touch with Bon Studio.",
  },
  event: {
    path: "/event",
    title: "Event",
    intro: "Talks, graduations, gala dinners, volleyball matches and birthdays. I photograph the people and atmosphere, along with the little things happening throughout the day.",
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
    seoTitle: "Event Photographer Hong Kong | Corporate & Private Events | Bon Studio",
    seoDescription: "Event photography in Hong Kong for corporate functions, graduations, sports events and private gatherings. Contact Bon Studio for coverage.",
  },
};

export const hongKong = {
  label: "Hong Kong Photoshoot",
  title: "Hong Kong, through my lens.",
  // paragraphs are separated by a blank line
  intro: "Visiting Hong Kong? Let’s spend some time exploring the city together.\n\nFrom the Central waterfront to quieter streets around the neighbourhood, I’ll take you to a few places I know and photograph your time here along the way.",
  button: "Book a session",
  seoTitle: "Hong Kong Photoshoot for Couples & Travellers | Bon Studio",
  seoDescription: "Visiting Hong Kong? Book a relaxed photoshoot with Bon Studio. Explore the city and take home a collection of photographs from your trip.",
  sessions: [
    { name: "Short City Session", desc: "Around an hour at one location. A good option for couples or solo travellers looking for a few photos during their trip." },
    { name: "Story Walk", desc: "Around 1.5 to 2 hours across two locations. More time to explore and a little more variety in your photos." },
    { name: "Extended Session", desc: "Around three hours. For those who want to see more of Hong Kong and have time to visit several places without rushing." },
  ],
  gallery: [
    [p("hk-harbourfront-run"), p("hk-street-couple"), p("hk-promenade-walk")],
    [l("hk-footbridge-portrait"), p("hk-skyline-portrait"), l("hk-shoreline-portrait"), p("hk-red-railing-friends")],
  ] as Columns,
};

export const about = {
  label: "About",
  title: "Hi, I’m Bon.",
  lead: "I capture quiet moments as they happen, finding beauty in the little things along the way.",
  body: "I’m a photographer based in Hong Kong. I mostly photograph couples, families and people visiting the city, as well as weddings and commercial projects.\n\nI enjoy working with natural light and keeping things relaxed in front of the camera. There’s no need to know how to pose or what to do. I’ll give you a little direction when needed, and the rest comes naturally.\n\nI also photograph when I travel. You’ll find some of those photographs in my portfolio, from the Dolomites to the Faroe Islands.",
  photos: ["couple-caravan", "clifftop-traveller"] as [PhotoId, PhotoId],
};

export const servicePage = {
  label: "Services",
  title: "What I photograph",
  button: "Get in touch",
  photos: ["family-cabin-build", "girl-and-dog"] as [PhotoId, PhotoId],
};

export const contactPage = {
  label: "Contact",
  title: "Say hello.",
  intro: "Have a shoot in mind? Tell me a little about it.\n\nLet me know the date, location and who’s coming along. Even if you haven’t figured everything out yet, feel free to get in touch.\n\nI usually reply within a day, most often on WhatsApp.",
};

/** Category pages (Portrait, Wedding, Event) share one button. */
export const categoryButton = "Ask about a date";

/** Thank you and 404. */
export const thankYou = {
  title: "Thanks, got it.",
  intro: "Your message is ready in WhatsApp. Just press send and I’ll get back to you within a day.\n\nIf WhatsApp didn’t open, you can reach me directly at +852 6576 3288.",
  button: "Back to home",
};
export const notFound = {
  title: "Nothing here.",
  intro: "Looks like this page doesn’t exist. Try the menu to find what you’re looking for.",
  button: "Back to home",
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
    word: "Commercial",
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

