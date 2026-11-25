import type { CSSProperties } from "react";
import type { PhotoId } from "@/content/photos";
import Photo from "./Photo";

/** A photo that fades in as it scrolls into view. `aspect` crops it (e.g. "aspect-[4/5]"); without it the photo keeps its shape. */
export default function Figure({ id, sizes, aspect, delay = 0, eager, className = "" }: { id: PhotoId; sizes?: string; aspect?: string; delay?: number; eager?: boolean; className?: string }) {
  return (
    <div data-reveal="image" style={{ "--d": `${delay}ms` } as CSSProperties} className={`relative overflow-hidden rounded-photo bg-surface ${aspect ?? ""} ${className}`}>
      {aspect ? <Photo id={id} fill sizes={sizes} eager={eager} /> : <Photo id={id} sizes={sizes} eager={eager} />}
    </div>
  );
}
