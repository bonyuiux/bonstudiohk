"use client";

import Image from "next/image";
import Link from "next/link";
import { worksIndex } from "@/content/pages";
import { photo } from "@/content/photos";
import { InView } from "./motion-primitives/in-view";
import { AnimatedGroup } from "./motion-primitives/animated-group";
import { ProgressiveBlur } from "./motion-primitives/progressive-blur";

/**
 * Home gallery: one row per category. Name + one line + "See all", then a strip of
 * photos at a shared height that scrolls sideways (snap). Rows fade up as they arrive,
 * photos stagger in, the strip's right edge melts into a soft blur.
 */
export default function WorksIndex() {
  return (
    <div className="works">
      {worksIndex.map((row) => (
        <InView
          key={row.name}
          once
          viewOptions={{ margin: "0px 0px -10% 0px" }}
          variants={{ hidden: { opacity: 0, y: 24, filter: "blur(4px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)" } }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <article aria-labelledby={`w-${row.name}`}>
            <div className="works__head">
              <div>
                <h3 id={`w-${row.name}`} className="t-heading">
                  {row.name}
                </h3>
                <p className="t-body muted mt-tight">{row.note}</p>
              </div>
              <Link href={row.href} className="t-small" data-cta="works_index">
                See all {row.ids.length}
              </Link>
            </div>
            <div className="works__strip">
              <AnimatedGroup className="strip" preset="blur-slide">
                {row.ids.slice(0, 8).map((id) => {
                  const p = photo(id);
                  return (
                    <Link key={id} href={row.href} className="strip__photo" style={{ aspectRatio: `${p.w} / ${p.h}` }} aria-label={`${row.name}: ${p.alt}`}>
                      <Image src={p.src} alt={p.alt} width={p.w} height={p.h} sizes="(min-width: 1200px) 480px, 360px" />
                    </Link>
                  );
                })}
              </AnimatedGroup>
              <ProgressiveBlur className="strip__fade" direction="right" blurIntensity={0.6} />
            </div>
          </article>
        </InView>
      ))}
    </div>
  );
}
