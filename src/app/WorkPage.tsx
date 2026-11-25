import Hero from "@/components/Hero";
import Photo from "@/components/Photo";
import { work } from "@/content/pages";
import type { PhotoId } from "@/content/photos";

/** /work/*: hero, then large rounded photos in their own shape (two columns; one on phones). */
export default function Work({ k }: { k: keyof typeof work }) {
  const w = work[k];
  const interleaved: PhotoId[] = [];
  for (let i = 0; i < Math.max(w.left.length, w.right.length); i++) {
    if (w.left[i]) interleaved.push(w.left[i]);
    if (w.right[i]) interleaved.push(w.right[i]);
  }
  // the original crops this one photo to a fixed 437px height
  const fixed: PhotoId[] = ["couple-sunset-silhouette"];
  const item = (id: PhotoId) => (
    <div key={id} className={`work__photo ${fixed.includes(id) ? "work__photo--fixed" : ""}`}>
      <Photo id={id} sizes="(min-width: 810px) 46vw, 90vw" />
    </div>
  );
  return (
    <>
      <Hero lines={[w.word, "carefully preserved."]} logoOnPhone />
      <section className="work" aria-label={`${w.word} work`}>
        <div className="work__cols">
          <div className="work__col">{w.left.map(item)}</div>
          <div className="work__col">{w.right.map(item)}</div>
        </div>
        <div className="work__list">{interleaved.map(item)}</div>
      </section>
    </>
  );
}
