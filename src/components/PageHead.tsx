import type { ReactNode } from "react";
import Band from "./Band";

/** Top of every inner page: title and intro on the content line, then an optional action. */
export default function PageHead({ title, children, action, rail }: { title: ReactNode; children?: ReactNode; action?: ReactNode; rail?: string }) {
  return (
    <Band rail={rail} className="pb-16 pt-36 md:pb-24 md:pt-48" gridClassName="">
      <div className="axis-text">
        <h1 data-reveal="text" className="t-title">
          {title}
        </h1>
        {children && (
          <div data-reveal="text" style={{ "--d": "120ms" } as React.CSSProperties} className="t-body mt-6 max-w-[44ch] text-muted">
            {children}
          </div>
        )}
        {action && (
          <div data-reveal="text" style={{ "--d": "240ms" } as React.CSSProperties} className="mt-10">
            {action}
          </div>
        )}
      </div>
    </Band>
  );
}
