"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/content/site";
import WhatsAppButton from "./WhatsAppButton";

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
  }, [open]);

  const light = overHero && !scrolled && !open; // white text over the hero video
  const links = [...nav.work, ...nav.studio];

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-soft ${
        light ? "bg-transparent text-on-deep" : "bg-paper/90 text-ink backdrop-blur-md"
      } ${scrolled && !open ? "border-b border-line/70" : "border-b border-transparent"}`}
    >
      <div className="container-site flex h-16 items-center justify-between md:h-20">
        <Link href="/" aria-label="Bon Studio — home" className="relative z-10 shrink-0">
          <Image
            src={light ? "/brand/wordmark-white.png" : "/brand/wordmark-black.png"}
            alt="Bon Studio"
            width={723}
            height={126}
            className="h-5 w-auto md:h-6"
            preload
          />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-6">
            {nav.work.map((l) => (
              <NavLink key={l.href} {...l} active={pathname === l.href} />
            ))}
          </ul>
          <span aria-hidden className="h-4 w-px bg-current opacity-30" />
          <ul className="flex items-center gap-6">
            {nav.studio.map((l) => (
              <NavLink key={l.href} {...l} active={pathname === l.href} />
            ))}
          </ul>
          <WhatsAppButton size="sm" tone={light ? "light" : "solid"} location="header" />
        </nav>

        <button
          type="button"
          className="relative z-10 -mr-2 flex h-11 w-11 items-center justify-center lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpenOn(open ? null : pathname)}
        >
          <span className="relative block h-3 w-6">
            <span className={`absolute left-0 h-px w-6 bg-current transition-transform duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 h-px w-6 bg-current transition-transform duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
          </span>
        </button>
      </div>

    </header>

      {/* Mobile menu (outside <header>: its backdrop-blur would trap a fixed child) */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-0 top-16 z-40 overflow-y-auto bg-paper lg:hidden"
      >
        <nav aria-label="Mobile" className="container-site flex min-h-full flex-col justify-between pb-10 pt-8">
          <ul className="space-y-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={`t-h2 block py-1.5 ${pathname === l.href ? "text-accent" : ""}`}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <WhatsAppButton tone="solid" location="mobile_menu" full />
          </div>
        </nav>
      </div>
    </>
  );
}

function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <li>
      <Link
        href={href}
        aria-current={active ? "page" : undefined}
        className={`t-small relative py-2 transition-opacity hover:opacity-100 ${active ? "opacity-100" : "opacity-75"} after:absolute after:inset-x-0 after:bottom-0.5 after:h-px after:origin-left after:bg-current after:transition-transform after:duration-300 ${active ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"}`}
      >
        {label}
      </Link>
    </li>
  );
}
