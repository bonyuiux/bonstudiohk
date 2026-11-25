import type { ReactNode } from "react";

/**
 * A page section on the site grid. The optional rail names the section in a
 * thin sticky column on the margin (desktop only), like a chapter mark.
 */
export default function Band({
  children,
  rail,
  id,
  className = "",
  gridClassName = "gap-y-12 md:gap-y-16",
  label,
}: {
  children: ReactNode;
  rail?: string;
  id?: string;
  className?: string;
  gridClassName?: string;
  label?: string;
}) {
  return (
    <section id={id} aria-label={label} className={`relative ${className}`}>
      <div className={`grid-site relative ${gridClassName}`}>
        {rail && (
          <div aria-hidden className="pointer-events-none absolute inset-y-0 left-[var(--spacing-gutter)] hidden lg:block">
            <p className="t-small sticky top-32 text-muted [writing-mode:vertical-rl]">{rail}</p>
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
