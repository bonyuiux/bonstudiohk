import type { PhotoId } from "@/content/photos";
import Figure from "./Figure";

/** Two-column gallery in the content column. "masonry" keeps each photo's shape; "grid" crops to squares (product work). */
export default function Gallery({ ids, layout = "masonry" }: { ids: PhotoId[]; layout?: "masonry" | "grid" }) {
  const sizes = "(min-width: 1024px) 36vw, (min-width: 640px) 50vw, 100vw";
  if (layout === "grid") {
    return (
      <ul className="grid grid-cols-2 gap-gallery">
        {ids.map((id, i) => (
          <li key={id}>
            <Figure id={id} aspect="aspect-square" delay={(i % 2) * 80} sizes={sizes} />
          </li>
        ))}
      </ul>
    );
  }
  return (
    <ul className="columns-1 gap-gallery sm:columns-2">
      {ids.map((id, i) => (
        <li key={id} className="mb-gallery break-inside-avoid">
          <Figure id={id} delay={(i % 2) * 80} sizes={sizes} />
        </li>
      ))}
    </ul>
  );
}
