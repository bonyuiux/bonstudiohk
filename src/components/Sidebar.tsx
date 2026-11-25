"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { nav, site } from "@/content/site";
import { WhatsAppIcon, InstagramIcon } from "./icons";

/** Desktop navigation: sticky on the left of every page. */
export default function Sidebar() {
  const pathname = usePathname();
  const link = (l: { href: string; label: string }) => {
    const active = pathname === l.href || (pathname.startsWith("/work/") && pathname.endsWith(l.href));
    return (
      <li key={l.href}>
        <Link
          href={l.href}
          aria-current={active ? "page" : undefined}
          className={`t-body block transition-colors hover:text-ink ${active ? "text-accent" : "text-muted"}`}
        >
          {l.label}
        </Link>
      </li>
    );
  };
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-12 flex h-[calc(100svh-96px)] flex-col">
        <Link href="/" aria-label="Bon Studio — home" className="block">
          <Image src="/brand/wordmark-black.png" alt="Bon Studio" width={723} height={126} className="h-6 w-auto" />
        </Link>
        <nav aria-label="Main" className="mt-block">
          <ul className="space-y-tight">{nav.work.map(link)}</ul>
          <span aria-hidden className="my-stack block h-px w-6 bg-line" />
          <ul className="space-y-tight">{nav.studio.map(link)}</ul>
        </nav>
        <div className="mt-block flex items-center gap-4 text-muted">
          <a href={`https://wa.me/${site.whatsappNumber}`} data-location="sidebar" target="_blank" rel="noopener" aria-label="WhatsApp" className="transition-colors hover:text-ink">
            <WhatsAppIcon className="h-6 w-6" />
          </a>
          <a href={site.instagram.url} data-location="sidebar" target="_blank" rel="noopener" aria-label="Instagram" className="transition-colors hover:text-ink">
            <InstagramIcon className="h-6 w-6" />
          </a>
        </div>
      </div>
    </aside>
  );
}
