import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowIcon } from "./icons";
import { Magnetic } from "./motion-primitives/magnetic";

/** Pill button with an ↗ arrow; drifts gently toward the pointer (Motion Primitives Magnetic). */
export default function Btn({ href, children, light, block, cta }: { href: string; children: ReactNode; light?: boolean; block?: boolean; cta?: string }) {
  return (
    <Magnetic intensity={0.2} range={96}>
    <Link href={href} data-cta={cta ?? "button"} className={`btn ${light ? "btn--light" : ""} ${block ? "btn--block" : ""}`}>
      {children}
      <ArrowIcon />
    </Link>
    </Magnetic>
  );
}
