import Image from "next/image";

/** Full-screen video with the white logo and the Italiana headline (home and /work pages). */
export default function Hero({ lines, logoOnPhone }: { lines: string[]; logoOnPhone?: boolean }) {
  return (
    <section className="hero">
      <video src="/video/hero.mp4" poster="/video/hero-poster.jpg" autoPlay muted loop playsInline preload="auto" aria-hidden />
      <Image
        src="/brand/wordmark-white.png"
        alt="Bon Studio"
        width={723}
        height={126}
        className={`hero__logo ${logoOnPhone ? "" : "hero__logo--hide-phone"}`}
        preload
      />
      <h1 className="hero__title t-italiana">
        {lines.map((l) => (
          <span key={l} style={{ display: "block" }}>
            {l}
          </span>
        ))}
      </h1>
    </section>
  );
}
