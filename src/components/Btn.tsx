import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowIcon } from "./icons";

/** The original's pill button: brown (or white) with an ↗ arrow. */
export default function Btn({ href, children, variant = "brown", className = "", arrow = true }: { href: string; children: ReactNode; variant?: "brown" | "white" | "brown-tall"; className?: string; arrow?: boolean }) {
  const v = variant === "white" ? "btn btn--white" : variant === "brown-tall" ? "btn btn--tall" : "btn";
  return (
    <Link href={href} data-cta={className.split(" ")[0] || "button"} className={`${v} ${className}`}>
      {children}
      {arrow && <ArrowIcon />}
    </Link>
  );
}
