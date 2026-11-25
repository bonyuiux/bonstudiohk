import PageHead from "@/components/PageHead";
import Band from "@/components/Band";
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
    <>
      <PageHead
        rail="Contact"
        title="Let’s connect."
        action={<WhatsAppButton location="contact_head" label="WhatsApp us — fastest reply" />}
      >
        Share your idea, your story, or a moment you’d like to remember. Whether it’s a portrait session, a couple shoot or a visit to Hong
        Kong — I’d love to hear about it. {site.replyPromise}
      </PageHead>

      <Band rail="Enquire" className="pb-section" gridClassName="gap-y-16">
        <div data-reveal="text" className="axis-wide lg:col-end-11">
          <EnquiryForm />
        </div>
        <dl className="axis-text border-b border-line">
          {rows.map((r) => (
            <div key={r.label} className="flex flex-col gap-1 border-t border-line py-5 md:flex-row md:gap-6">
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
      </Band>
    </>
  );
}
