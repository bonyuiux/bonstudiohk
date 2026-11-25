import type { PhotoId } from "@/content/photos";
import Figure from "./Figure";

/**
 * Portfolio gallery, always placed from the content line to the right edge (axis-wide).
 * "masonry": photos keep their shape. "grid": equal squares for product / campaign work.
 */
export default function Gallery({ ids, layout = "masonry", columns = 2 }: { ids: PhotoId[]; layout?: "masonry" | "grid"; columns?: 2 | 3 }) {
  if (layout === "grid") {
    return (
      <ul className="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-6">
        {ids.map((id, i) => (
          <li key={id}>
            <Figure id={id} aspect="aspect-square" delay={(i % 3) * 80} sizes="(min-width: 1024px) 24vw, 50vw" />
          </li>
        ))}
      </ul>
    );
  }
  return (
    <ul className={`columns-1 gap-4 sm:columns-2 lg:gap-6 ${columns === 3 ? "lg:columns-3" : ""}`}>
      {ids.map((id, i) => (
        <li key={id} className="mb-4 break-inside-avoid lg:mb-6">
          <Figure id={id} delay={(i % columns) * 80} sizes={columns === 3 ? "(min-width: 1024px) 24vw, (min-width: 640px) 40vw, 100vw" : "(min-width: 1024px) 36vw, (min-width: 640px) 40vw, 100vw"} />
        </li>
      ))}
    </ul>
  );
}
