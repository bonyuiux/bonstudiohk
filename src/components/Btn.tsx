import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowIcon } from "./icons";

/** Pill button with an ↗ arrow. */
export default function Btn({ href, children, light, block, cta }: { href: string; children: ReactNode; light?: boolean; block?: boolean; cta?: string }) {
  return (
    <Link href={href} data-cta={cta ?? "button"} className={`btn ${light ? "btn--light" : ""} ${block ? "btn--block" : ""}`}>
      {children}
      <ArrowIcon />
    </Link>
  );
}
