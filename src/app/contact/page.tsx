import Shell from "@/components/Shell";
import PageHead from "@/components/PageHead";
import Section from "@/components/Section";
import TextBlock from "@/components/TextBlock";
import EnquiryForm from "@/components/EnquiryForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Contact — Book a Photoshoot in Hong Kong",
  description: "Ask about a portrait, couple, wedding, event or Hong Kong travel photoshoot. Message Bon Studio on WhatsApp at +852 6576 3288.",
  path: "/contact",
});

export default function Contact() {
  const rows = [
    { label: "WhatsApp & phone", value: site.phoneDisplay, href: `https://wa.me/${site.whatsappNumber}` },
    { label: "Email", value: site.email, href: `mailto:${site.email}` },
    { label: "Instagram", value: site.instagram.handle, href: site.instagram.url },
  ];
  return (
    <Shell>
      <PageHead
        title="Let’s connect."
        summary="Share your idea, your story, or a moment you’d like to remember."
        action={<WhatsAppButton location="contact_head" label="WhatsApp us — fastest reply" />}
      >
        Whether it’s a portrait session, a couple shoot or a visit to Hong Kong — I’d love to hear about it. {site.replyPromise}
      </PageHead>
      <Section label="Enquiry form">
        <TextBlock size="heading" title="Send an enquiry" />
        <div data-reveal="text" className="mt-block">
          <EnquiryForm />
        </div>
      </Section>
      <Section label="Details">
        <dl className="max-w-text border-b border-line">
          {rows.map((r) => (
            <div key={r.label} className="flex flex-col gap-tight border-t border-line py-stack sm:flex-row sm:gap-stack">
              <dt className="t-small w-40 shrink-0 pt-1 text-muted">{r.label}</dt>
              <dd>
                <a
                  href={r.href}
                  data-location="contact_page"
                  target={r.href.startsWith("http") ? "_blank" : undefined}
                  rel={r.href.startsWith("http") ? "noopener" : undefined}
                  className="t-body transition-colors hover:text-accent"
                >
                  {r.value}
                </a>
              </dd>
            </div>
          ))}
        </dl>
      </Section>
    </Shell>
  );
}
