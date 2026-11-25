import type { PhotoId } from "@/content/photos";
import Photo from "./Photo";
import Reveal from "./Reveal";

/**
 * Portfolio gallery.
 * - "masonry": photos keep their own shape, two columns (three on wide screens if columns=3).
 * - "grid": equal squares, for product / campaign work.
 */
export default function Gallery({
  ids,
  layout = "masonry",
  columns = 2,
}: {
  ids: PhotoId[];
  layout?: "masonry" | "grid";
  columns?: 2 | 3;
}) {
  if (layout === "grid") {
    return (
      <ul className="grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-3">
        {ids.map((id) => (
          <li key={id} className="relative aspect-square overflow-hidden rounded-photo bg-paper-200">
            <Reveal className="absolute inset-0">
              <Photo id={id} fill sizes="(min-width: 1024px) 33vw, 50vw" />
            </Reveal>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <ul className={`columns-1 gap-4 sm:columns-2 md:gap-6 ${columns === 3 ? "xl:columns-3" : ""}`}>
      {ids.map((id) => (
        <li key={id} className="mb-4 break-inside-avoid md:mb-6">
          <Reveal>
            <div className="overflow-hidden rounded-photo bg-paper-200">
              <Photo id={id} sizes={columns === 3 ? "(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw" : "(min-width: 640px) 50vw, 100vw"} />
            </div>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
