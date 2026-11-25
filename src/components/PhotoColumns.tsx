import type { Columns } from "@/content/pages";
import Photo from "./Photo";

/** The original's two-column gallery: landscape and portrait crops, light veil on hover. */
export default function PhotoColumns({ columns, home, eager, className = "" }: { columns: Columns; home?: boolean; eager?: boolean; className?: string }) {
  return (
    <div className={`gal ${home ? "gal--home" : ""} ${className}`}>
      {columns.map((col, c) => (
        <div key={c} className="gal__col">
          {col.map((s, i) => (
            <div key={s.id} className={`gal__item gal__item--${s.shape}`}>
              <Photo id={s.id} fill sizes="(min-width: 1200px) 30vw, (min-width: 810px) 32vw, 50vw" eager={eager && i === 0} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
