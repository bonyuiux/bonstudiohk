import type { Metadata } from "next";
import Shell from "@/components/Shell";
import PageHead from "@/components/PageHead";
import Btn from "@/components/Btn";
import { thankYou } from "@/content/pages";

// Kept at the original address. Useful as a conversion page in Google Ads / Meta.
export const metadata: Metadata = { title: "Thank You | Bon Studio", robots: { index: false, follow: false } };

export default function ThankYou() {
  return (
    <Shell>
      <PageHead title={thankYou.title}>{thankYou.intro}</PageHead>
      <div className="mt-block">
        <Btn href="/">{thankYou.button}</Btn>
      </div>
    </Shell>
  );
}
