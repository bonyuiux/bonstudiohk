import Link from "next/link";
import Image from "next/image";
import type { CSSProperties } from "react";

const lines = ["A soft pause in time,", "carefully preserved."];

/** Full-screen home hero. Logo sits where the sidebar starts; the headline sits on the content edge. */
export default function HeroVideo() {
  return (
    <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-deep text-on-deep">
      <video
        className="absolute inset-0 h-full w-full object-cover [animation:video-in_1.6s_ease-out_both]"
        src="/video/hero.mp4"
        poster="/video/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/0 to-black/40" />
      <div className="shell relative h-full grid-rows-[auto_1fr]">
        <Link href="/" aria-label="Bon Studio — home" className="hidden pt-12 lg:block">
          <Image src="/brand/wordmark-white.png" alt="Bon Studio" width={723} height={126} className="h-6 w-auto" preload />
        </Link>
        <div className="shell-content row-start-2 self-end pb-section">
          <h1 className="t-display" aria-label={lines.join(" ")}>
            {lines.map((l, i) => (
              <span key={l} data-reveal="line" style={{ "--d": `${300 + i * 140}ms` } as CSSProperties} className="block overflow-hidden pb-2" aria-hidden>
                <span className="block">{l}</span>
              </span>
            ))}
          </h1>
          <p data-reveal="text" style={{ "--d": "700ms" } as CSSProperties} className="t-body mt-stack max-w-text opacity-90">
            A Hong Kong photographer for portraits, weddings and events.
          </p>
        </div>
      </div>
    </section>
  );
}
