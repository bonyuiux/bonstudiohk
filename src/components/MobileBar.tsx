import Link from "next/link";
import Image from "next/image";

/** Phone only: the white bar with the logo, as on the original. */
export default function MobileBar() {
  return (
    <div className="mbar">
      <Link href="/" aria-label="Bon Studio — home">
        <Image src="/brand/wordmark-black.png" alt="Bon Studio" width={723} height={126} preload />
      </Link>
    </div>
  );
}
