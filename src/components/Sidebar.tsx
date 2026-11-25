import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site";
import { WhatsAppIcon, InstagramIcon } from "./icons";

const work = [
  { label: "Portrait", href: "/portrait" },
  { label: "Wedding", href: "/wedding" },
  { label: "Event", href: "/event" },
  { label: "Hong Kong", href: "/hong-kong" },
];
const studio = [
  { label: "About", href: "/about" },
  { label: "Service", href: "/service" },
  { label: "Contact", href: "/contact" },
];

/** The original's left navigation (tablet + desktop). The current page is bold. */
export default function Sidebar({ active }: { active?: string }) {
  return (
    <aside className="side">
      <Link href="/" aria-label="Bon Studio — home" className="side__logo">
        <Image src="/brand/wordmark-black.png" alt="Bon Studio" width={723} height={126} />
      </Link>
      <nav className="side__nav" aria-label="Main">
        {work.map((l) => (
          <Link key={l.href} href={l.href} aria-current={active === l.href ? "page" : undefined}>
            {l.label}
          </Link>
        ))}
        <span className="side__divider" aria-hidden />
        {studio.map((l) => (
          <Link key={l.href} href={l.href} className="is-italic" aria-current={active === l.href ? "page" : undefined}>
            {l.label}
          </Link>
        ))}
      </nav>
      <div className="side__icons">
        <a href={`https://wa.me/${site.whatsappNumber}`} target="_blank" rel="noopener" aria-label="WhatsApp" data-location="sidebar">
          <WhatsAppIcon />
        </a>
        <a href={site.instagram.url} target="_blank" rel="noopener" aria-label="Instagram" data-location="sidebar">
          <InstagramIcon />
        </a>
      </div>
    </aside>
  );
}
