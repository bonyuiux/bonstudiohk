import type { ReactNode } from "react";
import MobileBar from "./MobileBar";
import Sidebar from "./Sidebar";

/** Inner pages: phone bar, then the sidebar on the left and the page on the right. */
export default function Inner({ active, children }: { active?: string; children: ReactNode }) {
  return (
    <>
      <MobileBar />
      <div className="inner">
        <Sidebar active={active} />
        <div className="inner__content">{children}</div>
      </div>
    </>
  );
}
