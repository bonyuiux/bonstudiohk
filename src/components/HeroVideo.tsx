import type { CSSProperties } from "react";
import HKClock from "./HKClock";

const lines = ["A soft pause in time,", "carefully preserved."];

/** Full-screen home hero. The video rises out of black, the headline lifts line by line from behind a mask. */
export default function HeroVideo() {
  return (
    <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-deep">
      <video
        className="absolute inset-0 h-full w-full object-cover [animation:mist-in_2.4s_cubic-bezier(0.16,1,0.3,1)_both]"
        src="/video/hero.mp4"
        poster="/video/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
      />
      {/* mist: darken the top for the header, fade the bottom into the page */}
      <div className="absolute inset-0 bg-gradient-to-b from-paper/60 via-paper/0 to-paper" />
      <div className="grid-site relative h-full content-end pb-28 md:pb-32">
        <h1 className="axis-wide t-display" aria-label={lines.join(" ")}>
          {lines.map((l, i) => (
            <span key={l} data-reveal="line" style={{ "--d": `${400 + i * 160}ms` } as CSSProperties} className="block overflow-hidden pb-2" aria-hidden>
              <span className="block">
                {l}
              </span>
            </span>
          ))}
        </h1>
        <p data-reveal="text" style={{ "--d": "900ms" } as CSSProperties} className="axis-text t-body mt-6 text-ink/80">
          A Hong Kong photographer for portraits, weddings and events.
        </p>
      </div>
      <div className="grid-site absolute inset-x-0 bottom-8 items-end">
        <a href="#intro" className="t-small col-span-6 flex items-center gap-3 text-ink/80 hover:text-ink">
          <span aria-hidden className="h-px w-8 bg-current" />
          Scroll
        </a>
        <HKClock className="col-span-6 justify-self-end text-ink/80" />
      </div>
    </section>
  );
}
