import type { Metadata } from "next";
import Btn from "@/components/Btn";

// Kept at the original address. Useful as a conversion page in Google Ads / Meta.
export const metadata: Metadata = { title: "thankyou", robots: { index: false, follow: false } };

export default function ThankYou() {
  return (
    <section className="ty">
      <h1 className="ty__title">
        Thank you for your message!
        <br />
        We will get back to you within 24hrs!
      </h1>
      <Btn href="/" variant="brown-tall" className="ty__btn" arrow={false}>
        Go to home
      </Btn>
    </section>
  );
}
