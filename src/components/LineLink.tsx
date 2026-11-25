import Link from "next/link";
import type { ReactNode } from "react";

/** The site's link style: a thin line, then the words. The line reaches further on hover. */
export default function LineLink({
  href,
  children,
  cta,
  external,
}: {
  href: string;
  children: ReactNode;
  cta?: string;
  external?: boolean;
}) {
  const inner = (
    <>
      <span aria-hidden className="h-px w-12 bg-current opacity-60 transition-all duration-500 ease-soft group-hover:w-18 group-hover:opacity-100" />
      <span>{children}</span>
    </>
  );
  const cls = "t-body group inline-flex items-center gap-4 transition-colors hover:text-accent";
  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener" data-location={cta}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} data-cta={cta} className={cls}>
      {inner}
    </Link>
  );
}
