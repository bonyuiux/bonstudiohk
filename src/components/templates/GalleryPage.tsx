import type { GalleryPageContent } from "@/content/pages";
import { services } from "@/content/site";
import PageIntro from "../PageIntro";
import Gallery from "../Gallery";
import CtaBand from "../CtaBand";
import Process from "../Process";
import Reveal from "../Reveal";
import WhatsAppButton from "../WhatsAppButton";
import JsonLd from "../JsonLd";
import ButtonLink from "../ButtonLink";
import { serviceLd } from "@/lib/seo";

/** Shared layout for service pages (/portrait …) and portfolio pages (/work/…). */
export default function GalleryPage({ page, variant = "service" }: { page: GalleryPageContent; variant?: "service" | "portfolio" }) {
  const message = `Hi Bon Studio! I'd like to ask about a ${page.enquiryType.toLowerCase()} photoshoot.`;
  const others = services.filter((s) => s.key !== page.service && s.href !== page.path);
  return (
    <>
      {variant === "service" && <JsonLd data={serviceLd(page.seoTitle, page.seoDescription, page.path)} />}
      <PageIntro
        eyebrow={page.eyebrow}
        title={page.title}
        aside={
          <div className="mt-7">
            <WhatsAppButton location="page_intro" service={page.service} message={message} label="Ask about dates" />
          </div>
        }
      >
        {page.intro}
      </PageIntro>

      {page.packages && (
        <section className="container-site pb-16 md:pb-24">
          <ul className="grid border-t border-line md:grid-cols-3">
            {page.packages.map((p, i) => (
              <li key={p.name} className="border-b border-line py-7 md:border-b-0 md:py-9 md:pr-8 md:[&:not(:first-child)]:border-l md:[&:not(:first-child)]:pl-8">
                <Reveal delay={i * 0.08}>
                  <p className="t-eyebrow text-accent-soft">0{i + 1}</p>
                  <h2 className="t-h3 mt-3">{p.name}</h2>
                  <p className="t-body mt-2 text-muted">{p.detail}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section aria-label={`${page.eyebrow} gallery`} className="container-site">
        <Gallery ids={page.photos} layout={page.layout} columns={variant === "service" ? 2 : 3} />
      </section>

      {variant === "service" && <Process />}

      <CtaBand title={page.ctaTitle} service={page.service} message={message} />

      <section className="container-site pb-section">
        <div className="flex flex-col gap-6 border-t border-line pt-10 md:flex-row md:items-center md:justify-between">
          <p className="t-eyebrow text-muted">More work</p>
          <ul className="flex flex-wrap gap-3">
            {others.map((s) => (
              <li key={s.key}>
                <ButtonLink href={s.href} cta="more_work">
                  {s.title}
                </ButtonLink>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
