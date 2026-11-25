import type { ReactNode } from "react";
import Reveal from "./Reveal";

/** Top of every inner page: title + intro. Two type roles, nothing else. */
export default function PageIntro({
  title,
  children,
  aside,
}: {
  title: ReactNode;
  children?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <section className="container-site pb-14 pt-32 md:pb-20 md:pt-44">
      <Reveal>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <h1 className="t-title lg:col-span-7">{title}</h1>
          {(children || aside) && (
            <div className="lg:col-span-5 lg:pb-2">
              {children && <div className="t-body max-w-[46ch] text-muted">{children}</div>}
              {aside}
            </div>
          )}
        </div>
      </Reveal>
    </section>
  );
}
