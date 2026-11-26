import Link from "next/link";
import { site } from "@/content/site";
import { ArrowIcon } from "./icons";

/**
 * Compact footer on the page colour, on the same grid as every page:
 * sidebar column left empty; one line to start a conversation, the contact links, and the year.
 */
export default function Footer() {
  const links = [
    { label: site.instagram.handle, href: site.instagram.url },
    { label: site.email, href: `mailto:${site.email}` },
    { label: `WhatsApp ${site.phoneDisplay}`, href: `https://wa.me/${site.whatsappNumber}` },
  ];
  return (
    <footer className="foot">
      <div className="shell">
        {/* the sidebar column stays empty: the sticky sidebar logo is still on screen here */}
        <div aria-hidden />
        <div className="shell__content foot__body">
          <p className="t-body foot__ask">
            <span>Got a date in mind?</span>
            <Link href="/contact" className="textlink" data-cta="footer">
              Message me
              <ArrowIcon />
            </Link>
          </p>
          <div className="foot__meta t-small">
            <ul className="foot__links">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel={l.href.startsWith("http") ? "noopener" : undefined} data-location="footer">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="muted">© {new Date().getFullYear()} Bon Studio</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
