import type { ReactNode } from "react";
import Reveal from "./Reveal";

/** Top of every inner page: eyebrow, title, intro. */
export default function PageIntro({
  eyebrow,
  title,
  children,
  aside,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <section className="container-site pb-14 pt-32 md:pb-20 md:pt-44">
      <Reveal>
        <p className="t-eyebrow text-muted">{eyebrow}</p>
        <div className="mt-5 grid gap-8 lg:grid-cols-12 lg:items-end">
          <h1 className="t-h1 lg:col-span-7">{title}</h1>
          {(children || aside) && (
            <div className="lg:col-span-5 lg:pb-2">
              {children && <div className="t-lead max-w-prose text-muted">{children}</div>}
              {aside}
            </div>
          )}
        </div>
      </Reveal>
    </section>
  );
}
