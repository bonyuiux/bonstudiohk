import ButtonLink from "@/components/ButtonLink";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { Metadata } from "next";

// Kept at the old Framer address. Useful as a conversion page in Google Ads / Meta.
export const metadata: Metadata = { title: "Thank you", robots: { index: false, follow: false } };

export default function ThankYou() {
  return (
    <section className="container-site flex min-h-[80svh] flex-col items-center justify-center pb-24 pt-40 text-center">
      <h1 className="t-title max-w-[16ch]">Thank you — I’ll get back to you soon.</h1>
      <p className="t-body mt-6 max-w-[40ch] text-muted">
        Your message has opened in WhatsApp. Just press send. If it didn’t open, tap below.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <WhatsAppButton location="thankyou" label="Open WhatsApp" />
        <ButtonLink href="/">Back to home</ButtonLink>
      </div>
    </section>
  );
}
