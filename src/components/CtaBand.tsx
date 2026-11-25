import Band from "./Band";
import WhatsAppButton from "./WhatsAppButton";
import LineLink from "./LineLink";

/** End-of-page invitation, on the content line like everything else. */
export default function CtaBand({
  title = "Have a moment in mind?",
  text = "Tell me the date, the place and who’s coming. I’ll reply with ideas and a quote.",
  service,
  message,
}: {
  title?: string;
  text?: string;
  service?: string;
  message?: string;
}) {
  return (
    <Band rail="Enquire" className="py-section">
      <div className="axis-text">
        <h2 data-reveal="text" className="t-title">
          {title}
        </h2>
        <p data-reveal="text" className="t-body mt-6 max-w-[44ch] text-muted">
          {text}
        </p>
        <div data-reveal="text" className="mt-10 flex flex-col items-start gap-4">
          <WhatsAppButton tone="line" location="cta_band" service={service} message={message} label="Ask on WhatsApp" />
          <LineLink href="/contact" cta="cta_band_form">
            Send an enquiry
          </LineLink>
        </div>
      </div>
    </Band>
  );
}
