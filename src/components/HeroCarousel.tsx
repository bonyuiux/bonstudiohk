"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState, useSyncExternalStore, type CSSProperties } from "react";
import { home } from "@/content/pages";
import { photo } from "@/content/photos";
import MobileNav from "./MobileNav";

const SLIDE_MS = 6000;
type Variant = "a" | "b" | "c";
const VARIANTS: { key: Variant; label: string }[] = [
  { key: "a", label: "A · Image only" },
  { key: "b", label: "B · Tagline" },
  { key: "c", label: "C · Captions" },
];

// Chosen version lives in the URL (?hero=) or localStorage; read it as an external store.
const EVT = "bs-hero";
function readVariant(): Variant {
  const q = new URLSearchParams(window.location.search).get("hero");
  let saved: string | null = null;
  try {
    saved = localStorage.getItem("bs_hero");
  } catch {}
  const v = q ?? saved;
  return v === "b" || v === "c" ? v : "a";
}
function subscribe(cb: () => void) {
  window.addEventListener(EVT, cb);
  return () => window.removeEventListener(EVT, cb);
}

/**
 * Full-bleed, self-playing carousel (film clip + photos), logo top-left, minimal line indicator.
 * Three text versions to choose from — switch with the pill at the bottom right, or ?hero=a|b|c.
 */
export default function HeroCarousel() {
  const n = home.slides.length;
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const variant = useSyncExternalStore(subscribe, readVariant, () => "a" as Variant);
  const videoRef = useRef<HTMLVideoElement>(null);
  const touchX = useRef<number | null>(null);

  const choose = (v: Variant) => {
    try {
      localStorage.setItem("bs_hero", v);
    } catch {}
    const u = new URL(window.location.href);
    u.searchParams.set("hero", v);
    window.history.replaceState(null, "", u);
    window.dispatchEvent(new Event(EVT));
  };

  const go = useCallback((to: number) => setI(((to % n) + n) % n), [n]);

  // auto-advance; pauses on hover/focus and when the tab is hidden
  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => go(i + 1), SLIDE_MS);
    return () => clearTimeout(t);
  }, [i, paused, go]);
  useEffect(() => {
    const onVis = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (home.slides[i].kind === "video") {
      v.currentTime = 0;
      v.play().catch(() => {});
    } else v.pause();
  }, [i]);

  const slide = home.slides[i];

  return (
    <section
      className="hero"
      aria-roledescription="carousel"
      aria-label="Selected photographs"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(i + 1);
        if (e.key === "ArrowLeft") go(i - 1);
      }}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current == null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 40) go(i + (dx < 0 ? 1 : -1));
        touchX.current = null;
      }}
    >
      {home.slides.map((s, k) => (
        <div key={k} className={`hero__slide ${k === i ? "is-active" : ""}`} aria-hidden={k !== i} role="group" aria-roledescription="slide" aria-label={`${k + 1} of ${n}`}>
          {s.kind === "video" ? (
            <video ref={videoRef} src="/video/hero.mp4" poster="/video/hero-poster.jpg" autoPlay muted loop playsInline preload="auto" />
          ) : (
            <Image src={photo(s.id!).src} alt={photo(s.id!).alt} fill sizes="100vw" loading={k === 1 ? "eager" : "lazy"} />
          )}
        </div>
      ))}
      <div className="hero__shade" />

      <MobileNav overHero />
      <Link href="/" className="hero__logo" aria-label="Bon Studio — home">
        <Image src="/brand/wordmark-white.png" alt="Bon Studio" width={723} height={126} preload />
      </Link>

      <div className="hero__foot">
        <div className="hero__text">
          {variant === "b" && <p className="hero__tagline t-display">{home.tagline}</p>}
          {variant === "c" && (
            <div className="hero__caption" aria-live="polite">
              <p className="t-small">{slide.caption}</p>
              <Link href={slide.link.href} className="t-small" data-cta="hero_caption">
                {slide.link.label}
              </Link>
            </div>
          )}
        </div>
        <div className="hero__ctrl">
          {variant === "c" && (
            <span className="t-small counter">
              {String(i + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
            </span>
          )}
          <div className={`dots ${paused ? "is-paused" : ""}`} style={{ "--slide-ms": `${SLIDE_MS}ms` } as CSSProperties}>
            {home.slides.map((_, k) => (
              <button key={`${k}-${k === i ? i : "x"}`} type="button" aria-label={`Show photo ${k + 1}`} aria-current={k === i} className={k === i ? "is-active" : k < i ? "is-done" : ""} onClick={() => go(k)}>
                <span />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Temporary: pick a hero version. Remove <div className="preview"> once you've chosen. */}
      <div className="preview t-small" role="group" aria-label="Hero version (preview only)">
        <span>Hero</span>
        {VARIANTS.map((v) => (
          <button key={v.key} type="button" aria-pressed={variant === v.key} title={v.label} onClick={() => choose(v.key)}>
            {v.key.toUpperCase()}
          </button>
        ))}
      </div>
    </section>
  );
}
