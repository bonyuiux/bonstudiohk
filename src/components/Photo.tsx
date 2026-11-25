import Image from "next/image";
import { photo, type PhotoId } from "@/content/photos";

type Props = {
  id: PhotoId;
  sizes?: string;
  className?: string;
  eager?: boolean;
  fill?: boolean;
};

/** A photo from src/content/photos.ts, served responsive (AVIF/WebP) by Next.js. */
export default function Photo({ id, sizes = "(min-width: 768px) 50vw, 100vw", className = "", eager, fill }: Props) {
  const p = photo(id);
  if (fill) {
    return (
      <Image src={p.src} alt={p.alt} fill sizes={sizes} className={`object-cover ${className}`} loading={eager ? "eager" : "lazy"} fetchPriority={eager ? "high" : undefined} />
    );
  }
  return (
    <Image
      src={p.src}
      alt={p.alt}
      width={p.w}
      height={p.h}
      sizes={sizes}
      className={`h-auto w-full ${className}`}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : undefined}
    />
  );
}
