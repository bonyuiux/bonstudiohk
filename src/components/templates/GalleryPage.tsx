import type { GalleryPageContent } from "@/content/pages";
import { services } from "@/content/site";
import PageHead from "../PageHead";
import Band from "../Band";
import Gallery from "../Gallery";
import CtaBand from "../CtaBand";
import Process from "../Process";
import WhatsAppButton from "../WhatsAppButton";
import JsonLd from "../JsonLd";
import LineLink from "../LineLink";
import { serviceLd } from "@/lib/seo";

/** Shared layout for service pages (/portrait …) and portfolio pages (/work/…). Everything sits on the content line. */
export default function GalleryPage({ page, variant = "service" }: { page: GalleryPageContent; variant?: "service" | "portfolio" }) {
  const message = `Hi Bon Studio! I'd like to ask about a ${page.enquiryType.toLowerCase()} photoshoot.`;
  const others = services.filter((s) => s.key !== page.service && s.href !== page.path);
  return (
    <>
      {variant === "service" && <JsonLd data={serviceLd(page.seoTitle, page.seoDescription, page.path)} />}
      <PageHead
        rail={page.label}
        title={page.title}
        action={<WhatsAppButton tone="line" location="page_intro" service={page.service} message={message} label="Ask about dates" />}
      >
        {page.intro}
      </PageHead>

      {page.packages && (
        <Band gridClassName="" className="pb-16 md:pb-24">
          <ul className="axis-text border-b border-line">
            {page.packages.map((p) => (
              <li key={p.name} data-reveal="text" className="border-t border-line py-6">
                <h2 className="t-heading">{p.name}</h2>
                <p className="t-body mt-1 text-muted">{p.detail}</p>
              </li>
            ))}
          </ul>
        </Band>
      )}

      <Band label={`${page.label} gallery`} gridClassName="">
        <div className="axis-wide">
          <Gallery ids={page.photos} layout={page.layout} columns={variant === "service" ? 2 : 3} />
        </div>
      </Band>

      {variant === "service" && <Process />}

      <CtaBand title={page.ctaTitle} service={page.service} message={message} />

      <Band className="pb-section" gridClassName="">
        <div className="axis-text border-t border-line pt-10">
          <h2 className="t-heading">More work</h2>
          <ul className="mt-6 space-y-3">
            {others.map((s) => (
              <li key={s.key}>
                <LineLink href={s.href} cta="more_work">
                  {s.title}
                </LineLink>
              </li>
            ))}
          </ul>
        </div>
      </Band>
    </>
  );
}
