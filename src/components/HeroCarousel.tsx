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
  const [stroke, setStroke] = useState(0); // bumps to redraw the hand line
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
          {/* the big line, with a pen-stroke swash that draws itself in on load and again on hover */}
          <div className="hero__line" onMouseEnter={() => setStroke((k) => k + 1)}>
            <TextEffect as="h1" per="word" preset="fade-in-blur" speedReveal={0.8} className="hero__tagline t-display">
              {home.tagline}
            </TextEffect>
            {/* a tapered ink stroke (thin, swells, ends in a fine flick), revealed along its centre line like a pen moving */}
            <svg key={stroke} className={`hand ${stroke ? "" : "hand--late"}`} viewBox="0 0 400 24" preserveAspectRatio="none" aria-hidden>
              <defs>
                <mask id={`hand-${stroke}`} maskUnits="userSpaceOnUse" x="0" y="0" width="400" height="24">
                  <path className="hand__pen" pathLength={1} d="M6 15 C80 19, 170 10, 250 13 C310 15, 352 17, 372 12 C382 9.5, 390 6, 396 3" />
                </mask>
              </defs>
              <path className="hand__ink" mask={`url(#hand-${stroke})`} d="M6.0 15.2 L9.7 15.5 L13.4 15.7 L17.2 16.0 L21.0 16.2 L24.8 16.4 L28.6 16.6 L32.5 16.7 L36.4 16.9 L40.3 17.0 L44.2 17.1 L48.2 17.1 L52.1 17.2 L56.1 17.2 L60.1 17.2 L64.1 17.2 L68.1 17.2 L72.2 17.2 L76.2 17.1 L80.3 17.0 L84.4 17.0 L88.5 16.9 L92.6 16.7 L96.7 16.6 L100.9 16.5 L105.0 16.4 L109.1 16.2 L113.3 16.1 L117.5 16.0 L121.6 15.8 L125.8 15.7 L130.0 15.5 L134.2 15.4 L138.3 15.2 L142.5 15.1 L146.7 15.0 L150.9 14.8 L155.1 14.7 L159.3 14.6 L163.5 14.4 L167.7 14.3 L171.8 14.2 L176.0 14.1 L180.2 14.0 L184.4 13.9 L188.6 13.8 L192.7 13.7 L196.9 13.7 L201.0 13.6 L205.2 13.6 L209.3 13.6 L213.4 13.5 L217.5 13.5 L221.6 13.6 L225.7 13.6 L229.8 13.6 L233.9 13.7 L237.9 13.8 L241.9 13.9 L246.0 14.0 L250.0 14.1 L252.9 14.2 L255.9 14.3 L258.8 14.4 L261.7 14.5 L264.6 14.6 L267.4 14.7 L270.2 14.7 L273.0 14.8 L275.7 14.9 L278.4 15.0 L281.1 15.1 L283.8 15.2 L286.4 15.2 L289.0 15.3 L291.5 15.4 L294.1 15.5 L296.5 15.5 L299.0 15.6 L301.4 15.7 L303.8 15.7 L306.2 15.8 L308.5 15.8 L310.8 15.9 L313.1 15.9 L315.3 15.9 L317.5 16.0 L319.7 16.0 L321.8 16.0 L323.9 16.0 L326.0 16.0 L328.0 16.0 L330.0 16.0 L332.0 16.0 L333.9 16.0 L335.8 16.0 L337.7 15.9 L339.5 15.9 L341.3 15.9 L343.1 15.8 L344.8 15.8 L346.5 15.7 L348.2 15.6 L349.8 15.5 L351.4 15.4 L353.0 15.3 L354.5 15.2 L356.0 15.1 L357.5 15.0 L358.9 14.8 L360.3 14.7 L361.6 14.5 L362.9 14.4 L364.2 14.2 L365.5 14.0 L366.7 13.8 L367.8 13.6 L369.0 13.4 L370.1 13.2 L371.1 12.9 L372.2 12.7 L372.7 12.5 L373.2 12.4 L373.7 12.3 L374.1 12.1 L374.6 12.0 L375.1 11.8 L375.6 11.7 L376.1 11.6 L376.5 11.4 L377.0 11.3 L377.5 11.1 L377.9 11.0 L378.4 10.8 L378.8 10.7 L379.3 10.5 L379.7 10.4 L380.2 10.2 L380.6 10.0 L381.1 9.9 L381.5 9.7 L381.9 9.6 L382.4 9.4 L382.8 9.3 L383.2 9.1 L383.6 8.9 L384.0 8.8 L384.5 8.6 L384.9 8.4 L385.3 8.3 L385.7 8.1 L386.1 8.0 L386.5 7.8 L386.8 7.6 L387.2 7.5 L387.6 7.3 L388.0 7.1 L388.4 7.0 L388.7 6.8 L389.1 6.6 L389.5 6.5 L389.8 6.3 L390.2 6.1 L390.6 6.0 L390.9 5.8 L391.3 5.6 L391.6 5.5 L392.0 5.3 L392.3 5.1 L392.6 5.0 L393.0 4.8 L393.3 4.6 L393.6 4.5 L393.9 4.3 L394.3 4.1 L394.6 4.0 L394.9 3.8 L395.2 3.7 L395.5 3.5 L395.8 3.3 L396.1 3.2 L395.9 2.8 L395.6 3.0 L395.3 3.1 L395.0 3.2 L394.7 3.4 L394.3 3.5 L394.0 3.7 L393.7 3.8 L393.4 4.0 L393.0 4.1 L392.7 4.3 L392.4 4.4 L392.0 4.6 L391.7 4.7 L391.3 4.9 L391.0 5.0 L390.6 5.2 L390.3 5.3 L389.9 5.5 L389.5 5.6 L389.2 5.8 L388.8 5.9 L388.4 6.1 L388.1 6.2 L387.7 6.4 L387.3 6.5 L386.9 6.7 L386.5 6.8 L386.1 7.0 L385.7 7.1 L385.3 7.3 L384.9 7.4 L384.5 7.6 L384.1 7.7 L383.7 7.8 L383.3 8.0 L382.9 8.1 L382.4 8.3 L382.0 8.4 L381.6 8.6 L381.2 8.7 L380.7 8.9 L380.3 9.0 L379.8 9.1 L379.4 9.3 L378.9 9.4 L378.5 9.6 L378.0 9.7 L377.6 9.8 L377.1 10.0 L376.7 10.1 L376.2 10.2 L375.7 10.3 L375.2 10.5 L374.8 10.6 L374.3 10.7 L373.8 10.9 L373.3 11.0 L372.8 11.1 L372.3 11.2 L371.8 11.3 L370.8 11.6 L369.8 11.8 L368.7 12.0 L367.6 12.2 L366.4 12.4 L365.2 12.6 L364.0 12.7 L362.7 12.9 L361.4 13.1 L360.1 13.2 L358.7 13.3 L357.3 13.4 L355.9 13.6 L354.4 13.7 L352.9 13.8 L351.3 13.8 L349.8 13.9 L348.1 14.0 L346.5 14.0 L344.8 14.1 L343.1 14.1 L341.3 14.2 L339.5 14.2 L337.7 14.2 L335.8 14.2 L333.9 14.3 L332.0 14.3 L330.0 14.3 L328.0 14.2 L326.0 14.2 L323.9 14.2 L321.8 14.2 L319.7 14.1 L317.5 14.1 L315.4 14.1 L313.1 14.0 L310.9 14.0 L308.6 13.9 L306.2 13.8 L303.9 13.8 L301.5 13.7 L299.1 13.6 L296.6 13.6 L294.1 13.5 L291.6 13.4 L289.0 13.3 L286.5 13.2 L283.8 13.1 L281.2 13.0 L278.5 12.9 L275.8 12.8 L273.1 12.7 L270.3 12.6 L267.5 12.5 L264.7 12.4 L261.8 12.3 L258.9 12.2 L256.0 12.1 L253.0 12.0 L250.0 11.9 L246.0 11.8 L242.0 11.6 L238.0 11.5 L233.9 11.4 L229.8 11.3 L225.7 11.3 L221.6 11.3 L217.5 11.2 L213.4 11.2 L209.3 11.2 L205.1 11.2 L201.0 11.3 L196.8 11.3 L192.7 11.3 L188.5 11.4 L184.3 11.5 L180.2 11.6 L176.0 11.6 L171.8 11.7 L167.6 11.8 L163.4 11.9 L159.2 12.1 L155.0 12.2 L150.8 12.3 L146.6 12.4 L142.4 12.5 L138.3 12.7 L134.1 12.8 L129.9 12.9 L125.7 13.1 L121.5 13.2 L117.4 13.3 L113.2 13.5 L109.1 13.6 L104.9 13.7 L100.8 13.8 L96.7 13.9 L92.5 14.0 L88.4 14.1 L84.3 14.2 L80.3 14.3 L76.2 14.4 L72.1 14.5 L68.1 14.6 L64.1 14.7 L60.1 14.8 L56.1 14.8 L52.1 14.9 L48.2 15.0 L44.2 15.0 L40.3 15.1 L36.4 15.1 L32.5 15.1 L28.7 15.1 L24.8 15.1 L21.0 15.1 L17.2 15.0 L13.5 15.0 L9.7 14.9 L6.0 14.8 Z" />
            </svg>
          </div>
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
