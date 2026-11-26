import type { Metadata } from "next";
import Shell from "@/components/Shell";
import PageHead from "@/components/PageHead";
import Btn from "@/components/Btn";

// Kept at the original address. Useful as a conversion page in Google Ads / Meta.
export const metadata: Metadata = { title: "Thank you | Bon Studio", robots: { index: false, follow: false } };

export default function ThankYou() {
  return (
    <Shell>
      <PageHead title="Thank you for your message!">We will get back to you within 24 hours. If WhatsApp didn’t open, send the form again or message +852 6576 3288.</PageHead>
      <div className="mt-block">
        <Btn href="/">Go to home</Btn>
      </div>
    </Shell>
  );
}
