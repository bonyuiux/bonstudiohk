import { site } from "./site";

/** The menu, in three quiet groups: work, studio, contact. */
export const navGroups = [
  [
    { label: "Portrait", href: "/portrait" },
    { label: "Wedding", href: "/wedding" },
    { label: "Event", href: "/event" },
    { label: "Hong Kong", href: "/hong-kong" },
  ],
  [
    { label: "About", href: "/about" },
    { label: "Services", href: "/service" },
    { label: "Contact", href: "/contact" },
  ],
  [
    { label: "WhatsApp", href: `https://wa.me/${site.whatsappNumber}` },
    { label: "Instagram", href: site.instagram.url },
  ],
];
