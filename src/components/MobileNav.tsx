"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import NavList from "./NavList";

/** Phone: logo + "Menu". Over the home hero it is white and transparent. */
export default function MobileNav({ active, overHero }: { active?: string; overHero?: boolean }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  return (
    <>
      <div className={`mbar ${overHero ? "mbar--over-hero" : ""}`}>
        <Link href="/" aria-label="Bon Studio — home">
          <Image src={overHero ? "/brand/wordmark-white.png" : "/brand/wordmark-black.png"} alt="Bon Studio" width={723} height={126} preload />
        </Link>
        <button type="button" className="t-small" aria-expanded={open} aria-controls="mmenu" onClick={() => setOpen(true)}>
          Menu
        </button>
      </div>
      <div id="mmenu" className="mmenu" hidden={!open} onClick={(e) => (e.target as HTMLElement).closest("a") && setOpen(false)}>
        <div className="mbar" style={{ display: "flex" }}>
          <Link href="/" aria-label="Bon Studio — home">
            <Image src="/brand/wordmark-black.png" alt="Bon Studio" width={723} height={126} />
          </Link>
          <button type="button" className="t-small" onClick={() => setOpen(false)}>
            Close
          </button>
        </div>
        <nav aria-label="Mobile">
          <NavList active={active} />
        </nav>
      </div>
    </>
  );
}
