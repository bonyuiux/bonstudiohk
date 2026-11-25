"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/content/site";
import WhatsAppButton from "./WhatsAppButton";

/** Phone and tablet top bar (below 1024px). On desktop the Sidebar takes over. */
export default function Header() {
  const pathname = usePathname();
  const overHero = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  // The menu remembers the page it was opened on, so it closes itself after navigating.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenOn(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const light = overHero && !scrolled && !open; // white over the hero video

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 ease-soft lg:hidden ${
          light ? "border-transparent bg-transparent text-on-deep" : "border-line/70 bg-paper/90 text-ink backdrop-blur-md"
        }`}
      >
        <div className="flex h-16 items-center justify-between px-gutter">
          <Link href="/" aria-label="Bon Studio — home">
            <Image src={light ? "/brand/wordmark-white.png" : "/brand/wordmark-black.png"} alt="Bon Studio" width={723} height={126} className="h-5 w-auto" preload />
          </Link>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpenOn(open ? null : pathname)}
            className="t-small -mr-2 flex h-12 items-center gap-3 px-2"
          >
            <span className="relative block h-2 w-6" aria-hidden>
              <span className={`absolute left-0 h-px w-6 bg-current transition-transform duration-300 ${open ? "top-1 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 h-px w-6 bg-current transition-transform duration-300 ${open ? "top-1 -rotate-45" : "top-2"}`} />
            </span>
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      {/* Outside <header>: its backdrop-blur would trap a fixed child. */}
      <div id="site-menu" inert={!open} className={`fixed inset-0 z-40 overflow-y-auto bg-paper transition-opacity duration-300 lg:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}>
        <nav aria-label="Mobile" className="flex min-h-full flex-col justify-between px-gutter pb-block pt-page-top">
          <div>
            <ul className="space-y-tight">
              {nav.work.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={`t-title block ${pathname === l.href ? "text-accent" : ""}`}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <span aria-hidden className="my-stack block h-px w-6 bg-line" />
            <ul className="space-y-tight">
              {nav.studio.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={`t-title block ${pathname === l.href ? "text-accent" : ""}`}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-block space-y-stack">
            <p className="t-body text-muted">
              {site.phoneDisplay} · {site.instagram.handle}
            </p>
            <WhatsAppButton location="mobile_menu" full />
          </div>
        </nav>
      </div>
    </>
  );
}
