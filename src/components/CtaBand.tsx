import Section from "./Section";
import TextBlock from "./TextBlock";
import WhatsAppButton from "./WhatsAppButton";
import LineLink from "./LineLink";

/** End-of-page invitation. */
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
    <Section label="Enquire">
      <TextBlock
        title={title}
        action={
          <div className="flex flex-col items-start gap-stack">
            <WhatsAppButton tone="line" location="cta_band" service={service} message={message} label="Ask on WhatsApp" />
            <LineLink href="/contact" cta="cta_band_form">
              Send an enquiry
            </LineLink>
          </div>
        }
      >
        {text}
      </TextBlock>
    </Section>
  );
}
