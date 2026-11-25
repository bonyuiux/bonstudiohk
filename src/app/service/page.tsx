import Inner from "@/components/Inner";
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
    <Inner active="/service">
      <div className="ph-text">
        <p className="t-18">{servicePage.label}</p>
        <h1 className="ph-text__title ph-svc__title t-italiana">{servicePage.title}</h1>
        <div className="ph-svc__list">
          <ServiceItems items={serviceItems} page />
        </div>
        <Btn href="/contact" className="ph-svc__btn" >
          Get in touch
        </Btn>
        <div className="ph-text__photos">
          {servicePage.photos.map((id, i) => (
            <div key={id} className="ph-photo">
              <Photo id={id} fill sizes={i === 0 ? "(min-width: 810px) 36vw, 100vw" : "(min-width: 810px) 24vw, 100vw"} />
            </div>
          ))}
        </div>
      </div>
    </Inner>
  );
}
