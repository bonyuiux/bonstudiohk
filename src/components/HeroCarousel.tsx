"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import { home } from "@/content/pages";
import { photo } from "@/content/photos";
import MobileNav from "./MobileNav";
import { TextEffect } from "./motion-primitives/text-effect";
import { SlidingNumber } from "./motion-primitives/sliding-number";
import { ArrowRightIcon } from "./icons";

const SLIDE_MS = 6000;

/**
 * Full-bleed, self-playing carousel (film clip + photos). Logo top-left.
 * Bottom-left: the big line (stays), the slide's label (changes) and a text link to that category.
 * No zoom, no blur, no pill button (owner, 2026-11-26).
 * Bottom-right: counter + thin line indicator. Pauses on hover and when the tab is hidden.
 */
export default function HeroCarousel() {
  const n = home.slides.length;
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const touchX = useRef<number | null>(null);
  const go = useCallback((to: number) => setI(((to % n) + n) % n), [n]);

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
        <div className="hero__text hero__copy">
          <TextEffect as="h1" per="word" preset="fade-in-blur" speedReveal={0.8} className="hero__tagline t-display">
            {home.tagline}
          </TextEffect>
          <div className="hero__label" aria-live="polite">
            <TextEffect key={i} as="p" per="word" preset="fade-in-blur" speedReveal={1.6} className="t-body">
              {slide.label}
            </TextEffect>
          </div>
          <Link href={slide.link.href} className="textlink t-body" data-cta="hero">
            {slide.link.label}
            <ArrowRightIcon />
          </Link>
        </div>
        <div className="hero__ctrl">
          <span className="t-small counter-row" aria-hidden>
            <span>0</span>
            <SlidingNumber value={i + 1} />
            <span>&nbsp;/ 0{n}</span>
          </span>
          <div className={`dots ${paused ? "is-paused" : ""}`} style={{ "--slide-ms": `${SLIDE_MS}ms` } as CSSProperties}>
            {home.slides.map((_, k) => (
              <button key={`${k}-${k === i ? i : "x"}`} type="button" aria-label={`Show photo ${k + 1}`} aria-current={k === i} className={k === i ? "is-active" : k < i ? "is-done" : ""} onClick={() => go(k)}>
                <span />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
