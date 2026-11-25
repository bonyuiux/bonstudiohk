import type { ReactNode } from "react";

/** A section inside the content column. Sections are always one `section` apart. */
export default function Section({ children, id, label, className = "" }: { children: ReactNode; id?: string; label?: string; className?: string }) {
  return (
    <section id={id} aria-label={label} className={`scroll-mt-24 pb-section ${className}`}>
      {children}
    </section>
  );
}
