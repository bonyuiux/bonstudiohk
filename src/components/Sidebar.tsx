import Link from "next/link";
import Image from "next/image";
import NavList from "./NavList";

/** Tablet + desktop: logo and a text menu, sticky at the same distance from the top as the page starts. */
export default function Sidebar({ active }: { active?: string }) {
  return (
    <aside className="side">
      <Link href="/" aria-label="Bon Studio — home" className="side__logo">
        <Image src="/brand/wordmark-black.png" alt="Bon Studio" width={723} height={126} />
      </Link>
      <nav aria-label="Main">
        <NavList active={active} />
      </nav>
    </aside>
  );
}
