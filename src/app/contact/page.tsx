import PageIntro from "@/components/PageIntro";
import EnquiryForm from "@/components/EnquiryForm";
import Reveal from "@/components/Reveal";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Contact — Book a Photoshoot in Hong Kong",
  description: "Ask about a portrait, couple, wedding, event or Hong Kong travel photoshoot. Message Bon Studio on WhatsApp at +852 6576 3288.",
  path: "/contact",
});

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Contact" title="Let’s connect.">
        Share your idea, your story, or a moment you’d like to remember. Whether it’s a portrait session, a couple shoot or a visit to Hong
        Kong — I’d love to hear about it.
      </PageIntro>

      <section className="container-site pb-section">
        <div className="grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <EnquiryForm />
          </Reveal>
          <Reveal className="lg:col-span-4 lg:col-start-9" delay={0.1}>
            <div className="rounded-[3px] border border-line bg-surface p-7">
              <p className="t-eyebrow text-muted">Fastest reply</p>
              <p className="t-h3 mt-3">WhatsApp</p>
              <p className="t-body mt-2 text-muted">{site.replyPromise}</p>
              <div className="mt-6">
                <WhatsAppButton location="contact_card" full label={site.phoneDisplay} />
              </div>
            </div>
            <dl className="mt-8 space-y-5">
              <div>
                <dt className="t-eyebrow text-muted">Email</dt>
                <dd className="t-lead mt-1"><a className="underline-offset-4 hover:underline" data-location="contact_page" href={`mailto:${site.email}`}>{site.email}</a></dd>
              </div>
              <div>
                <dt className="t-eyebrow text-muted">Instagram</dt>
                <dd className="t-lead mt-1"><a className="underline-offset-4 hover:underline" data-location="contact_page" href={site.instagram.url} target="_blank" rel="noopener">{site.instagram.handle}</a></dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>
    </>
  );
}
