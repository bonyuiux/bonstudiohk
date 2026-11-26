import Shell from "@/components/Shell";
import PageHead from "@/components/PageHead";
import Photo from "@/components/Photo";
import ServiceItems from "@/components/ServiceItems";
import Btn from "@/components/Btn";
import { servicePage, serviceItemsLong } from "@/content/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Photography Services Hong Kong | Portrait, Wedding & Commercial | Bon Studio",
  description: "Explore Bon Studio’s photography services in Hong Kong, including couple portraits, family sessions, pre-wedding shoots, wedding photography and commercial work.",
  path: "/service",
});

export default function Service() {
  return (
    <Shell active="/service">
      <PageHead title={servicePage.title} />
      <div className="mt-block">
        <ServiceItems items={serviceItemsLong} />
      </div>
      <div className="mt-block">
        <Btn href="/contact" cta="service_page">
          {servicePage.button}
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
