import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowIcon } from "./icons";

/** Internal link styled as a button. data-cta lets Analytics record it as a cta_click. */
export default function ButtonLink({
  href,
  children,
  tone = "outline",
  cta,
}: {
  href: string;
  children: ReactNode;
  tone?: "solid" | "outline" | "text";
  cta?: string;
}) {
  const tones = {
    solid: "h-12 px-6 rounded-pill bg-accent text-on-deep hover:bg-deep",
    outline: "h-12 px-6 rounded-pill border border-ink/30 hover:border-ink hover:bg-ink hover:text-on-deep",
    text: "border-b border-current pb-1 hover:opacity-70",
  };
  return (
    <Link href={href} data-cta={cta} className={`t-small group inline-flex items-center gap-2 transition-colors duration-300 ${tones[tone]}`}>
      {children}
      <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </Link>
  );
}
