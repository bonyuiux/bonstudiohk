import Link from "next/link";
import { navGroups } from "@/content/nav";

/** Text-only menu groups, a small dot marks the current page. */
export default function NavList({ active }: { active?: string }) {
  return (
    <>
      {navGroups.map((group, i) => (
        <div key={i} className="side__group">
          {group.map((l) =>
            l.href.startsWith("http") ? (
              <a key={l.href} href={l.href} target="_blank" rel="noopener" data-location="menu" className="navlink t-small">
                {l.label}
              </a>
            ) : (
              <Link key={l.href} href={l.href} aria-current={active === l.href ? "page" : undefined} className="navlink t-small">
                {l.label}
              </Link>
            ),
          )}
        </div>
      ))}
    </>
  );
}
