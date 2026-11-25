import WhatsAppButton from "./WhatsAppButton";
import ButtonLink from "./ButtonLink";
import Reveal from "./Reveal";

/** End-of-page call to action before the footer. */
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
    <section className="container-site py-section">
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 className="t-title">{title}</h2>
        <p className="t-body mx-auto mt-5 max-w-[46ch] text-muted">{text}</p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <WhatsAppButton location="cta_band" service={service} message={message} />
          <ButtonLink href="/contact" cta="cta_band_form">
            Send an enquiry
          </ButtonLink>
        </div>
      </Reveal>
    </section>
  );
}
