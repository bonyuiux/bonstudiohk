import type { GalleryPageContent } from "@/content/pages";
import { services } from "@/content/site";
import Shell from "../Shell";
import PageHead from "../PageHead";
import Section from "../Section";
import TextBlock from "../TextBlock";
import Gallery from "../Gallery";
import CtaBand from "../CtaBand";
import Process from "../Process";
import WhatsAppButton from "../WhatsAppButton";
import JsonLd from "../JsonLd";
import LineLink from "../LineLink";
import { serviceLd } from "@/lib/seo";

/** Category pages (/portrait …) and portfolio pages (/work/…): sidebar left, content right. */
export default function GalleryPage({ page, variant = "service" }: { page: GalleryPageContent; variant?: "service" | "portfolio" }) {
  const message = `Hi Bon Studio! I'd like to ask about a ${page.enquiryType.toLowerCase()} photoshoot.`;
  const others = services.filter((s) => s.key !== page.service && s.href !== page.path);
  return (
    <Shell>
      {variant === "service" && <JsonLd data={serviceLd(page.seoTitle, page.seoDescription, page.path)} />}
      <PageHead
        title={page.title}
        summary={page.intro}
        action={<WhatsAppButton tone="line" location="page_intro" service={page.service} message={message} label="Ask about dates" />}
      />

      {page.packages && (
        <Section label="Sessions">
          <ul className="max-w-text border-b border-line">
            {page.packages.map((p, i) => (
              <li key={p.name} className="border-t border-line py-stack">
                <TextBlock as="h2" size="heading" index={`0${i + 1}`} title={p.name}>
                  {p.detail}
                </TextBlock>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Section label={`${page.label} gallery`}>
        <Gallery ids={page.photos} layout={page.layout} />
      </Section>

      {variant === "service" && <Process />}

      <CtaBand title={page.ctaTitle} service={page.service} message={message} />

      <Section label="More work">
        <TextBlock
          size="heading"
          title="More work"
          action={
            <ul className="space-y-tight">
              {others.map((s) => (
                <li key={s.key}>
                  <LineLink href={s.href} cta="more_work">
                    {s.title}
                  </LineLink>
                </li>
              ))}
            </ul>
          }
        />
      </Section>
    </Shell>
  );
}
