import type { ReactNode } from "react";
import MobileNav from "./MobileNav";
import Sidebar from "./Sidebar";

/** Every page: phone bar, then sidebar on the left and content on the right. */
export default function Shell({ active, children, afterHero }: { active?: string; children: ReactNode; afterHero?: boolean }) {
  return (
    <>
      {!afterHero && <MobileNav active={active} />}
      <div className={`shell ${afterHero ? "shell--after-hero" : ""}`}>
        <Sidebar active={active} />
        <div className="shell__content">{children}</div>
      </div>
    </>
  );
}
