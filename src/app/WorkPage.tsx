import Shell from "@/components/Shell";
import PageHead from "@/components/PageHead";
import Photo from "@/components/Photo";
import { work } from "@/content/pages";
import type { PhotoId } from "@/content/photos";

/** /work/*: title, then photos in their own shape (two columns; one on phones). */
export default function Work({ k }: { k: keyof typeof work }) {
  const w = work[k];
  const item = (id: PhotoId) => (
    <div key={id} className="work-photo">
      <Photo id={id} sizes="(min-width: 810px) 40vw, 100vw" />
    </div>
  );
  const title = w.word.charAt(0).toUpperCase() + w.word.slice(1);
  return (
    <Shell>
      <PageHead title={title} />
      <div className="work-cols mt-block">
        <div className="gal__col">{w.left.map(item)}</div>
        <div className="gal__col">{w.right.map(item)}</div>
      </div>
    </Shell>
  );
}
