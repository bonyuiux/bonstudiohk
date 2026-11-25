"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/content/site";
import WhatsAppButton from "./WhatsAppButton";
import HKClock from "./HKClock";

export default function Header() {
  const pathname = usePathname();
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

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-500 ease-soft ${
          scrolled && !open ? "border-b border-line/60 bg-paper/80 backdrop-blur-md" : "border-b border-transparent"
        }`}
      >
        <div className="grid-site h-16 items-center md:h-20">
          <Link href="/" aria-label="Bon Studio — home" className="col-span-6 justify-self-start">
            <Image src="/brand/wordmark-white.png" alt="Bon Studio" width={723} height={126} className="h-5 w-auto md:h-6" preload />
          </Link>
          <div className="col-span-6 flex items-center justify-end gap-6">
            <div className="hidden md:block">
              <WhatsAppButton size="sm" tone="outline" location="header" />
            </div>
            <button
              type="button"
              aria-expanded={open}
              aria-controls="site-menu"
              onClick={() => setOpenOn(open ? null : pathname)}
              className="t-small group -mr-2 flex h-11 items-center gap-3 px-2"
            >
              <span className="relative block h-2 w-6" aria-hidden>
                <span className={`absolute left-0 h-px w-6 bg-current transition-transform duration-500 ease-soft ${open ? "top-1 rotate-45" : "top-0"}`} />
                <span className={`absolute left-0 h-px bg-current transition-all duration-500 ease-soft ${open ? "top-1 w-6 -rotate-45" : "top-2 w-4 group-hover:w-6"}`} />
              </span>
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen menu. Outside <header>: its backdrop-blur would trap a fixed child. */}
      <div
        id="site-menu"
        inert={!open}
        className={`fixed inset-0 z-40 overflow-y-auto bg-deep transition-[clip-path] duration-700 ease-soft ${
          open ? "[clip-path:inset(0_0_0_0)]" : "[clip-path:inset(0_0_100%_0)]"
        }`}
      >
        <nav aria-label="Main" className="grid-site min-h-full content-between gap-y-16 pb-10 pt-28 md:pt-36">
          <ul className="axis-text space-y-2">
            {[...nav.work, ...nav.studio].map((l, i) => (
              <li key={l.href} className="overflow-hidden">
                <Link
                  href={l.href}
                  aria-current={pathname === l.href ? "page" : undefined}
                  style={{ transitionDelay: open ? `${160 + i * 48}ms` : "0ms" }}
                  className={`t-title block transition-[transform,color] duration-700 ease-soft hover:text-accent ${
                    open ? "translate-y-0" : "translate-y-full"
                  } ${pathname === l.href ? "text-accent" : ""}`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="axis-full grid grid-cols-12 gap-x-4 gap-y-6 border-t border-line pt-8 lg:gap-x-6">
            <div className="col-span-12 md:col-span-2 lg:col-span-3">
              <HKClock className="text-muted" />
            </div>
            <div className="col-span-12 space-y-1 md:col-span-6 lg:col-span-5">
              <a className="t-body block hover:text-accent" href={`https://wa.me/${site.whatsappNumber}`} data-location="menu">
                {site.phoneDisplay}
              </a>
              <a className="t-body block hover:text-accent" href={`mailto:${site.email}`} data-location="menu">
                {site.email}
              </a>
              <a className="t-body block hover:text-accent" href={site.instagram.url} target="_blank" rel="noopener" data-location="menu">
                {site.instagram.handle}
              </a>
            </div>
            <div className="col-span-12 md:col-span-4 md:justify-self-end">
              <WhatsAppButton location="menu" />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
