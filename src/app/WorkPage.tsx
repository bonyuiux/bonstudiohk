import Shell from "@/components/Shell";
import PageHead from "@/components/PageHead";
import PhotoBrowser from "@/components/PhotoBrowser";
import { work } from "@/content/pages";
import type { PhotoId } from "@/content/photos";

/** /work/*: title, then the photo browser. */
export default function Work({ k }: { k: keyof typeof work }) {
  const w = work[k];
  const ids: PhotoId[] = [];
  for (let n = 0; n < Math.max(w.left.length, w.right.length); n++) {
    if (w.left[n]) ids.push(w.left[n]);
    if (w.right[n]) ids.push(w.right[n]);
  }
  const title = w.word.charAt(0).toUpperCase() + w.word.slice(1);
  return (
    <Shell>
      <PageHead title={title} />
      <div className="mt-block">
        <PhotoBrowser ids={ids} label={title} />
      </div>
    </Shell>
  );
}
