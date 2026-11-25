import type { ReactNode } from "react";
import Sidebar from "./Sidebar";

/** Every page: sidebar on the left, content on the right (sidebar becomes the top bar below 1024px). */
export default function Shell({ children, afterHero }: { children: ReactNode; afterHero?: boolean }) {
  return (
    <div className={`shell ${afterHero ? "pt-section" : ""}`}>
      <Sidebar />
      <div className="shell-content">{children}</div>
    </div>
  );
}
