"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { photo, type PhotoId } from "@/content/photos";
import { TransitionPanel } from "./motion-primitives/transition-panel";
import { Cursor } from "./motion-primitives/cursor";
import { SlidingNumber } from "./motion-primitives/sliding-number";

const fade = {
  enter: { opacity: 0, filter: "blur(8px)", scale: 0.98 },
  center: { opacity: 1, filter: "blur(0px)", scale: 1 },
  exit: { opacity: 0, filter: "blur(8px)", scale: 1.01 },
};
const two = (v: number) => (v < 10 ? "0" : "");

/**
 * One large photo at a time with a thumbnail rail (after kengohino.com).
 * Click the left or right half (the cursor says Prev / Next), use ← →, or pick a thumbnail.
 * "Full screen" opens the photo on its own; Esc closes.
 */
export default function PhotoBrowser({ ids, label }: { ids: PhotoId[]; label: string }) {
  const n = ids.length;
  const [i, setI] = useState(0);
  const [side, setSide] = useState<"prev" | "next">("next");
  const [full, setFull] = useState(false);
  const railRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const go = useCallback((to: number) => setI(((to % n) + n) % n), [n]);

  // arrow keys while the browser is on screen (or the viewer is open)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const r = rootRef.current?.getBoundingClientRect();
      const onScreen = r && r.top < window.innerHeight && r.bottom > 0;
      if (!onScreen && !full) return;
      if (e.key === "ArrowRight") go(i + 1);
      if (e.key === "ArrowLeft") go(i - 1);
      if (e.key === "Escape") setFull(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [i, full, go]);

  // keep the current thumbnail in view
  useEffect(() => {
    railRef.current?.querySelector<HTMLElement>('[aria-current="true"]')?.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" });
  }, [i]);
  useEffect(() => {
    document.documentElement.style.overflow = full ? "hidden" : "";
  }, [full]);

  const frames = ids.map((id, k) => (
    <div key={id} className="browser__frame">
      <Image src={photo(id).src} alt={photo(id).alt} fill sizes="(min-width: 1200px) 64vw, (min-width: 810px) 70vw, 100vw" loading={k === 0 ? "eager" : "lazy"} />
    </div>
  ));

  return (
    <div ref={rootRef}>
      <div className="browser">
        <div className="browser__stage" aria-roledescription="photo browser" aria-label={`${label} photos`}>
          <TransitionPanel activeIndex={i} variants={fade} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="browser__frame" style={{ position: "absolute", inset: 0 }}>
            {frames}
          </TransitionPanel>
          <button type="button" className="browser__half browser__half--prev" aria-label="Previous photo" onMouseEnter={() => setSide("prev")} onClick={() => go(i - 1)} />
          <button type="button" className="browser__half browser__half--next" aria-label="Next photo" onMouseEnter={() => setSide("next")} onClick={() => go(i + 1)} />
          <Cursor attachToParent variants={{ initial: { scale: 0.6, opacity: 0 }, animate: { scale: 1, opacity: 1 }, exit: { scale: 0.6, opacity: 0 } }}>
            <span className="browser__cursor t-small">{side === "prev" ? "← Prev" : "Next →"}</span>
          </Cursor>
        </div>
        <div className="rail" ref={railRef} role="tablist" aria-label="Thumbnails">
          {ids.map((id, k) => (
            <button key={id} type="button" role="tab" aria-selected={k === i} aria-current={k === i} aria-label={`Photo ${k + 1}`} onClick={() => go(k)}>
              <Image src={photo(id).src} alt="" width={photo(id).w} height={photo(id).h} sizes="56px" />
            </button>
          ))}
        </div>
      </div>
      <div className="browser__bar mt-near">
        <span className="t-small counter-row">
          <span className="muted">{label}&nbsp;&nbsp;</span>
          <span>{two(i + 1)}</span>
          <SlidingNumber value={i + 1} />
          <span>&nbsp;/ {two(n)}{n}</span>
        </span>
        <button type="button" className="t-small" onClick={() => setFull(true)}>
          Full screen
        </button>
      </div>

      {full &&
        createPortal(
          <div className="viewer" role="dialog" aria-modal="true" aria-label={`${label}, photo ${i + 1} of ${n}`} onClick={() => setFull(false)}>
            <TransitionPanel activeIndex={i} variants={fade} transition={{ duration: 0.5 }} className="browser__frame" style={{ position: "absolute", inset: 0 }}>
              {ids.map((id) => (
                <div key={id} style={{ position: "absolute", inset: 0 }}>
                  <Image src={photo(id).src} alt={photo(id).alt} fill sizes="100vw" />
                </div>
              ))}
            </TransitionPanel>
            <Cursor attachToParent>
              <span className="browser__cursor t-small">Close</span>
            </Cursor>
            <div className="viewer__bar t-small">
              <span className="counter-row">
                {two(i + 1)}
                {i + 1} / {two(n)}
                {n}
              </span>
              <span className="muted">← → to move · Esc to close</span>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}
