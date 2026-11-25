import { site } from "@/content/site";

/** Full-screen home hero: looping video with the tagline. */
export default function HeroVideo() {
  return (
    <section className="relative h-[100svh] min-h-[560px] w-full overflow-hidden bg-deep text-on-deep">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/video/hero.mp4"
        poster="/video/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/5 to-black/45" />
      <div className="container-site relative flex h-full flex-col items-center justify-center text-center">
        <h1 className="t-display max-w-[17ch] [text-wrap:balance] drop-shadow-[0_1px_18px_rgba(0,0,0,0.25)]">
          {site.tagline}
        </h1>
        <p className="t-eyebrow mt-7 opacity-90">Hong Kong photographer · Portrait · Wedding · Event</p>
      </div>
      <a href="#intro" className="t-eyebrow absolute bottom-8 left-1/2 -translate-x-1/2 opacity-80 transition-opacity hover:opacity-100">
        Scroll
        <span aria-hidden className="mx-auto mt-3 block h-8 w-px animate-pulse bg-current" />
      </a>
    </section>
  );
}
