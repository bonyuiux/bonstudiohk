"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** Marks [data-reveal] elements as in view once they scroll in (see globals.css). One observer for the whole site. */
export default function RevealObserver() {
  const pathname = usePathname();
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            (e.target as HTMLElement).dataset.inview = "";
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px" },
    );
    document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-inview])").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);
  return null;
}
