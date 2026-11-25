import Shell from "@/components/Shell";
import PageHead from "@/components/PageHead";
import WhatsAppButton from "@/components/WhatsAppButton";
import LineLink from "@/components/LineLink";
import type { Metadata } from "next";

// Kept at the old Framer address. Useful as a conversion page in Google Ads / Meta.
export const metadata: Metadata = { title: "Thank you", robots: { index: false, follow: false } };

export default function ThankYou() {
  return (
    <Shell>
      <div className="min-h-[80svh]">
        <PageHead
          title="Thank you — I’ll get back to you soon."
          summary="Your message has opened in WhatsApp. Just press send."
          action={
            <div className="flex flex-col items-start gap-stack">
              <WhatsAppButton tone="line" location="thankyou" label="Open WhatsApp again" />
              <LineLink href="/">Back to home</LineLink>
            </div>
          }
        />
      </div>
    </Shell>
  );
}
