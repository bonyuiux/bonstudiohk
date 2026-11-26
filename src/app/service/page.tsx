import Shell from "@/components/Shell";
import PageHead from "@/components/PageHead";
import Photo from "@/components/Photo";
import ServiceItems from "@/components/ServiceItems";
import Btn from "@/components/Btn";
import { servicePage, serviceItems } from "@/content/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Photography Services in Hong Kong | Portrait, Wedding & Commercial | Bon Studio",
  description: "Photography services by Bon Studio in Hong Kong including couple portraits, pre-wedding photography, family sessions, travel portraits and commercial photography.",
  path: "/service",
});

export default function Service() {
  return (
    <Shell active="/service">
      <PageHead title={servicePage.title} />
      <div className="mt-block">
        <ServiceItems items={serviceItems} />
      </div>
      <div className="mt-block">
        <Btn href="/contact" cta="service_page">
          Get in touch
        </Btn>
      </div>
      <div className="pair mt-block">
        {servicePage.photos.map((id, i) => (
          <div key={id}>
            <Photo id={id} fill sizes={i === 0 ? "(min-width: 810px) 40vw, 100vw" : "(min-width: 810px) 28vw, 100vw"} />
          </div>
        ))}
      </div>
    </Shell>
  );
}
