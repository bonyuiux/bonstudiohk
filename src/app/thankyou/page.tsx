import type { Metadata } from "next";
import Shell from "@/components/Shell";
import PageHead from "@/components/PageHead";
import Btn from "@/components/Btn";

// Kept at the original address. Useful as a conversion page in Google Ads / Meta.
export const metadata: Metadata = { title: "Thank you | Bon Studio", robots: { index: false, follow: false } };

export default function ThankYou() {
  return (
    <Shell>
      <PageHead title="Thanks, got it.">Your message is open in WhatsApp. Press send and I’ll reply within a day. If WhatsApp didn’t open, message me on +852 6576 3288.</PageHead>
      <div className="mt-block">
        <Btn href="/">Go to home</Btn>
      </div>
    </Shell>
  );
}
